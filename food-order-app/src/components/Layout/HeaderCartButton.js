import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const totalItems = cartContext.items.reduce(
    (prevNum, item) => prevNum + item.amount,
    0
  );

  return (
    <button onClick={props.onClick} className={styles["button"]}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;