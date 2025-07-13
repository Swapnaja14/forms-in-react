import { useState } from "react";

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData ((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData ({
          username: "",
          remarks: "",
          rating: 5  
        });
    };


    return (
        <div>
            <h4>Give A Comment!</h4>
            <form>
                <label htmlFor="username">Username: </label>
                <input 
                placeholder="username" 
                type="text" 
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}>
                </input>
                <br></br><br></br>

                <label htmlFor="remarks">Add remarks: </label>
                <textarea 
                placeholder="add few remarks" 
                value={formData.remarks}
                name="remarks"
                id="remarks"
                onChange={handleInputChange}>
                Remarks!</textarea>
                <br></br><br></br>

                <label htmlFor="rating">Ratings: </label>
                <input 
                placeholder="rating" 
                type="number" 
                min={1} max={5} 
                value={formData.rating}
                id="rating"
                name="rating"
                onChange={handleInputChange}
                ></input>
                <br></br><br></br>

                <button onClick={handleSubmit} type="submit">Add Comment</button>

            </form>
        </div>
    );
}