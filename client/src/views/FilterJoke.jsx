import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import logo from './images/jjoke-logo.png'

export const FilterJoke = (props) => {

    const [data, setData] = useState(null);
    // const [programming, setProgramming] = useState("");
    // const [nsfw, setNsfw] = useState("")
    // const [single, setSingle] = useState("");


    const [category, setCategory] = useState("");
    const [safeMode, setSafeMode] = useState("");
    const [blacklist, setBlacklist] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://v2.jokeapi.dev/joke/${category}?${safeMode}&blacklistFlags=${blacklist}&type=${type}&amount=${amount}`)
            .then((res) => {
                console.log(res);
                setData(res.data)
                // setCategory(res.data)
                // setBlacklist(res.data)
                // setType(res.data)
                // setAmount(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const toggler = () => {
    //     programming ? setProgramming("programming"): setProgramming("");
    //     console.log({programming})
    // }

    // const handleFormChanges = (e) => {
    //     setCategory({
    //         ...category,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // useEffect(() => {
    //     console.log("render")
    // }, [setCategory])



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


            <h3 className="p-3 text-center">Filter Joke</h3>
            <form
                className="p-3 m-3 bg-light border border-1 rounded shadow"
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <div className="d-flex justify-content-between p-2">
                    <h4>Category</h4>
                    <div className="btn-group">
                        {/* <input
                            type="radio"
                            name="any"
                            className="btn-check"
                            id="btncheck1"
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="btncheck1">
                            Any</label> */}
                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="programming"
                            // onClick={toggler}
                            value={"programming"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="programming">
                            Programming</label>

                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="misc"
                            value={"misc"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="misc">
                            Misc</label>

                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="dark"
                            value={"dark"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="dark">
                            Dark</label>

                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="pun"
                            value={"pun"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="pun">
                            Pun</label>

                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="spooky"
                            value={"spooky"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="spooky">
                            Spooky</label>

                        <input
                            type="radio"
                            name="btnradio"
                            className="btn-check"
                            id="christmas"
                            value={"christmas"}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="christmas">
                            Christmas</label>
                    </div>
                </div>

                <div className="d-flex justify-content-between p-2">
                    <h4>Safe Mode</h4>
                    <div className="btn-group">
                        <input
                            type="radio"
                            name="btnradio4"
                            className="btn-check"
                            id="safe-mode"
                            value={"safe-mode"}
                            onChange={(e) => {
                                setSafeMode(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="safe-mode">
                            Safe-Mode</label>

                        <input
                            type="radio"
                            name="btnradio4"
                            className="btn-check"
                            id="non-safe-mode"
                            value={""}
                            onChange={(e) => {
                                setSafeMode(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="non-safe-mode">
                            Non-Safe-Mode</label>
                    </div>
                </div>

                <div className="d-flex justify-content-between p-2">
                    <h4>Jokes to avoid (optional)</h4>
                    <div className="btn-group">

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="nsfw"
                            value={"nsfw"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="nsfw">
                            NSFW</label>

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="religious"
                            value={"religious"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="religious">
                            Religious</label>

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="political"
                            value={"political"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="political">
                            Political</label>

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="sexist"
                            value={"sexist"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="sexist">
                            Sexist</label>

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="racist"
                            value={"racist"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="racist">
                            Racist</label>

                        <input
                            type="radio"
                            name="btnradio2"
                            className="btn-check"
                            id="explicit"
                            value={"explicit"}
                            onChange={(e) => {
                                setBlacklist(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="explicit">
                            Explicit</label>
                    </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <h4>Joke Type</h4>
                    <div className="btn-group">
                        <input
                            type="radio"
                            name="btnradio3"
                            className="btn-check"
                            id="single"
                            value={"single"}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}

                        />
                        <label
                            className="btn btn-outline-primary"
                            for="single">
                            Single</label>

                        <input
                            type="radio"
                            name="btnradio3"
                            className="btn-check"
                            id="twoPart"
                            value={"twopart"}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                        />
                        <label
                            className="btn btn-outline-primary"
                            for="twoPart">
                            Two Part</label>

                    </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <h4>Amount of Jokes</h4>
                    <div>
                        <input
                            type="number"
                            className="form-control input-group-text"
                            placeholder="69"
                            onChange={(e) => {
                                e.preventDefault();
                                setAmount(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary p-2 shadow">Search</button>
                </div>
            </form>

            <div className='bg-light border border-1 rounded m-3 shadow'>
                <h3 className="p-2">Filtered Results for: {category} {safeMode} {blacklist} {type} {amount}</h3>
                <p className="p-2 text-center">{data?.joke}</p>
                <p className="p-2 text-center">{data?.setup}</p>
                <p className="p-2 text-center">{data?.delivery}</p>
                {Array.isArray(data)

                    ? data.data.jokes.map((joke, i) => {
                        return (
                            <div key={i}>
                                <p>{joke?.joke}</p>
                            </div>
                        )
                    })
                    : null}

            </div>
        </div>
    )
}