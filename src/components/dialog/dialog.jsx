import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog =({open, setOpen})=>{

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <Dialog
            fullWidth={true}
            maxWidth={'xs'}
            open={open}
            onClose={handleClose}   
            TransitionComponent={Transition}     
            PaperProps={{position:'fixed', bottom:0,margin:'0'}} 
        >
            <Grid  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <DialogTitle>{'کیف پول'}</DialogTitle>
                <IconButton onClick={handleClose }>
                    <CloseIcon/>
                </IconButton>
            </Grid>

        </Dialog>
    )
}

export default CustomDialog;