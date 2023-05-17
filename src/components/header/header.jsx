// import file
import logo from '../../assets/svg/snappGreen.svg';
import ItemMenu from '../itemMenu/itemMenu';


// import from material
import Grid from '@mui/material/Grid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';


const Header =()=>{
    return(
        <>
            <Grid display={'flex'} justifyContent={'space-between'} p={2}>
                <Grid>
                    <img src={logo} alt="logo" style={{width:'75px',height:'20px'}}/>
                </Grid>
                <Grid display={'flex'} justifyContent={'left'} gap={'16px'}>
                    <CreditCardIcon style={{color:'grey'}}/>
                    <PersonOutlineIcon style={{color:'grey'}}/>
                </Grid>
            </Grid>
            <Grid>

            </Grid>
        </>
    )
}

export default Header;