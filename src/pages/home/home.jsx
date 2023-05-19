import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';
import AdvertiseSwiper from '../../components/swiper/swiper';

import Grid from '@mui/material/Grid';

const Home =()=>{
    return(
        <>
            <Header/>
            <main style={{paddingX:'20px'}}>
                <Services/>
                <ServiceMenu/>
                <AdvertiseSwiper/>
            </main>
            
        </>
    )
}

export default Home;