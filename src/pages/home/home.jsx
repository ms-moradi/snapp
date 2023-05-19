import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';
import AdvertiseSwiper from '../../components/swiper/swiper';


const Home =()=>{
    return(
        <>
            <Header/>
            <main style={{paddingX:'20px',alignItems:'center'}}>
                <Services/>
                <ServiceMenu/>
                <AdvertiseSwiper/>
            </main>
            
        </>
    )
}

export default Home;