import "./App.css";
import StudentsListdemo from "./components/studentsList-demo/studentsList-demo";
import StudentsList from "./components/studentsList/StudentsList";
import TodoAppdemo from "./todoApp-demo/TodoAppdemo";
import TodoApp from "./todoApp/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <TodoAppdemo /> */}
      {/* <TodoAppdemo/> */}
      <StudentsListdemo />
    </div>
  );
}

export default App;
