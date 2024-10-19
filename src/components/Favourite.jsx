/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCards from "./ShowCards";
import Swal from "sweetalert2";

const Favourite = () => {
  const navigate = useNavigate();
  const [favData, setfavData] = useState([]);

  useEffect(() => {
    const storedFavData = JSON.parse(localStorage.getItem("FavList")) || [];
    setfavData(storedFavData);
  }, []);

  // ? sweet message
  const ShowSweetMsg = () => {
    Swal.fire({
      title: "Done",
      text: "The Meal has been deleted successfully",
      icon: "success",
    });
  };

  // ? after click recipt
  const handelMealInfo = (item) => {
    navigate("/MealInfo", { state: item });
  };

  // ? remove item
  const removeItem = (removedId) => {
    let AfterRemoved = favData.filter((item) => item.idMeal !== removedId);
    setfavData(AfterRemoved);
    localStorage.setItem("FavList", JSON.stringify(AfterRemoved));
    ShowSweetMsg();
  };

  return (
    <div className="Favourite overflow-x-hidden">
      <div className="container">
        <div className="row text-center justify-content-center g-5 my-5">
          <h1 className="text-white mb-5">
            Your Favorite Meals 🍽️ You've Saved
          </h1>
          {favData.length < 1 ? (
            <h1 className="text-danger">No Saved Meals</h1>
          ) : (
            favData.map((item, index) => {
              return (
                <ShowCards
                  key={index}
                  removeItem={removeItem}
                  Mealitem={item}
                  handelMealInfo={handelMealInfo}
                  isMealInSearchCard={false}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
