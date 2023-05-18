import ServiceIcon from "../serviceIcon/serviceIcon";
import { Service } from "../../database/database";

import Grid from "@mui/material/Grid";


const Services =()=>{
    return(
        <Grid width={'100%'} display={'flex'} flexWrap={'wrap'} mt={'150px'}>
            {Service.map((item)=>(
                <ServiceIcon key={item.id} src={item.icon} title={item.title}/>
            ))}

        </Grid>
    )
}

export default Services;