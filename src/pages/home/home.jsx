import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';
import AdvertiseSwiper from '../../components/swiper/swiper';
import ContainerSwiper from '../../components/containerSwiper/containerSwiper';

import { Food } from '../../database/dataSwiper';
import { Trip } from '../../database/dataSwiper';
import { Discount } from '../../database/dataSwiper';
import { Doctor } from '../../database/dataSwiper';
import { Hotel } from '../../database/dataSwiper';
import { Market } from '../../database/dataSwiper';
import { Carousel } from '../../database/dataSwiper';


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
                <ContainerSwiper header={'خرید در ۴ قسط با تخفیف'} database={Carousel} titleBtn={'خرید کنید'} bgColor={'#58C0F9'}/>
                <ContainerSwiper header={'زیر ۳۰ دقیقه تحویل بگیرید'} database={Market} titleBtn={'خرید کنید'} bgColor={'#FF7300'}/>
                <ContainerSwiper header={'با بهترین قیمت پرواز خارجی بخرید'} database={Trip} titleBtn={'بلیت بخرید'} bgColor={'#ff4340'}/>
                <ContainerSwiper header={'با بهترین قیمت هتل خارجی رزرو کنید'} database={Hotel} titleBtn={'بلیت بخرید'} bgColor={'#ff4340'}/>
                <ContainerSwiper header={'انلاین, خدمات پزشکی بگیرید'} database={Doctor} titleBtn={'درخواست دهید'} bgColor={'#58C0F9'}/>
            </main>
            
        </>
    )
}

export default Home;