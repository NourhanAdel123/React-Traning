import CounterReducer from "./Components/CounterReducer";
import Dashboard from "./Components/Dashboard";
import CatCard from "./Components/Day5 projects/randomcatgenerator/CatCard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import ThemeProvider from "./context/ThemeContext";
import Home from "./Components/Day6 Routing/Home";
import NotFound from "./Components/Day6 Routing/NotFound";
import Profiles from "./Components/Day6 Routing/Profiles";
import Profile from "./Components/Day6 Routing/Profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./Components/Day 7 RoutingExercise/router";
import { AuthProvider } from "../src/Components/Day 7 RoutingExercise/pages/Auth";
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
