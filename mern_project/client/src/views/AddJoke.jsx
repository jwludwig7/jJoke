import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AllJokes from "../components/AllJokes";
import logo from "./images/jjoke-logo.png"

import { createJoke } from "../services/internalApiService";

export const AddJoke = (props) => {

    const [formData, setFormData] = useState({
        setup: "",
        delivery: ""
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createJoke(formData)
            .then((data) => {
                console.log("new joke data:", data)
                navigate('/jokes')
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="background">
            {/* <div className="d-flex justify-content-between bg-light shadow">
                <Link to={'/jokes/filter'}><button className="btn btn-primary shadow">Filter</button></Link>
                <h1>jJoke</h1>
                <Link to={'/jokes'}><button className="btn btn-primary shadow">Home</button></Link>
            </div> */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse">
                        {/* <!-- Navbar brand --> */}
                            <img
                                className="m-1"
                                src={logo}
                                height="55"
                                alt="jJoke Logo"
                                loading="lazy"
                            />
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav">
                            <li className="nav-item m-2">
                            <Link to={'/jokes/filter'} className="text-decoration-none text-dark">Filter</Link>
                            </li>
                            <li className="nav-item m-2">
                            <Link to={'/jokes'} className="text-decoration-none text-dark">Home</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                </div>
            </nav>

            <div className='d-flex justify-content-center mt-4'>
                <div className="bg-light w-50 p-4 rounded shadow">
                    <h4>Add a Joke.....</h4>
                    <p>but it better be funny or imma laugh at you in disgust and delete it</p>
                    <form onSubmit={(e) => {
                        handleSubmit(e);
                    }}>
                        <div className="form-group">
                            <label className="h6">Set Up:</label>
                            <textarea
                                onChange={handleFormChanges}
                                type="text"
                                name="setup"
                                value={formData.setup}
                                className="form-control"
                            />
                            {
                                errors?.setup && (
                                    <span className="text-danger">{errors.setup?.message}</span>
                                )
                            }
                        </div>
                        <div className='form-group'>
                            <label className="h6">Delivery:</label>
                            <textarea
                                onChange={handleFormChanges}
                                type="string"
                                name='delivery'
                                value={formData.delivery}
                                className="form-control"
                            />
                        </div>
                        {
                            errors?.delivery && (
                                <span className="text-danger">{errors.delivery?.message}</span>
                            )
                        }
                        <button className='btn btn-success shadow'>Submit Joke</button>
                    </form>
                </div>
            </div>
            <div className='mt-4'>
            <AllJokes />
            </div>

        </div>

    )
}