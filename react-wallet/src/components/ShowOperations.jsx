import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {db} from '../firebase'
import Swal from 'sweetalert2'
const ShowOperations = () => {
    
    const [operations, setOperation] = useState([])
    useEffect(()=>{
        getLast10Operations()
    }, [])
    

    // Procedimiento para mostrar todas las operaciones
    const getOperations = async () => {
        try {
        const docs = [];
        const querySnapshot = await db.collection('operations').orderBy('date').get()
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
   
    // Procedimiento para mostrar las ultimas 10 operaciones
    const getLast10Operations = async () => {
        try {
            const docs = [];
            const querySnapshot = await db.collection('operations').orderBy('date').limit(10).get()
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

    // Procedimiento para ordenar por Categoria
    const getLast10ByCategory = async () => {
        try {
            const docs = [];
            const querySnapshot = await db.collection('operations').orderBy('category').limit(10).get()
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

    // Procedimiento para eliminar una operacion
    const deleteOperation = async (id) => {
        try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your operation has been deleted.',
                'success'
              )
              await db.collection('operations').doc(id).delete();
              getOperations()
            }
          })
        } catch(error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong, try again later...',
                  })
        } 
    }

    
    return(
        
        <div>
            <div className='btn-group'>
                <button className='btn btn-light mb-3' onClick={()=>getOperations()}> Show all operations</button>            
                <button className='btn btn-light mb-3' onClick={()=>getLast10Operations()}> Show last 10 operations</button>
                <button className='btn btn-secondary mb-3' onClick={()=>getLast10ByCategory()}><i className="fa-solid fa-arrow-down-wide-short"></i> Order by category </button>
            </div>
            <div className='row'>
                <div className='col'>
                    
                    <table className='table table-dark table-striped table-hover'>
                        
                        <thead className='table-secondary'>
                            <tr>
                                <th>Concept</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { operations.map((operation) => (
                                <tr key={operation.id}>
                                    <td className='text-capitalize'> {operation.concept} </td>
                                    <td> ${operation.amount} </td>
                                    <td> {operation.date}</td>
                                    <td className='text-capitalize'> {operation.category}</td>
                                    <td className='text-uppercase'> {operation.type}</td>
                                    <td>
                                        <Link to={`/edit/${operation.id}`} className="btn btn-outline-light btn-sm mx-1"><i className="fa-solid fa-pen-to-square"></i></Link> 
                                        <button onClick={()=>deleteOperation(operation.id)} className='btn btn-outline-danger btn-sm'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                    
                    
                    

                </div>

            </div>

        </div>
    )
}

export default ShowOperations