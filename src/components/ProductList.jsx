import ProductCard from "./ProductCard";

function ProductList() {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 50000,
            brand: "Dell",
            rating: 4.5,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000,
            brand: "Apple",         
            rating: 4.8,
            category: "Electronics",
        },
        {
            id: 3,
            name: "Headphones",
            price: 3000,
            brand: "Sony",
            rating: 4.2,
            category: "Electronics",
        },
    ];

    return (
        <div className="product-list bg-gray-100 flex justify-center items-center gap-6 flex-wrap p-10">
            {products.map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price} brand={product.brand} rating={product.rating} category={product.category} />
            ))}
        </div>
    );
}

export default ProductList;