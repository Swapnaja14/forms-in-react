import { useState } from "react";

export default function Form () {

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    }); 

    // let handleFullname = (event) => {
    //     setFullname(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData ( (currData) =>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };

    return (
        <form>
            <label htmlFor="fullName">Full Name</label>&nbsp;&nbsp; 
            <input placeholder="Enter full name" 
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"></input>

            <br></br>
            <label htmlFor="username">Enter Username</label>&nbsp;&nbsp; 
            <input placeholder="Enter username" 
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"></input>

            <br></br>
            <label htmlFor="password">Enter Password</label>&nbsp;&nbsp; 
            <input placeholder="Enter password" 
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}