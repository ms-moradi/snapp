

import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';

import Card from '../card/card';

const Banner =({bgColor, header, id , src , icon , title, titleBtn})=>{
    return(
        <Grid>
            <Grid>
                <SquareIcon sx={{color: bgColor, fontSize: 10}}/>
                <Typography>{header}</Typography>
            </Grid>
            <Card id={id} image={src} icon={icon} title={title} titleBtn={titleBtn}/>
        </Grid>
    )
}

export default Banner;