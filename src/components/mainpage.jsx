import axios from "axios";
import MealCard from "./MealCard";
import { useState } from "react";
// ? receive the props
import { useLocation } from "react-router-dom";

const MainPage = () => {
  // ? recive the props in Location.state
  const Location = useLocation();

  // ? make the use state recive the location.state or ""
  const [searchInput, setSearchInput] = useState(Location.state || "");
  const [mealsData, setMealsData] = useState(null);

  const getApi = async () => {
    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      );
      setMealsData(data.meals);
    } catch (erorr) {
      console.error("Erorr On Fetching Data", erorr);
    }
  };

  const handelInpChange = (e) => {
    const val = e.target.value;

    setSearchInput(val);
    if (val === "") {
      setMealsData(null);
    } else {
      getApi();
    }
  };
  return (
    <>
      <div className="meals d-flex flex-column justify-content-start pt-5 align-items-center">
        <h1 className="p-3 rounded-5 start-0 fw-bold mb-5 ">
          Discover Delicious Meals 🥗 & Find Your Next Favorite Dish🍜!
        </h1>
        <div className="container main text-center mt-5 pt-5">
          <div className="searchInp gap-3 flex-wrap d-flex justify-content-center">
            <input
              value={searchInput}
              type="text"
              className="p-3 ps-3 fs-2 w-50 fw-bold rounded-2 border-0 out"
              name="search"
              placeholder="Enter Dish.."
              onChange={handelInpChange}
            />
            <button className="btn btn-warning fs-3 fw-bold" onClick={getApi}>
              Search
            </button>
          </div>
          <MealCard data={mealsData} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
