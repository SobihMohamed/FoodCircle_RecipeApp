/* eslint-disable react/prop-types */
const ShowCards = ({
  handelFav,
  Mealitem,
  handelMealInfo,
  isMealInSearchCard,
  removeItem,
  isCategories,
  categoryItem,
  handelClickCategories,
}) => {
  const id = isCategories ? categoryItem.idCategory : Mealitem.idMeal;
  const textheading3 = isCategories
    ? categoryItem.strCategory
    : Mealitem.strMeal;
  const imgSrc = isCategories
    ? categoryItem.strCategoryThumb
    : Mealitem.strMealThumb;
  const icon = isMealInSearchCard ? "bi bi-heart fs-1" : "bi bi-x";
  const Handel = isMealInSearchCard ? handelFav : removeItem;
  const parameterOfHandel = isMealInSearchCard ? Mealitem : id;
  const delbtnCss = isMealInSearchCard ? "" : "btn btn-outline-danger";
  return (
    <>
      <div
        className={`mx-5 my-3 col-lg-3 p-3 col-md-6 col-12 ${
          isCategories ? "CategoItem" : "img_box"
        }`}
        onClick={
          isCategories
            ? () => handelClickCategories(categoryItem.strCategory)
            : null
        }
        key={id}
      >
        <img
          src={imgSrc}
          style={{
            padding: "10px",
            borderRadius: "20px",
          }}
          alt="image"
        />
        <h3 className="text-light fw-bold ">{textheading3}</h3>
        {isCategories ? (
          <></>
        ) : (
          <div className="btns w-50 d-flex justify-content-around align-items-center  ">
            <button
              className="btn btn-outline-warning fw-bold"
              onClick={() => handelMealInfo(Mealitem)}
            >
              {" "}
              Recipe
            </button>
            <span
              className={delbtnCss}
              onClick={() => Handel(parameterOfHandel)}
            >
              <i className={icon}></i>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowCards;
