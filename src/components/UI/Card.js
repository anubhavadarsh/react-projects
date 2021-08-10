import "./Card.css";

const Card = (props) => {
  const { className: classes } = props;
  return <div className={`card ${classes}`}>{props.children}</div>;
};

export default Card;
