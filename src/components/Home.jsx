import axios from "axios";
// ! use this to change to another component with send to it props
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";

const Home = () => {
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  async function getCategories() {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategory(data.categories);
  }

  useEffect(() => {
    getCategories();
  });

  // !

  function handelClickCategories(name) {
    navigate(`/Meals`, { state: name });
  }

  return (
    <div className="Home text-center">
      <h1>Welcome To FoodCircle Recipe</h1>
      <h2>Let’s see our categories</h2>
      <div className="Categoreis container ">
        <div className="row justify-content-center g-4">
          {category.length == 0 ? (
            <h1>Wait For Loading...</h1>
          ) : (
            category
              .filter(
                (item) => item.idCategory !== "13" && item.idCategory !== "14"
              )
              .map((item, index) => {
                return (
                  <ShowCards
                    key={index}
                    isCategories={true}
                    categoryItem={item}
                    handelClickCategories={handelClickCategories}
                  />
                  // <div
                  //   className="CategoItem col-lg-3 mx-5 col-md-6 col-12 "
                  //   key={item.idCategory}
                  //   onClick={() => handelClickCategories(item.strCategory)}
                  // >
                  //   <img src={item.strCategoryThumb} alt={item.strCategory} />
                  //   <h3>{item.strCategory}</h3>
                  // </div>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
