import logo from "./logo.svg";
import "./App.css";
import UsersList from "./js/UsersList";
import PostButton from "./js/PostButton";

function App() {
  return (
    <div className="App">
      <div className="container pt-1">
        <UsersList />
        <PostButton />
      </div>
    </div>
  );
}

export default App;
