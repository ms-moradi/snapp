

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import footer from '../../assets/image/footer/footer.png';


const Footer =()=>{
    return(
        <Grid  display={'flex'} justifyContent={'center'} mb={'80px'} position={'relative'}>
            <Grid width={'300px'} height={'300px'}>
                <img src={footer} alt='footer' style={{width:'100%', height:'280px'}}/>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} position={'absolute'} top={'30px'} >
                <a href='#up'style={{textDecoration:'none'}}>
                    <Grid width={'100px'} height={'30px'} backgroundColor={'#1db660'} borderRadius={'30px'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'} p={'5px'} mb={1}>
                        <ArrowUpwardIcon style={{fontSize:15, color:'white'}}/>
                        <Typography color={'white'} fontSize={'14px'}>برو به بالا</Typography>
                    </Grid>
                </a>
                <Typography fontSize={'16px'} color={'#757575'}>اپلیکیشنی برای همه نیازها</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;