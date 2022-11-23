import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import UserLogin from "../components/UserLogin";

export const LoginReg = (props) => {


    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userConfirmPW, setConfirmPassword] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userLastName, setLastName] = useState("");
    const [errors, setErrors] = useState(null);


    const register = (event) => {
        event.preventDefault();

        const newUser = { userName, userEmail, userPassword, userConfirmPW };

        axios
            .post("http://localhost:8000/api/register", newUser, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                setUserName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setFirstName("");
                setLastName("");
            })
            .catch((err) => {
                console.log(err);

                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className="background">
            <div className="d-flex justify-content-between bg-light">
                <Link to={'/jokes/filter'}><button className="btn btn-primary">Filter</button></Link>
                <h1>jJoke</h1>
                <Link to={'/jokes'}><button className="btn btn-primary">Home</button></Link>
            </div>
            <div className="d-flex justify-content-evenly p-4">
                <UserLogin />
                <div className="bg-light p-3 border border-1 rounded">
                    <h3>Register</h3>
                    <form onSubmit={register}>
                        <div>
                            <label className="h6">Username:</label>
                            <input
                                type="text"
                                name="userName"
                                value={userName}
                                className='form-control input-group-text border border-1 rounded-pill'
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Itachi"
                            />
                            {errors?.userName && (
                                <span className="error-message">
                                    {errors.userName?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label className="h6">First Name:</label>
                            <input
                                type="text"
                                name="userFirstName"
                                value={userFirstName}
                                className='form-control input-group-text border border-1 rounded-pill'
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Itachi"
                            />
                            {errors?.userFirstName && (
                                <span className="error-message">
                                    {errors.userFirstName?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div>

                            <label className="h6">Last Name:</label>
                            <input
                                type='text'
                                name='userLastName'
                                value={userLastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='form-control input-group-text border border-1 rounded-pill'
                                placeholder='Uchiha'
                            />
                            {errors?.userLastName && (
                                <span className="error-message">
                                    {errors.userLastName?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div>

                            <label className="h6">Email</label>
                            <input
                                type='email'
                                name='userEmail'
                                value={userEmail}
                                className='form-control input-group-text border border-1 rounded-pill'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='email@email.com'
                            />
                            {errors?.userPassword && (
                                <span className="error-message">
                                    {errors.userPassword?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div>

                            <label className="h6">Password:</label>
                            <input
                                type='password'
                                name='userPassword'
                                value={userPassword}
                                className='form-control input-group-text border border-1 rounded-pill'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='ilovejokes123'
                            />
                            {errors?.userPassword && (
                                <span className="error-message">
                                    {errors.userPassword?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div>

                            <label className="h6">Confirm Password:</label>
                            <input
                                type='password'
                                name="userConfirmPW"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={userConfirmPW}
                                className='form-control input-group-text border border-1 rounded-pill'
                                placeholder='ilovejokes123'
                            />
                            {errors?.userConfirmPW ? (
                                <span className="error-message">
                                    {errors.userConfirmPW?.properties?.message}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <button className="btn btn-secondary m-1">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}