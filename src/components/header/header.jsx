
import { Link } from 'react-router-dom';

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
        <Grid width={'100%'} position={'fixed'} top={'0px'} bgcolor={'white'} zIndex={'15'}>
            <Grid display={'flex'} justifyContent={'space-between'} p={2} mb={1}>
                <Grid>
                    <img src={logo} alt="logo" style={{width:'75px',height:'20px'}}/>
                </Grid>
                <Grid display={'flex'} justifyContent={'left'} gap={'16px'}>
                    <Link to="/payment" style={{textDecoration:'none'}}>
                        <CreditCardIcon style={{color:'grey'}}/>
                    </Link>
                    <Link to='/account' style={{textDecoration:'none'}}> 
                        <PersonOutlineIcon style={{color:'grey'}}/>
                    </Link>
                </Grid>
            </Grid>
            <Grid borderBottom={'1px solid grey'} display={'flex'} justifyContent={'space-between'} pb={1} >
                {MenuHome.map((item)=>(
                    <Link to={item.link} style={{textDecoration:'none'}}>
                        <ItemMenu src={item.src} title={item.title}/>
                    </Link>
                ))}
            </Grid>
        </Grid>
    )
}

export default Header;