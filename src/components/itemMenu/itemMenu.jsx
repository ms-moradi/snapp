import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ItemMenu =({id, src, title})=>{
    return(
        <>
            <Grid key={id} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} px={2}>
                <img src={src} alt="svg" style={{width:'20px', height:'20px'}}/>
                <Typography>{title}</Typography>
            </Grid>
        </>
    )
}

export default ItemMenu;