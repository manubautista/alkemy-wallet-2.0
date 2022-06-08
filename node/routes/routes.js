import express from 'express'
import { getAllOperations, getOperation, createOperation, updateOperation,
     deleteOperation, getOperationsWhereExpense, getLast10Operations, getByCategory } from '../controllers/WalletController.js'
const router = express.Router()

router.get('/', getAllOperations)
router.get('/category', getByCategory)
router.get('/egresos', getOperationsWhereExpense)
router.get('/last', getLast10Operations)
router.get('/:id', getOperation)
router.post('/', createOperation)
router.put('/:id', updateOperation)
router.delete('/:id', deleteOperation)


export default router