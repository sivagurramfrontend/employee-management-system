
function ProductCard(props) {
 return (
     <div className="productcard">
         <div className="cardlist">
             <p>{props.item}</p>
             <p>{props.productname}</p>
             <p>{props.price}</p>
             <p>{props.stock ? "instock" : "stock"}</p>
             
         </div>
         <button onClick={() => props.addToCart(props)}>Add Item</button>
     </div>
    
 );

}
export default ProductCard;