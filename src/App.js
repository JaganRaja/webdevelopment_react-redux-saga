import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux - SAGA</h1>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
