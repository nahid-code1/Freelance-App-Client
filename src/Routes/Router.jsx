import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../components/HomeLayout/Home";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import LogIn from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import AddJob from "../components/AddJob/AddJob";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import AllJobs from "../components/AllJobs/AllJobs";
import JobDetails from "../components/JobDetails/JobDetails";
import MyAddedJobs from "../components/MyAddedJobs/MyAddedJobs";
import MyAcceptedTask from "../components/MyAcceptedTask/MyAcceptedTask";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
            {
                path: "/allJobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/addJob",
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: "/myJobs",
                element: <PrivateRoute>
                    <MyAddedJobs></MyAddedJobs>
                </PrivateRoute>
            },
            {
                path: "/acceptedTask",
                element: <PrivateRoute><MyAcceptedTask /></PrivateRoute>
            },

            {
                path: "/allJobs/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/allJobs/${params.id}`),
                element: (
                    <PrivateRoute>
                        <JobDetails />
                    </PrivateRoute>
                )
            }

        ]
    },
]);


export default router

// const Router = createBrowserRouter(
//     [
//         {
//             path: '/',
//             element: <HomeLayout></HomeLayout>,
//             children: [
//                 {
//                     path: "",
//                     element: <Home></Home>,
//                 },
//                 {
//                     path: "/details/:serviceId",
//                     element: (<PrivateRoute>
//                         <Details></Details>,
//                     </PrivateRoute>
//                     )
//                 },
//                 {
//                     path: "/login",
//                     element: <Login></Login>,
//                 },