import {useState} from "react";
function ProductCard({name, price, brand, rating, category}) {
    const [added, setAdded] = useState(false);
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg  border border-gray-200 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800">
                {name}
            </h2>
 <p className="text-xl text-gray-600 font-semibold mt-3">
                {brand}
            </p>

            <p className="text-xl text-green-600 font-semibold mt-3">
                ₹{price}
            </p>
            <p className="text-xl text-gray-600 font-semibold mt-3">
                ⭐ {rating}
            </p>
            <p className="text-xl text-gray-600 font-semibold mt-3">
                {category}
            </p>

<button onClick={() => setAdded(!added)}
                className={`mt-5 w-full text-white py-2 rounded-lg cursor-pointer
                     ${added
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-500 hover:bg-blue-700"
                }`}
            >
                {added ? "Added ✓" : "Buy Now"}
            </button>


        </div>
    );
}

export default ProductCard;