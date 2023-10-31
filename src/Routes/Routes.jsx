import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../Components/PageLoading/PageLoading";
import Provider from "../Provider/Provider";


const Main = lazy(() => import("../Layout/Main"));
const Gallery = lazy(() => import("../Pages/Gallery/Gallery"));



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Provider><Suspense fallback={<PageLoading />}> <Main /></Suspense></Provider>,
        children: [
            {
                path: '',
                element: <Provider><Suspense fallback={<PageLoading />}> <Gallery /></Suspense></Provider>,
            },
            {
                path: 'docs',
                element: <div className="text-black h-[calc(100vh-68px)] flex justify-center items-center dark:text-white dark:bg-primary duration-300 text-3xl"><p>Welcome to Documentation</p></div>
            }
        ]
    }
])


export default routes;