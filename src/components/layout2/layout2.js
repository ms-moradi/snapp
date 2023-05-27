import { Outlet } from "react-router-dom";
import Header2 from "../header2/header2";


const Layout2 =({title})=>{
    return(
        <>
            <Header2 title={title}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout2;