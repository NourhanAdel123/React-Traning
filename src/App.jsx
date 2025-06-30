import CounterReducer from "./Components/CounterReducer";
import Dashboard from "./Components/Dashboard";
import CatCard from "./Components/Day5 projects/randomcatgenerator/CatCard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <>
      {/* <PostList /> */}
      {/* <AuthProvider>
        <Navbar/>
        <Dashboard/>
        <Login/>
      </AuthProvider> */}
      {/* <CounterReducer/> */}
      <ThemeProvider>
        <CatCard />
      </ThemeProvider>
    </>
  );
};

export default App;
