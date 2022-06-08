import axios from "axios";
import { useState, useEffect } from "react";

const URI = 'http://localhost:8000/operations/'

const Balance = ()=>{
    
    var bal = 0
    // Procedimiento para traer todas las operaciones
    const [operations, setOperation] = useState([])
    useEffect(()=>{
        getOperations()
    }, [])
    const getOperations = async () => {
        const res = await axios.get(URI)
        setOperation(res.data)
    }
    operations.map((operation) =>{
        
        if(operation.type === 'expense'){
            bal -= operation.amount
        }else{
            bal += operation.amount
        }
        
    })

    
    return(
    <div>

        <h1>${bal} </h1>
        
    </div>
    
    )
}

export default Balance