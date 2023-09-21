import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header";
import Footer from "../../footer/Footer";



const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h3 className="text-center">This is our new Website</h3>
           <Header></Header>
           {
            navigation.state === 'loading' ? <h3>Loading.....</h3> : <Outlet></Outlet>
           }
           <Footer></Footer>
        </div>
    );
};

export default Home;