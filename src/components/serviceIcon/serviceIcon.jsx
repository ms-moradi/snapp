import { Link } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ServiceIcon =({key, src, title, link})=>{
    return(
        <Link to={link} style={{ width:'25%', textDecoration:'none', color:'#000'}}>
            <Grid key={key} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} alignSelf={'center'} my={1}>
                <Grid>
                    <img src={src} alt="service" style={{width:'40px', height:'40px'}}/>
                </Grid>
                <Grid>
                    <Typography fontSize={'11px'}>{title}</Typography>
                </Grid>
            </Grid>
        </Link>
    )
}

export default ServiceIcon;