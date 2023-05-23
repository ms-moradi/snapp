

import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SquareIcon from '@mui/icons-material/Square';


const Banner =({bgColor, header, image , icon , title, titleBtn})=>{
    return(
        <Grid width={'100%'} height={'317px'} borderRadius={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}>
            <Grid width={'100%'} height={'45px'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'}>
                <SquareIcon sx={{color: bgColor, fontSize: 10}}/>
                <Typography fontSize={'12px'}>{header}</Typography>
            </Grid>
            <Grid width={'100%'} height={'244px'}  boxShadow={'0px 8px 5px 0px #e9e9e9'} position={'relative'} display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'}>
                <img src={image} alt='banner' style={{width:'100%', height:'224px', borderRadius:'10px' }}/>  
                <Grid width={'100%'} height={'48px'} display={'flex'} justifyContent={'space-between'} alignContent={'baseline'} borderRadius={'0 0 10px 10px'} position={'absolute'} backgroundColor={'white'} bottom={'0px'} p={'8px'} >
                    <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} >
                        <img src={icon} alt='icon' style={{width:'32px', height:'32px'}}/>
                        <Typography fontSize={'12px'}>{title}</Typography>
                    </Grid>
                    <Grid>
                        <Button variant="outlined" color={'success'} style={{fontSize:'12px'}}>{titleBtn}</Button>
                    </Grid>
                </Grid>
            </Grid>    
        </Grid>
    )
}

export default Banner;