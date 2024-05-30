import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetails() {
  const [data, setData] = useState(null);

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
      className="p-3 mb-2 bg-light text-dark"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        margin: "5%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div className="container-fluid">
          <h1>{data.name}</h1>
          <h5>
            <i class="fa-solid fa-clock"></i>
            {data.timeToPrepare}
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <img
              src="https://img.freepik.com/premium-photo/cooking-fresh-vegetables-green-salad-peppers-mushrooms-eggplant_1029377-3276.jpg?w=740"
              className="img-thumbnail rounded float-end"
              alt="image loading"
              style={{ maxHeight: "50%", maxWidth: "50%" }}
            />
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <h2>Ingredients</h2>
          <p>For 2 people</p>
          {Object.entries(data.ingredients).map(([category, items], index) => (
            <div key={index}>
              <h3>{category}</h3>
              {items.map((item, subIndex) => (
                <div
                  key={subIndex}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p key={subIndex}>{item.name} </p>{" "}
                  <p key={subIndex}>{item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
