import { useEffect, useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const totalItems = cartContext.items.reduce(
    (prevNum, item) => prevNum + item.amount,
    0
  );

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length <= 0) return;

    setBtnIsHighlighted(true);

    const timeout = setTimeout(() => setBtnIsHighlighted(false), 300);

    return () => clearInterval(timeout);
  }, [cartContext.items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
