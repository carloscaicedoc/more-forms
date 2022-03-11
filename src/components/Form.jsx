import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSumitted] = useState(false);
    const [firstnameError, setFirstnameError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setHasBeenSumitted(true);
    };

    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h2>Thank you for submitting the form!</h2> :
                        <h2 className="ms-1 mb-3">New Member Form</h2>
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">First Name:</span>
                    <input type="text" name="firstname" onChange={(e) => setFirstname(e.target.value)} className="form-control" />
                </div>
                {
                    firstname.length < 3 && firstname.length > 0 ?
                        <p className="text-danger mt-0">First name field must be at least 3 characters</p> :
                        ""
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Last Name:</span>
                    <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)} className="form-control" />
                </div>
                {
                    lastname.length < 3 && lastname.length > 0 ?
                        <p className="text-danger mt-0">Last name field must be at least 3 characters</p> :
                        ""
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email:</span>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                {
                    email.length < 6 && email.length > 0 ?
                        <p className="text-danger">Email field must be at least 6 characters</p> :
                        ""
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password:</span>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
                {
                    password.length < 8 && password.length > 0 ?
                        <p className="text-danger">Password field must be at least 8 characters</p> :
                        ""
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Confirm Password:</span>
                    <input type="text" name="confirm" onChange={(e) => setConfirm(e.target.value)} className="form-control" />
                </div>
                {
                    confirm !== password && confirm.length < 8 && confirm.length > 0 ?
                        <p className="text-danger">Passwords must match!</p> :
                        ""
                }
                <button className="btn btn-primary">Become a New Member</button>
            </form>
            <div className="m-3">
                <h4 className="text-center my-4">User Form Data</h4>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    )
}

export default Form;