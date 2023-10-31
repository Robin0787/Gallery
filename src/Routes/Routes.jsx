import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../Components/PageLoading/PageLoading";
import Docs from "../Pages/Docs/Docs";
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
                element: <Provider><Suspense fallback={<PageLoading />}> <Docs /></Suspense></Provider>
            }
        ]
    }
])


export default routes;