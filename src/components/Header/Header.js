import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Header = () => {
    const [category, setCount] = useContext(CategoryContext)
  return (
    <div>
      <h1>This is Header: {category} </h1>
      <button onClick={() => setCount(category + 1)}>Increment</button>
    </div>
  );
};

export default Header;
