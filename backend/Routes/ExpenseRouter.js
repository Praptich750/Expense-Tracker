const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController.js');

const router = require('express').Router();

//router.get('/', (req,res)=> res.send('expense get method working'));

//fetch all the expenses of user based n user_id
router.get('/', fetchExpenses);
//add Expenses
router.post('/', addExpenses);
// delete Expenses
router.delete('/:expenseId', deleteExpenses);

module.exports = router;