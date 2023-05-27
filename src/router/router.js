import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/layout";
import Home from "../pages/home/home";
import Club from "../pages/club/club";
import Discount from "../pages/discount/discount";
import Payment from "../pages/payment/payment";
import Account from "../pages/account/account";
import Layout2 from "../components/layout2/layout2";
import CardSnapp from "../pages/cardSnapp/cardSnapp";

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
        element:<Layout2 title={'روش های پرداخت'} link='/'/>,
        children:[
            {
                path:'/payment',
                element:<Payment/>
            },
        ]
    },
    {
        element:<Layout2 title={'حساب کاربری'} link='/'/>,
        children:[
            {
                path:'/account',
                element:<Account/>
            },
        ]
    },
    {
        element:<Layout2 title={'اسنپ کارت'} link='/payment'/>,
        children:[
            {
                path:'/payment/snappCard',
                element:<CardSnapp/>
            }
        ]
    }
])

export default router;