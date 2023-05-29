import Button from '@mui/material/Button';


const CustomButton =({title, variant})=>{
    return(
        <Button variant={variant} style={{width:'100%', borderRadius:'8px',backgroundColor:'#00D672'}}>
            {title}
        </Button>
    )
}

export default CustomButton;