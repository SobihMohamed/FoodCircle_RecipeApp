import { useLocation } from "react-router-dom";
const MealInfo = () => {
  const Location = useLocation();
  const RecivedData = Location.state;

  return (
    <div className="MealInfo ">
      <div className="conatienr">
        <div className="row gap-5 justify-content-center align-items-center ">
          <div className="left_info col-lg-5">
            <div className="image">
              <img
                src={RecivedData.strMealThumb}
                alt={RecivedData.strIngredient1}
              />
            </div>
          </div>
          <div className="right_info col-lg-6">
            <h1>Instructions : </h1>
            <p>{RecivedData.strInstructions}</p>
            <h4 className="text-secondary fw-bold">
              {" "}
              <span className="fw-bold text-danger">Name </span>:{" "}
              {RecivedData.strMeal}
            </h4>
            <h4 className="text-secondary fw-bold">
              <span className="fw-bold text-danger">Category</span> :{" "}
              {RecivedData.strCategory}
            </h4>
            <h4>
              Watch A Video{" "}
              <a href={RecivedData.strYoutube} target="_blank">
                <i className="bi bi-youtube fs-3 text-danger"></i>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MealInfo;
