import React, { useEffect, useState } from 'react';
import { getAllJokes, deleteJoke } from '../services/internalApiService';
import LikeButton from './LikeButton';

const AllJokes = (props) => {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        getAllJokes()
            .then((data) => {
                setJokes(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        deleteJoke(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredJokes = jokes.filter((joke) => {
                    return joke._id !== idToDelete
                })
                setJokes(filteredJokes)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h2>Jokes</h2>
            {jokes.map((joke, i) => {
                const { _id, setup, delivery } = joke;
                return (
                    <div key={i} className="bg-light shadow mb-4 rounded border p-4">
                        <h5>Set Up:</h5>
                        <h6>{setup}</h6>
                        <h5>Delivery:</h5>
                        <h6>{delivery}</h6>
                        <div className='d-flex justify-content-evenly p-3'>
                            <LikeButton />
                            <button
                                className="btn btn-danger mx-1"
                                onClick={(e) => {
                                    handleDeleteClick(_id)
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllJokes