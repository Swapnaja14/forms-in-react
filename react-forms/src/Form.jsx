import { useState } from "react";

export default function Form () {

    let [fullname, setFullname] = useState("");

    let handleFullname = (event) => {
        setFullname(event.target.value);
    }

    return (
        <form>
            <label htmlFor="fullname">Full Name</label>&nbsp;&nbsp; 
            <input placeholder="Enter full name" 
            type="text"
            value={fullname}
            onChange={handleFullname}
            id="fullname"></input>
            <button>Submit</button>
        </form>
    );
}