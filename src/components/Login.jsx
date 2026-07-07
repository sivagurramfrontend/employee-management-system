import { useState } from "react";
function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loggedIn, setLogin] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const handleLogin = () => {
        if (username === "" || password === "") {
            alert("Please enter username and password");
        }
        else {
            alert(`Welcome ${username}`);
            setLogin(true);
        }
    };
    return (
        <div className="flex flex-col  justify-center items-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">{loggedIn ? "Welcome Back!" : "Please Login"}</h1>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-2 w-80"
                />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-2 w-80"
                />
</div>
                <button onClick={() => setShowPassword(!showpassword)}>
                    {showpassword ? "Show Password" : "Hide Password"}
                </button>
<div className="mb-4">
                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login</button>
            </div>
        </div>
    );
}
export default Login;