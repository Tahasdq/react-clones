import "./App.css";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers.js"
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar"
import data from './data/data.json';
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import HotAccessories from './components/HotAccessories.js'
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import ProductReviews from './components/ProductReviews.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return (
    <>
    

<Router>

     <PreNavbar/>
     <Navbar/>
     <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} Tv={data.tv} laptop={data.laptop} fAnds={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} Acc={data.accessories}/>
     <Slider start={data.banner.start}  />
     <Offers offer ={data.offer}/>
     <Heading text = "STAR PRODUCTS"/>
     <StarProducts starProduct={data.starProduct}/>
     <Heading text = "HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
     
     <Routes>
     <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
     <Route path="/smartDevices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover ={data.hotAccessoriesCover.smartDevice}/>} />
     <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
     <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
     <Route path="/mobileAccessories" element={<HotAccessories mobileAcc={data.hotAccessories.mobileAccessories} mobileAccCover={data.hotAccessoriesCover.mobileAccessories}/>} />

     </Routes>
     <Heading text="PRIDUCT REVIEWS"/>
     <ProductReviews productReviews={data.productReviews}/>
     <Footer footer={data.footer}/>
     
      
     

     


</Router>


  

    </>
  );
}

export default App;
