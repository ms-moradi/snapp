import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';
import AdvertiseSwiper from '../../components/swiper/swiper';
import ContainerSwiper from '../../components/containerSwiper/containerSwiper';

import { Food } from '../../database/dataSwiper';
import { Trip } from '../../database/dataSwiper';
import { Discount } from '../../database/dataSwiper';


import iconFood from '../../assets/image/icon/Food.png';
import iconTrip from '../../assets/image/icon/Hotel.png';




const Home =()=>{
    return(
        <>
            <Header/>
            <main style={{paddingX:'20px',alignItems:'center'}}>
                <Services/>
                <ServiceMenu/>
                <AdvertiseSwiper/>
                <ContainerSwiper header={'انتخاب از بین غذاهای متنوع'} database={Food} titleBtn={'سفارش دهید'} bgColor={'#ff00a4'}/>
                <ContainerSwiper header={'مسافرت راحت با اسنپ'} database={Trip} titleBtn={'بیشتر بدانید'} bgColor={'#ff4340'}/>
                <ContainerSwiper header={'خرید از فروشگاه با تخفیف بهاره'} database={Discount} titleBtn={'خرید کنید'} bgColor={'#c300b4'}/>
            </main>
            
        </>
    )
}

export default Home;