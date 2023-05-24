import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '../card/card';

const MainSwiper =({database, titleBtn})=>{
    return (
        <Grid>
            <Swiper 
                style={{
                    width:'100%',
                    height: '150px',
                    borderRadius:'10px',
                }}
                loop={true}
                effect={"coverflow"}
                spaceBetween={'10px'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"1"}
                modules={[Navigation]}
            >   
                <Grid height={'150px'} >
                    <Typography></Typography>
                    <Grid  boxShadow={'0px 5px 10px 0 grey'}>
                        {database.map((item)=>(
                            <SwiperSlide style={{marginBottom:'0px'}}>
                               <Card id={item.id} image={item.src} icon={item.icon} title={item.title} titleBtn={titleBtn}/>
                            </SwiperSlide>
                        ))}
                    </Grid>
                </Grid>
            </Swiper>
        </Grid>
    )
}

export default MainSwiper;