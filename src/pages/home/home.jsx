import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';
import AdvertiseSwiper from '../../components/swiper/swiper';
import ContainerSwiper from '../../components/containerSwiper/containerSwiper';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';

import { Food } from '../../database/dataSwiper';
import { Trip } from '../../database/dataSwiper';
import { Discount } from '../../database/dataSwiper';
import { Doctor } from '../../database/dataSwiper';
import { Hotel } from '../../database/dataSwiper';
import { Market } from '../../database/dataSwiper';
import { Carousel } from '../../database/dataSwiper';
import { Category } from '../../database/dataSwiper';

import driver from '../../assets/image/icon/Driver.png';
import bus from '../../assets/image/icon/snapptrip-bus.png';
import food from '../../assets/image/icon/Food.png';
import room from '../../assets/image/icon/Room.png';
import wealth from '../../assets/image/icon/Wealth.png'

import bannerDriver from '../../assets/image/banner/bannerDriver.jpg';
import bannerBus from '../../assets/image/banner/bannerBus.jpg';
import bannerBusiness from '../../assets/image/banner/bannerBusiness.jpg';
import bannerRoom from '../../assets/image/banner/bannerRoom.jpg';
import bannerInvestment from '../../assets/image/banner/bannerInvestment.jpg';

const Home =()=>{
    return(
        <>
            <Header/>
            <main style={{textAlign:'center', padding:'0 10px'}}>
                <Services/>
                <AdvertiseSwiper/>
                <ContainerSwiper header={'انتخاب از بین غذاهای متنوع'} database={Food} titleBtn={'سفارش دهید'} bgColor={'#ff00a4'}/>
                <ContainerSwiper header={'مسافرت راحت با اسنپ'} database={Trip} titleBtn={'بیشتر بدانید'} bgColor={'#ff4340'}/>
                <Banner bgColor={'#00D170'} header={'رانندگی با درآمد بالا'} image={bannerDriver} icon={driver} title={'تا ۱۸ میلیون درآمد ماهیانه'} titleBtn={'ثبت نام کنید'}/>
                <Banner bgColor={'#ff4340'} header={'خرید بلیت قطار با تخفیف'} image={bannerBus} icon={bus} title={'ویژه ی اولین خرید'} titleBtn={'بلیت بخرید'}/>
                <ContainerSwiper header={'خرید از فروشگاه با تخفیف بهاره'} database={Discount} titleBtn={'خرید کنید'} bgColor={'#c300b4'}/>
                <Banner bgColor={'#c300b4'} header={'از فروش خود لذت ببرید'} image={bannerBusiness} icon={food} title={'افزایش فروش رستوران با ثبت نام در اسنپ'} titleBtn={'شروع کنید'}/>
                <ContainerSwiper header={'خرید در ۴ قسط با تخفیف'} database={Carousel} titleBtn={'خرید کنید'} bgColor={'#58C0F9'}/>
                <ContainerSwiper header={'زیر ۳۰ دقیقه تحویل بگیرید'} database={Market} titleBtn={'خرید کنید'} bgColor={'#FF7300'}/>
                <ContainerSwiper header={'با بهترین قیمت پرواز خارجی بخرید'} database={Trip} titleBtn={'بلیت بخرید'} bgColor={'#ff4340'}/>
                <Banner bgColor={'#FF7300'} header={'اجاره ی آپارتمان مبله'} image={bannerRoom} icon={room} title={'با پشتیبانی ۲۴ ساعته'} titleBtn={'رزرو کنید'}/>
                <ContainerSwiper header={'با بهترین قیمت هتل خارجی رزرو کنید'} database={Hotel} titleBtn={'بلیت بخرید'} bgColor={'#ff4340'}/>
                <ContainerSwiper header={'انلاین, خدمات پزشکی بگیرید'} database={Doctor} titleBtn={'درخواست دهید'} bgColor={'#58C0F9'}/>
                <Banner bgColor={'#008EFA'} header={'به سرمایه گذاری دسترسی داشته باشید'} image={bannerInvestment} icon={wealth} title={'مدیریت صندوق های سرمایه گذاری و بیشتر'} titleBtn={'وارد شوید'}/>
                <ContainerSwiper header={'از سوپر مارکت با تخفیف خرید کنید'} database={Category} titleBtn={'خرید کنید'} bgColor={'#3939E6'}/>
                <Footer/>
            </main>
            <ServiceMenu/>
        </>
    )
}

export default Home;