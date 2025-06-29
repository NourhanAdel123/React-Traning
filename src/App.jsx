import CounterReducer from "./Components/CounterReducer";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      {/* <PostList /> */}
      {/* <AuthProvider>
        <Navbar/>
        <Dashboard/>
        <Login/>
      </AuthProvider> */}
      <CounterReducer/>
    </>
  );
};

export default App;