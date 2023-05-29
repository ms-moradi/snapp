import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomButton from '../button/button';

const Inventory =({setOpen})=>{

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    return(
        <Grid width={'100%'} position={'fixed'} bottom={'0px'} borderTop={'1px solid #e9e9e9'} p={'0 16px 16px 16px'}>
            <Grid display={'flex'} justifyContent={'space-between'} p={'20px 5px'}>
                <Typography>موجودی کیف پول</Typography>
                <Typography> ۰  ریال</Typography>
            </Grid>
            <Grid onClick={handleClickOpen}>
                <CustomButton title={'افزایش موجودی'} variant={'contained'}/>
            </Grid>
        </Grid>
    )
}

export default Inventory;