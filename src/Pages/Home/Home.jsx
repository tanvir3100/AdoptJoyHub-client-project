import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Categories from "./Category/Categories";
import Customer from "./Customer/Customer";
import Photo from "./Photo/Photo";


const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <CallToAction />
            <AboutUs />
            <Customer />
            <Photo />
        </div>
    );
};

export default Home;