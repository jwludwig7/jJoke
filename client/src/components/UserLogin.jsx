import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const UserLogin = (props) => {

    const { setLogged } = props;
    const initialState = {
        userName: "",
        userPassword: ""
    }
    const [log, setLog] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", log, { withCredentials: true})
        .then(res => {
            setLogged(res.data.user);
            navigate('/jokes/favs')
            // navigate(`/jokes/${res.data.user._id}`);
        })
        .catch(err => {
            console.log(err.response)
            console.log("error error")
            setErrors(
                {
                    userPassword: {
                        message: "Invalid Credentials"
                    },
                    userName: {
                        message: "Invalid Credentials"
                    }
                }
            );
        })
    }


    return (

        <div className="bg-light p-3 border border-1 rounded">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label className="h6">Username:</label>
                <input
                    type="email"
                    name='userName'
                    value={log.userName}
                    className='form-control input-group-text border border-1 rounded-pill'
                    handleChange={handleInputChange}
                    error={errors.userName}
                    placeholder="Email@email.com"
                />
                <label className="h6">Password:</label>
                <input
                    type='password'
                    name='userPassword'
                    value={log.userPassword}
                    className='form-control input-group-text border border-1 rounded-pill'
                    handleChange={handleInputChange}
                    error={errors.userPassword}
                    placeholder="ilovejokes123"
                />
                <button className="btn btn-secondary m-1">Log In</button>
            </form>
        </div>

    )
}

export default UserLogin