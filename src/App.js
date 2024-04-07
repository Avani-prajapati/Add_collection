import Cart from "./part";
import obj from "./object";
import "./App.css";
import {useState} from "react"
import Addproduct from "./Addproduct";
function App(e){
  const [products,setProducts]=useState(obj);
  
  function addproduct(product){
    setProducts([...products,{...product, id:product.legth+1}]);
  }
  
  // e.stopPropogation();
// const filt1=obj.filter((e)=>
// e.price==="2500"
// );

return(
  <div>

  <div className="main">
{/* <Cart {...obj[0]} ></Cart>
<Cart {...obj[1]} ></Cart>
<Cart {...obj[2]} ></Cart>
<Cart {...obj[0]} ></Cart>
<Cart {...obj[2]} ></Cart>
<Cart {...obj[1]} ></Cart>
<Cart {...obj[0]} ></Cart>
<Cart {...obj[1]} ></Cart> */}

{products.map(Carts=>
<Cart
  key={Carts.id}
  name={Carts.name}
  price={Carts.price}
  offer={Carts.offer}
  rating={Carts.rating} 
  src={Carts.src}
>
</Cart>)}
  </div>
<Addproduct addproduct={addproduct}></Addproduct>
  </div>
  );
}
export default App;
