import "./App.css";
import StudentCard from "./components/card/Card";
import CarsList from "./components/studentsList-demo/studentsList-demo";
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
      {/* <StudentsList /> */}
      <CarsList />
    </div>
  );
}

export default App;
