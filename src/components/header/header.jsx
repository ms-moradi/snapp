// import file
import logo from '../../assets/svg/snappGreen.svg';
import ItemMenu from '../itemMenu/itemMenu';
import { MenuHome } from '../../database/database';

// import from material
import Grid from '@mui/material/Grid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';


const Header =()=>{
    return(
        <Grid width={'100%'} position={'fixed'} top={'0px'} bgcolor={'white'}>
            <Grid display={'flex'} justifyContent={'space-between'} p={2} mb={1}>
                <Grid>
                    <img src={logo} alt="logo" style={{width:'75px',height:'20px'}}/>
                </Grid>
                <Grid display={'flex'} justifyContent={'left'} gap={'16px'}>
                    <CreditCardIcon style={{color:'grey'}}/>
                    <PersonOutlineIcon style={{color:'grey'}}/>
                </Grid>
            </Grid>
            <Grid borderBottom={'1px solid grey'} display={'flex'} justifyContent={'space-between'} pb={1} >
                {MenuHome.map((item)=>(
                    <ItemMenu src={item.src} title={item.title}/>
                ))}
            </Grid>
        </Grid>
    )
}

export default Header;