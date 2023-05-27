
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RowMenu =({id, icon, title, element})=>{
    return(
        <Grid key={id} height={'50px'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'15px'}>
            <Grid>
                <img src={icon} alt='logo'style={{width:'20px', height:'20px'}}/>
            </Grid>
            <Grid width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={{color:'#000'}}>{title}</Typography>
                {element}
            </Grid>
        </Grid>
    )
}

export default RowMenu;