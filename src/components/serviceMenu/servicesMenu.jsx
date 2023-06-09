
import ServiceIcon from "../serviceIcon/serviceIcon";
import { ServiceMenuHome } from "../../database/database";

import Grid from "@mui/material/Grid";



const ServiceMenu =()=>{
    return(
        <Grid width={'100%'} display={'flex'} justifyContent={'center'} position={'fixed'} bottom={'20px'} zIndex={'10'}>
            <Grid width={'280px'} backgroundColor={'white'} display={'flex'} px={1} borderRadius={'15px'} boxShadow={'0px 5px 15px 5px whiteSmoke'}> 
                {ServiceMenuHome.map((item)=>(
                    <ServiceIcon key={item.id} src={item.icon} title={item.title} link={item?.link}/>         
                ))}
            </Grid>
        </Grid>
    )
}

export default ServiceMenu;