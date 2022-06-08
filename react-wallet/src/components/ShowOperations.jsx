import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/operations/'

const ShowOperations = () => {
    
    const [operations, setOperation] = useState([])
    useEffect(()=>{
        getLast10Operations()
    }, [])
    
    // Procedimiento para mostrar las ultimas 10 operaciones
    const getLast10Operations = async () => {
        const res = await axios.get(URI+'last')
        setOperation(res.data)
    }
    // Procedimiento para mostrar todas las operaciones
    const getOperations = async () => {
        const res = await axios.get(URI)
        setOperation(res.data)
    }    
    // Procedimiento para eliminar una operacion
    const deleteOperation = async (id) => {
        await axios.delete(`${URI}${id}`)
        getLast10Operations()
        window.location.reload()
    }
    // Procedimiento para ordenar por Categoria
    const getLast10ByCategory = async () => {
        const res = await axios.get(URI+'category')
        setOperation(res.data)
    }
    return(
        
        <div>
            <div className='btn-group'>
                <button className='btn btn-light mb-3' onClick={()=>getOperations()}> Show all operations</button>            
                <button className='btn btn-light mb-3' onClick={()=>getLast10Operations()}> Show last 10 operations</button>
                <button className='btn btn-secondary mb-3' onClick={()=>getLast10ByCategory()}><i class="fa-solid fa-arrow-down-wide-short"></i> Order by category </button>
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