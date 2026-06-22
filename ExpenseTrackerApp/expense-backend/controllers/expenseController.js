const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {
  const expenses = await Expense.find();

  res.json(expenses);
};

const addExpense = async (req, res) => {
  const { title, amount, category } = req.body;

  const expense = await Expense.create({
    title,
    amount,
    category,
  });

  res.status(201).json(expense);
};

const deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted Successfully",
  });
};

module.exports = {
  getExpenses,
  addExpense,
  deleteExpense,
};