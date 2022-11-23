import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import RandomJoke from "../components/RandomJoke";
import logo from './images/jjoke-logo.png'

export const Home = (props) => {

    const [results, setResults] = useState(null);
    const [search, setSearch] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://v2.jokeapi.dev/joke/Any?safe-mode&contains=${search}`)
            .then((res) => {
                console.log(res);
                setResults(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // useEffect(() => {
    // }, []);

    // if (search === null) {
    //     return <p>Loading</p>;
    // }

    return (
        // <div style={{backgroundColor: "rgb(205,225,231)"}}>
        <div className="background">
            {/* <div className="d-flex justify-content-between bg-light shadow">
                <Link to={'/jokes/filter'}><button className="btn btn-primary shadow">Filter</button></Link>
                <h1 className="">jJoke</h1>
                <Link to={'/jokes/add/joke'}><button className="btn btn-primary shadow">Add Joke</button></Link>
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
                            <Link to={'/jokes/add/joke'} className="text-decoration-none text-dark">Add Joke</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                </div>
            </nav>

            <div className="d-flex justify-content-center p-4">
                <form onSubmit={(event) => {
                    handleSubmit(event);
                }}>
                    <div className="w-50 d-flex">
                        <input
                            className="input-group-text border border-1 rounded-pill"
                            type="search"
                            placeholder="Search Joke"
                            aria-label="Search"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form>
            </div>

            <RandomJoke />

            <div className='bg-light border border-1 rounded m-3 shadow'>
                <h3>Result for: {search}  </h3>
                {/* {search.map((results, i) => {
                    const { joke, setup, delivery } = results
                    return(
                        <div key={i}>
                        </div>
                    )
                })} */}
                {/* <p className="p-2 text-center">{results.joke}</p>
                <p className="p-2 text-center">{results.setup}</p>
                <p className="p-2 text-center">{results.delivery}</p> */}

                <p className="p-2 text-center">{results?.joke}</p>
                <p className="p-2 text-center">{results?.setup}</p>
                <p className="p-2 text-center">{results?.delivery}</p>

            </div>

        </div>
    )
}