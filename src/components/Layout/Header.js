import foodImage from "../Assets/food.png";
import "./Header.css";
import HeaderClassButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header>
        <h2>Ambitious Kitchen</h2>
        <HeaderClassButton />
      </header>
      <div>
        <img src={foodImage} alt="This is table with deliceous food" />
      </div>
    </>
  );
};

export default Header;
