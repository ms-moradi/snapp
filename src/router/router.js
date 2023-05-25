import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/layout";
import Home from "../pages/home/home";
import Club from "../pages/club/club";
import Discount from "../pages/discount/discount";
import Payment from "../pages/payment/payment";
import Account from "../pages/account/account";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/club",
                element:<Club/>
            },
            {
                path:"/discount",
                element:<Discount/>
            }
        ]
    },
    {
        path:'/payment',
        element:<Payment/>
    },
    {
        path:'/account',
        element:<Account/>
    }

])

export default router;