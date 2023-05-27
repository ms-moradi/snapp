import { Outlet } from "react-router-dom";
import Header2 from "../header2/header2";


const Layout2 =({title, link})=>{
    return(
        <>
            <Header2 title={title} link={link}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout2;