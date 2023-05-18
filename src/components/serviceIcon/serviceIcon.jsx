import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ServiceIcon =({key, src, title})=>{
    return(
        <Grid key={key} width={'25%'} display={'flex'} flexDirection={'column'} alignItems={'center'} my={1}>
            <Grid>
                <img src={src} alt="service" style={{width:'40px', height:'40px'}}/>
            </Grid>
            <Grid>
                <Typography fontSize={'12px'}>{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default ServiceIcon;