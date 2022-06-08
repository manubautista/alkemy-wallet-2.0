import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/operations/'

const CreateOperation = () =>{
    const [concept, setConcept] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate()
    

    // procedimiento para guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            concept: concept, 
            amount: amount, 
            date: date, 
            type: type, 
            category: category
        })
        navigate('/')
        window.location.reload()
        
    }

    return (
        <div>
            
            <form onSubmit={store} className="card mx-5">
            <h3 className="card-header">Create Operation</h3>
                <div className="card-body">
                    <label className="form-label">Concept</label><i className="fa-thin fa-asterisk"></i>
                    <input
                        value={concept}
                        onChange={(e)=> setConcept(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
                <div className="card-body">
                    <label className="form-label">Amount</label><i className="fa-thin fa-asterisk"></i>
                    <input
                        value={amount}
                        onChange={(e)=> setAmount(e.target.value)}
                        type="number"
                        placeholder="Amount in $"
                        className="form-control"
                        min={1}
                        required
                    />
                </div>
                <div className="mb-3 card-body">
                    <label className="form-label">Date</label><i className="fa-thin fa-asterisk"></i>
                    <input
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        required
                    />
                </div>
                <div className="card-body">
                    <label className="form-label">Category</label><i className="fa-thin fa-asterisk"></i>
                    <select
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                        className="form-control"
                        required
                    >   
                        <option value="other">Other</option>
                        <option value="job">Job</option>
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="gasoline">Gasoline</option>
                        <option value="gift">Gift</option>
                        <option value="house">House</option>
                        <option value="family">Family</option>

                    </select>
                </div>
                <label className="form-label">Type<i className="fa-thin fa-asterisk"></i></label>
                <div className="mb-2 form-check form-check-inline">    
                    <label className="mx-5 form-check-label"> Income
                        <input
                            className="form-check-input"
                            type="radio"
                            value="income"
                            onChange={(e)=> setType(e.target.value)}
                            name="tipo"
                            required
                            >
                        </input>
                    </label>
                    <label className="mx-5 form-check-label"> Expense
                        <input
                            className="form-check-input"
                            type="radio"
                            value="expense"
                            onChange={(e)=> setType(e.target.value)}
                            name="tipo"
                            required
                            >
                        </input>
                    </label>
    
                </div>

                <button type="submit" className="btn btn-dark  btn-lg">Store</button>
                
            </form>
        </div>
    )
}

export default CreateOperation