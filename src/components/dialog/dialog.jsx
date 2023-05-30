import * as React from 'react';
import { useReducer } from 'react';

import CustomButton from '../button/button';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function reducer(state, action) {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 10000
        }
    }else if(action.type === 'decrement'){
        return{
            counter: state.counter - 10000
        }
    }
}

const CustomDialog =({open, setOpen})=>{
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    const handleClose = () => {
        setOpen(false);
    };

    const handleIncrement =()=>{
        dispatch({type: 'increment'})
    }

    const handleDecrement =()=>{
        dispatch({type: 'decrement'})
    } 

    return(
        <Grid>
            <Dialog
            open={open}
            onClose={handleClose}   
            TransitionComponent={Transition} 
            >
                
                <DialogTitle display={'flex'} flexDirection={'column'} boxShadow={'0px 5px 5px 2px #e9e9e9'} px={0}>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontSize={'20px'} fontWight={'bold'} color={'#000'}>کیف پول</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton> 
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                        <Typography>موجودی فعلی</Typography>
                        <Typography px={1}>۰ ریال</Typography>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Stack direction="row-revers" style={{display:'flex', justifyContent:'space-between', padding:'24px 0 0 0'}} >
                        <Chip label='۱۰۰/۰۰۰ ریال' variant="outlined"></Chip>
                        <Chip label='۲۰۰/۰۰۰ ریال' variant="outlined"></Chip>
                        <Chip label='۵۰۰/۰۰۰ ریال' variant="outlined"></Chip>
                    </Stack>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'30px'} py={3}>
                        <IconButton style={{border:'1px solid #757575', borderRadius:'10px'}} onClick={handleIncrement}>
                            <AddIcon/>
                        </IconButton>
                        <Typography fontSize={'20px'}>{state.counter}</Typography>
                        <IconButton style={{border:'1px solid #757575', borderRadius:'10px'}} onClick={handleDecrement}>
                            <RemoveIcon/>
                        </IconButton>
                    </Grid>
                    <CustomButton title={'شارژ حساب'} variant={'contained'}/>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default CustomDialog;