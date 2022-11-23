import React, { useState, useEffect } from 'react';
import axios from "axios";
import LikeButton from './LikeButton';

const RandomJoke = (props) => {

    const [joke, setJoke] = useState("");


    useEffect(() => {
        axios
            .get('https://v2.jokeapi.dev/joke/Any?safe-mode')
            .then((res) => {
                console.log(res.data);
                setJoke(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    
    return (
        <>
            <div className="d-flex justify-content-center p-4 ">
                <div className="w-50 bg-light border border-1 rounded shadow">
                    <h3 className="text-center">Here is a joke for you!</h3>
                    <p className="p-2 text-center">{joke.joke}</p>
                    <p className="p-2 text-center">{joke.setup}</p>
                    <p className="p-2 text-center">{joke.delivery}</p>
                    <div className='p-4'>
                    <LikeButton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomJoke