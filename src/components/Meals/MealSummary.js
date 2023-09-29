import classes from "./MealSummary.module.css";

const MealSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Deliceous food, Deliver to You</h2>
      <div>
        <p>
          Choose your meal form our broad selection of available meals and enjoy
          deliceous lunch or dinner at home{" "}
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just in-time
          and off-course by experienced cheff{" "}
        </p>
      </div>
    </section>
  );
};

export default MealSummary;
