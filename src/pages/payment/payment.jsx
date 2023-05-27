import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import RowMenu from '../../components/rowMenu/rowMenu';
import {payment} from '../../database/database';
import Inventory from '../../components/inventory/inventory';
import CustomDialog from '../../components/dialog/dialog';

const Payment =()=>{
    const [open, setOpen] = useState('false')

    return(
        <Grid display={'flex'} flexDirection={'column'} alignContent={'space-between'} mt={8} >
            <Grid p={'0 15px'}>
                {payment.map((item)=>(
                    <Link to={item?.link} style={{textDecoration:'none'}}>
                        <RowMenu id={item.id} title={item.title} icon={item.src} element={item.element}/>
                    </Link>
                ))}
            </Grid>
            <Inventory setOpen={setOpen}/>
            <CustomDialog open={open} setOpen={setOpen}/>
        </Grid>
    )
}

export default Payment;