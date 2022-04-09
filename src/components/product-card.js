const ProductCard = (props) => {
  return (
    <div>
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <div>R$ {props.price}</div>
        <span>{props.size}</span>
      </div>
      <button onClick={props.clickHandler}>Add to cart</button>
    </div>
  );
};


export default ProductCard;
