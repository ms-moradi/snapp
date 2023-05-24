
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';

import MainSwiper from '../mainSwiper/mainSwiper';

const ContainerSwiper =({header, database, titleBtn, bgColor})=>{
    return(
        <Grid>
            <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'5px'} mb={1}>
                <SquareIcon sx={{color: bgColor, fontSize: 10}}/>
                <Typography fontSize={'16px'}>{header}</Typography>
            </Grid>
            <MainSwiper database={database} titleBtn={titleBtn}/>
        </Grid>
    )
}

export default ContainerSwiper;