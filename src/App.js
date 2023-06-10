import "./App.css";
import StudentCard from "./components/card/Card";
import CarsList from "./components/carsList/CarsList";

import StudentsList from "./components/studentsList/StudentsList";

import TodoApp from "./todoApp/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <StudentsList /> */}
      <CarsList />
    </div>
  );
}

export default App;
