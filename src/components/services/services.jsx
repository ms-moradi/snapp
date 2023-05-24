import ServiceIcon from "../serviceIcon/serviceIcon";
import { Service } from "../../database/database";

import Grid from "@mui/material/Grid";


const Services =()=>{
    return(
        <>
        <div id='up' style={{width:'300px', height:'140px'}}></div>
        <Grid width={'100%'} display={'flex'} flexWrap={'wrap'}>
            {Service.map((item)=>(
                <ServiceIcon key={item.id} src={item.icon} title={item.title}/>
            ))}
        </Grid>
        </>
    )
}

export default Services;