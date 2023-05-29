
import logo from '../../assets/image/logo/cardSnapp.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import StyleIcon from '@mui/icons-material/Style';
import CustomButton from '../../components/button/button';

const CardSnapp =()=>{
    return(
        <Grid mt={8} px={2}>
           <img src={logo} alt='logo' style={{width:'300px'}}/> 
           <Typography>کد اسنپ کارتتان را وارد کنید</Typography>
           <Typography fontSize='14px'>
            از موجودی اسنپ کارت می توانید برای پرداخت هزینه تمام <br/>
           سرویس ها (ماشین , موتور و پیک) استفاده کنید
           </Typography>
           <Grid my={5}>
                <TextField 
                label="کداسنپ کارت" 
                variant="outlined" 
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <StyleIcon />
                    </InputAdornment>
                ),
                }}
                size='small'
                />
           </Grid>
           <CustomButton title={'اعمال'} variant={'disable'}/>
        </Grid>
    )
}

export default CardSnapp;