/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCards from "./ShowCards";

const MealCard = ({ data }) => {
  const navigate = useNavigate();
  const [FavData, setFavData] = useState([]);

  useEffect(() => {
    const storedFavData = JSON.parse(localStorage.getItem("FavList")) || [];
    setFavData(storedFavData);
  }, []);

  const handelMealInfo = (item) => {
    navigate("/MealInfo", { state: item });
  };

  const showSweetAlert = () => {
    Swal.fire({
      title: "Done",
      text: "The Meal has been added successfully",
      icon: "success",
    });
  };

  const handelFav = (item) => {
    const updatedData = [...FavData, item];
    // ? to remove dublicated
    let uniqueData = updatedData.filter((item, index) => {
      return index === updatedData.findIndex((t) => t.idMeal === item.idMeal);
    });

    setFavData(uniqueData);
    localStorage.setItem("FavList", JSON.stringify(uniqueData));
    // ? sweet alert
    showSweetAlert();
  };

  return (
    <div className="row justify-content-center align-items-center mt-5" key={1}>
      {!data ? (
        <h1>No Data To Show</h1>
      ) : (
        data.map((item, index) => {
          return (
            <ShowCards
              key={index}
              handelFav={handelFav}
              Mealitem={item}
              handelMealInfo={handelMealInfo}
              isMealInSearchCard={true}
            />
          );
        })
      )}
    </div>
  );
};
export default MealCard;
