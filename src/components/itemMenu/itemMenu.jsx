import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ItemMenu =({src, title})=>{
    return(
        <>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} px={2}>
                <img src={src} alt="svg" style={{width:'20px', height:'20px'}}/>
                <Typography>{title}</Typography>
            </Grid>
        </>
    )
}

export default ItemMenu;