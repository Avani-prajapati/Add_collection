import "./Addproduct.css";
import { useState } from "react";
function Addproduct({addproduct}) {
    const [product,setProduct]=useState({
        name:"" ,
        price:"",
        offer:"",
        rating:"4.5*" ,
        src:""
    });

    function handleSubmit(){
        // e.preventDefault();
         addproduct(product);
         setProduct({
            name:"" ,
            price:"",
            offer:"",
            rating:"4.5*" ,
            src:""
        });
    
    }
    function handleChange(e){
     setProduct({...product,
       [e.target.name]:e.target.value
    })
    }
  return (<>

  <form>
   <input type="text"  name="src"  placeholder=" image src link"  onChange={handleChange} value={product.src} />
   <input type="text" name ="price" placeholder="price" onChange={handleChange} value={product.price}/>
   <input type="text" name ="offer" placeholder="offer" onChange={handleChange}  value={product.offer}/>
   <input type="text" name ="name" placeholder="name of product" onChange={handleChange} value={product.name}/>
  </form>
  <button onClick={handleSubmit}>Add Product</button>
  </>);
}
export default Addproduct;
