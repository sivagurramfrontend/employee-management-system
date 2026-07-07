function ProductCard(props) {
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg  border border-gray-200 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800">
                {props.name}
            </h2>
 <p className="text-xl text-gray-600 font-semibold mt-3">
                {props.brand}
            </p>

            <p className="text-xl text-green-600 font-semibold mt-3">
                ₹{props.price}
            </p>
            <p className="text-xl text-gray-600 font-semibold mt-3">
                {props.rating}
            </p>
            <p className="text-xl text-gray-600 font-semibold mt-3">
                {props.category}
            </p>

            <button className="mt-5 w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                Buy Now
            </button>
        </div>
    );
}

export default ProductCard;