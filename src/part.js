import "./part.css";
function Cart({name,price,offer,rating,src}){
return(
    <div className="Part">
       <img src={src} alt="" />
       <div className="Name">{name}</div>
       <div className="price"><h2>₹{price}</h2></div>
       <div className="detail">
          <div id="offer">{offer}</div>
          <div id="rate">{rating}</div>
       </div>
    </div>
    );
}
export default Cart;