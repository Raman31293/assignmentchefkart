import React, { useEffect, useState } from "react";
import axios from "axios";
import Dishes from "../Components/Dishes";
import PopularDishes from "../Components/PopularDishes";
import Button from "../Components/Button";
import Header from "../Components/Header";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: "3%",
      }}
    >
      <Header style={{ margin: "2px" }} />
      <div style={{ display: "flex", gap: "50px", margin: "20px" }}>
        <Button name="Italian" />
        <Button name="Indian" />
        <Button name="Indian" />
        <Button name="Indian" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* popular dishes */}
        {data.popularDishes &&
          data.popularDishes.map((dish, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                margin: "10px",
              }}
            >
              <PopularDishes
                name={dish.name}
                // equipments={dish.equipments}
                // description={dish.description}
                image={dish.image}
              />
            </div>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/*  other dishes */}
        {Object.keys(data).map(
          (key) =>
            key !== "popularDishes" &&
            data[key].map((dish, index) => (
              <div key={index}>
                <Dishes
                  name={dish.name}
                  equipments={dish.equipments}
                  description={dish.description}
                  image={dish.image}
                />
              </div>
            ))
        )}
      </div>
    </div>
  );
}
