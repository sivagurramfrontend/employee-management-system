import { useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
const [cart, setCart] = useState([]);
 useEffect(() => {

    console.log("Page Loaded");

  }, []);
  const Products = [
    {
      item: "1",
      productname: "Shirt",
      price: "1000",
      stock:true
    },
    {
      item: "2",
      productname: "Pant",
      price: "1500",
      stock:false
    },
    {
      item: "3",
      productname: "Jeans",
      price: "2000",
      stock:true
    }
  ];
  const [users, setUsers]= useState([]);
  const [search, setSearch] = useState("");
  const filteredProducts = Products.filter((product) =>
  product.productname
    .toLowerCase()
    .includes(search.toLowerCase())
);
const addToCart = (product) => {

  setCart([...cart, product]);

};

const dashboardData = [
  {
    title: "Users",
    value: "1500",
    bgcolor: "red"
  },
  {
    title: "Revenue",
    value: "$25,000",
    bgcolor: "green"
  },
  {
    title: "Orders",
    value: "320",
    bgcolor:"yellow"
  }
];

  return (

<div>


      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="main-content">

          <Header />
          <h2>Cart Count: {cart.length}</h2>
<input className="searchinputfiled"
  type="text"
  placeholder="Search Product"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

          <div className="card-container">
          
            {
              dashboardData.map((item) => (
                <Card
                  title={item.title}
                  value={item.value}
                  bgcolor={item.bgcolor}
                />
              ))
            }
           
          </div>
            <div className="product-table">
              <table border="0" cellPadding="0" width="100%">

  <thead>

    <tr>

      <th>ID</th>

      <th>Product Name</th>

      <th>Price</th>

      <th>Stock</th>

    </tr>

  </thead>

  <tbody>

    {
      filteredProducts.map((product) => (

        <tr key={product.item}>

          <td>{product.item}</td>

          <td>{product.productname}</td>

          <td>{product.price}</td>

          <td>
            {
              product.stock
              ? "In Stock"
              : "Out Of Stock"
            }
          </td>

        </tr>

      ))
    }

  </tbody>

</table>
            </div>
          <div className="product_main">
           { filteredProducts.map((product) => (
            
              <ProductCard item={product.item}
              
              productname={product.productname}
              price={product.price} 
              stock={product.stock}
              addToCart={addToCart}
              />
            ))
          } 
                   {/* {
              filteredProducts.map((product) => (
                <ProductCard
                  item={product.item}
                  productname={product.productname}
                  price={product.price}
                  stock={product.stock}
                />
              ))
            } */}
   
          </div>
<Footer />
        </div>

      </div>

    </div>
  );
}

export default App;