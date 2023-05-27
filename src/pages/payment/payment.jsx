import Grid from '@mui/material/Grid';

import RowMenu from '../../components/rowMenu/rowMenu';
import {payment} from '../../database/database';
import Inventory from '../../components/inventory/inventory';


const Payment =()=>{
    return(
        <Grid display={'flex'} flexDirection={'column'} alignContent={'space-between'} mt={8} >
            <Grid p={'0 15px'}>
                {payment.map((item)=>(
                    <RowMenu id={item.id} title={item.title} icon={item.src} element={item.element}/>
                ))}
            </Grid>
            <Inventory/>
        </Grid>
    )
}

export default Payment;