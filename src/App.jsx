import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";



const App = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
     <ExpenseList />
     <ExpenseForm />
     
    </div>
  );
};

export default App;
