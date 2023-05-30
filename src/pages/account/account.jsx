import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { MenuAccount } from '../../database/database';

const Account =()=>{ 
    return(
        <Grid px={2} mt={10}>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'5px'}>
                    <AccountCircleIcon style={{fontSize: 40, color:'#757575'}}/>
                    <Typography>Your Name</Typography>
                </Grid>
                <KeyboardArrowLeftIcon/>
            </Grid>
            {MenuAccount.map((item)=>(
                <Link to={item.link} style={{textDecoration:'none'}}>
                    <Grid key={item.id}  display={'flex'} justifyContent={'flexStart'} alignItems={'center'} mb={1}>
                        {item.icon}
                        <Grid width={'100%'} borderBottom={'1px solid #e9e9e9'} mx={2}>
                            <Typography color={'#000'} >{item.title}</Typography>
                        </Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    )
}

export default Account;