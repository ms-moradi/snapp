import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ItemMenu =({src, title})=>{
    return(
        <>
            <Grid>
                <img src={src}/>
                <Typography>{title}</Typography>
            </Grid>
        </>
    )
}

export default ItemMenu;