import Header from '../../components/header/header';
import Services from '../../components/services/services';
import ServiceMenu from '../../components/serviceMenu/servicesMenu';

const Home =()=>{
    return(
        <>
            <Header/>
            <main style={{paddingX:'20px'}}>
                <Services/>
                <ServiceMenu/>
            </main>
            
        </>
    )
}

export default Home;