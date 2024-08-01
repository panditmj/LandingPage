import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        e.preventDefault();
        if (user.length < 3 || password.length < 3) {
            alert("Please type correct values");
        } else {
            alert("Login successful!");
        }
    }

    function UserHandler(e) {
        let item = e.target.value;
        setUser(item);
        if (item.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
    }

    function PasswordHandler(e) {
        let item = e.target.value;
        setPassword(item);
        if (item.length < 3) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input
                    type="text"
                    placeholder="Enter user id"
                    value={user}
                    onChange={UserHandler}
                />
                {userErr && <span>User ID must be at least 3 characters long</span>}
                <br/><br/>
                <input
                    type="password"
                    placeholder="Enter user Password"
                    value={password}
                    onChange={PasswordHandler}
                />
                {passErr && <span>Password must be at least 3 characters long</span>}
                <br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
