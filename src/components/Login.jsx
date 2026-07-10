import { useState } from 'react';
function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const handleLogin = () => {
        const newErrors = {};

        if (username === '') {
            newErrors.username = "Username is required";
        }

        if (password === '') {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setLoggedIn(true);

        }
    }
    return (
        <div className="login flex flex-col items-center justify-center h-screen">
            <div className="login-container flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md">
                <div className="login-header mb-4">
                    <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <div className="login-form flex flex-col items-center">
                    <div className="form-group mb-4">
                        <label className="block mb-2">Username</label>
                        <input type="text" value={username} 
                        onChange={(e) => {setUsername
                        (e.target.value)
                            setErrors({
                                ...errors, 
                                username: "",
                            });
                        }} 
                        name="username" className="border border-gray-300 rounded-lg p-2 w-64" />
                        <p className="text-sm text-red-500">{errors.username}</p>
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Password</label>
                        <div className="flex items-center relative">
                        <input className="w-full" type={showPassword ? "text" : "password"} value={password} onChange={(e) => {setPassword
                            (e.target.value) 
                            setErrors({
                                ...errors,
                                password: "",
                            });             
                            }}
                            name="password" className="border border-gray-300 rounded-lg p-2 w-64" />
                            
                                  <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-blue-500 text-sm" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>

                        </div>
<p className="text-sm text-red-500">{errors.password}</p>
{password.length > 0 && password.length < 8 && (
    <p className="text-sm text-red-500">
        Password must be at least 8 characters long
    </p>
)}
                    </div>
                    <div className="form-group mb-4">
                        <button
                            className="text-white rounded-lg p-2 w-64 bg-blue-500 hover:bg-blue-600"
                            onClick={handleLogin}>
                            Login
                        </button>
                        {loggedIn && (
                            <p className="text-green-600">
                                Login Successful
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;