import { useForm } from "react-hook-form";
import { useState } from "react";
import "./AddCar.css";

export default function AddCar() 
{
    
    const [result, setResult] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setResult(data);
        console.log(data);
    };

    return (
        <div className="form">
            <h1 className="form_title">New Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                <input type="text" className="input" id="Name" placeholder="Name" {...register("Name", { required: true})}></input>
                </div>
            {errors.Name && <div className="input_error">Name cannot be empty.</div>}
            <div class="row">
            <input type="text" className="input" id="Description" placeholder="Description" {...register("Desc", { required: true})}></input>
            </div>
            {errors.Desc && <div className="input_error">Description cannot be empty.</div>}
            <div class="row" className="button_row">
            <button type="submit" className="submit_button">SUBMIT</button>
            <button type="button" className="cancel_button">CANCEL</button>
            </div>
            </form>
            
            {result && 
            <div class="row">
            <p>Submitted! Please check console log.</p>
            <p>Name: {result.Name}</p>
            <p>Description: {result.Desc}</p>
            </div>}
        </div>
    );
}


