import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Card =({id, image, icon, title, titleBtn})=>{
    return(
    <Grid key={id} width={'300px'} height={'144px'} borderRadius={'10px'} boxShadow={'0px 8px 5px 0px #e9e9e9'} position={'relative'}  mb={'300px'} display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'}>
        <img src={image} alt='banner' style={{width:'100%', height:'144px', borderRadius:'10px' }}/>  
        <Grid width={'100%'} display={'flex'} justifyContent={'space-between'} alignContent={'baseline'} borderRadius={'0 0 10px 10px'} position={'absolute'} backgroundColor={'white'} bottom={'0px'} p={1} >
            <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} >
                <img src={icon} alt='icon' style={{width:'32px', height:'32px'}}/>
                <Typography fontSize={'12px'}>{title}</Typography>
            </Grid>
            <Grid>
                <Button variant="outlined" color={'success'} style={{fontSize:'12px'}}>{titleBtn}</Button>
            </Grid>

        </Grid>
    </Grid>    
    )
}

export default Card;