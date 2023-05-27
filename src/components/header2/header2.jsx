import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';


const Header2 =({title})=>{
    return(
        <Grid width={'100%'} height={'55px'} backgroundColor={'white'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} boxShadow={'0px 1px 2px 2px #e9e9e9'} position={'fixed'} top={'0px'} p={1}>
            <Grid width={'33%'} textAlign={'start'}>
                <Link to='/'>
                    <ArrowForwardIcon style={{fontSize:20, color:'#757575'}}/>
                </Link>
            </Grid>
            <Grid width={'33%'} textAlign={'center'}>
                <Typography>{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default Header2;