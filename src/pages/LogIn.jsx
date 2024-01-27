import React , {useState} from "react";
import Container from "../ui/Container";
const LogIn = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setLoginData({
        ...loginData,
        [name]: value,
        });
    };

    // submit handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Logging in with:", loginData.email, loginData.password);
        setLoginData({
        email: "",
        password: "",
        });
    };

    return (
        <Container>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                Log in
            </h1>
            <form className="mt-6" onSubmit={onSubmitHandler}>
                <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    onChange={onChangeHandler}
                    value={loginData.email}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md 
                                focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                </div>
                <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                    value={loginData.password}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                </div>
                <a href="#" className="text-xs text-purple-600 hover:underline">
                Forget Password?
                </a>
                <div className="mt-6">
                <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <a
                href="/signup"
                className="font-medium text-purple-600 hover:underline"
                >
                Sign up
                </a>
            </p>
            </div>
        </div>
        </Container>
    );
    };

export default LogIn;
