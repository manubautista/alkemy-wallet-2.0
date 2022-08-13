import { useState, useEffect } from "react";
import {db} from '../firebase'
import Swal from 'sweetalert2'

const Balance = ()=>{
    
    var bal = 0
    
    const [operations, setOperation] = useState([])
    useEffect(()=>{
        getOperations()
    }, [])

    // Procedimiento para traer todas las operaciones
    const getOperations = async () => {
        try {
        const docs = [];
        const querySnapshot = await db.collection('operations').get()
            querySnapshot.forEach(doc=>{
                docs.push({...doc.data(), id:doc.id})
            })
            setOperation(docs)
            
        } catch(error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, try again later...',
              })
        }
    }
    
    operations.map((operation) =>{
        if(operation.type === 'expense'){
            bal -= parseInt(operation.amount)
        } else {
            bal += parseInt(operation.amount)
        }        
    })

    
    return(
    <div>

        <h1>${bal} </h1>
        
    </div>
    
    )
}

export default Balance