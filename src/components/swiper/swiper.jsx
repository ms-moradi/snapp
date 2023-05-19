import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

import { Advertise } from '../../database/dataSwiper';

import Grid from '@mui/material/Grid';

const AdvertiseSwiper =()=>{
    return(
        <Grid style={{margin:'20px 0'}}>
            <Swiper 
                style={{
                    width:'100%',
                    height:227,
                    borderRadius:'10px',
                }}
                loop={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination={{
                bulletActiveClass:'swiper-pagination-bullet-active'
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            > 
                <Grid>
                    {Advertise.map((item)=>(
                        <SwiperSlide>
                            <Grid objectFit={'cover'}>
                                <img src={item.src} alt='slider' key={item.id} style={{width:'100%', height:'227px'}}/>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Grid>    
            </Swiper>
        </Grid>
    )
}

export default AdvertiseSwiper;