import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsClock } from "react-icons/bs";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get(
            "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, 100);
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          backgroundColor: "white",
        }}
      >
        <IoChevronBack
          style={{ fontSize: "25px", marginRight: "5px" }}
          onClick={handleClick}
        />
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div div style={{ width: "60%", borderBottom: "1px solid" }}>
          <div className="d-flex flex-row bd-highlight mb-3">
            <h1>{data.name}</h1>
          </div>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              Mughlai Masala is a style of cookery developed in the Indian
              Subcontinent by the imperial kitchens of the Mughal Empire.
            </div>
          </div>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <p>
                <BsClock style={{ margin: "5px" }} />
                {data.timeToPrepare}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "auto",
            width: "40%",
          }}
        >
          <img
            src="https://img.freepik.com/premium-photo/cooking-fresh-vegetables-green-salad-peppers-mushrooms-eggplant_1029377-3276.jpg?w=740"
            className="img-fluid"
            alt="image loading"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "30%",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      <div div className="container-fluid" style={{ margin: "2px" }}>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <h2>Ingredients</h2>

            <p>For 2 people</p>
          </div>
        </div>
        {Object.entries(data.ingredients).map(([category, items], index) => (
          <div key={index}>
            {category !== "appliances" && (
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  <h3>
                    {category}({category.length})
                  </h3>
                </div>
                <div className="p-2 bd-highlight">
                  <h2>
                    <IoMdArrowDropdown />
                  </h2>
                </div>
              </div>
            )}
            {items.map(
              (item, subIndex) =>
                category !== "appliances" && (
                  <div
                    key={subIndex}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p key={subIndex}>{item.name} </p>
                    <p key={subIndex}>{item.quantity}</p>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <h2>Appliances</h2>
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <img
          src="https://media.croma.com/image/upload/v1710847149/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_0_aq6xu0.png"
          style={{ width: "30%", height: "50%" }}
          className="img-fluid"
          alt="image loading"
        />
        <img
          src="https://media.croma.com/image/upload/v1710847149/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_0_aq6xu0.png"
          style={{ width: "30%", height: "50%" }}
          className="img-fluid"
          alt="image loading"
        />
        <img
          src="https://media.croma.com/image/upload/v1710847149/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_0_aq6xu0.png"
          style={{ width: "30%", height: "50%" }}
          className="img-fluid"
          alt="image loading"
        />
      </div>
    </div>
  );
}
