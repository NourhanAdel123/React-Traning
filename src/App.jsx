import CounterReducer from "./Components/CounterReducer";
import Dashboard from "./Components/Dashboard";
import CatCard from "./Components/Day5 projects/randomcatgenerator/CatCard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import Home from "./Components/Day6 Routing/Home";
import NotFound from "./Components/Day6 Routing/NotFound";
import Profiles from "./Components/Day6 Routing/Profiles";
import Profile from "./Components/Day6 Routing/Profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./Components/Day 7 RoutingExercise/router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/profiles",
//     element: <Profiles />,
//     children: [
//       {
//         path: "/profiles/:id",
//         element: <Profile />,
//       },
//     ],
//   },
// ]);

const App = () => {
  return (
    // <>
    //   {/* <PostList /> */}
    //   {/* <AuthProvider>
    //     <Navbar/>
    //     <Dashboard/>
    //     <Login/>
    //   </AuthProvider> */}
    //   {/* <CounterReducer/> */}
    //   <ThemeProvider>
    //     <CatCard />
    //   </ThemeProvider>
    // </>
    // <div className="text-3xl font-bold text-blue-500">Tailwind is working!</div>
    // <RouterProvider router={router} />
    <RouterProvider router={router} />
  );
};

export default App;
