
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import MainLayout from './componatnts/MainLayout/MainLayout';
import Watches from './pages/Watchs/Watches';
import ProductPage from './pages/ProductPage/ProductPage';
import Jewelry from './pages/Jewelry/Jewelry';
import RepairPage from './pages/RepairPage/RepairPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import AllCollection from './pages/AllCollection/AllCollection';
import BestSellerCategory from './componatnts/AllColection/Categories/BesSeler/BestSellerCategory';
import Search from './pages/Search/Search';
import AllProduct from './componatnts/AllProduct/AllProduct';
import WatchesNews from './componatnts/NewsPage/Categories/Watchesnews/WatchesNews';
import Jewllarynews from './componatnts/NewsPage/Categories/Jewllarynews/Jewllarynews';
import Repairnews from './componatnts/NewsPage/Categories/Repairnews/Repairnews';
import ReadMore from './pages/ReadMore/ReadMore';
import SignIn from './pages/SignIn/SignIn';
import Create from './pages/Create/Create';
import IsNotLogin from './componatnts/Protectedlogin/IsNotLogin';
import IsLogin from './componatnts/Protectedlogin/IsLogin';
import ShoppingCard from './pages/ShoppingCard/ShoppingCard';
import Payment from './pages/Payment/Payment';





function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Watches />} />
              <Route path='JEWELLERY' element={<Jewelry />} />
              <Route path='product/:id' element={<IsLogin><ProductPage /></IsLogin>} />
              <Route path='Repair' element={<RepairPage />} />
              <Route path='About' element={<About />} />
              <Route path='Contact' element={<Contact />} />
              <Route path='AllCOLLECTION' element={<AllCollection />} />
              <Route path='BestSellerCategory' element={<BestSellerCategory brand="BestSellerCategory" />} />
              <Route path='AFFORDABLE WATCHES' element={<BestSellerCategory brand="AFFORDABLE WATCHES" />} />
              <Route path='birthstones' element={<BestSellerCategory brand="birthstones" />} />
              <Route path='Earrings' element={<BestSellerCategory brand="Earrings" />} />
              <Route path='Expression Jewelry' element={<BestSellerCategory brand="Expression Jewelry" />} />
              <Route path='Earrings' element={<BestSellerCategory brand="Earrings" />} />
              <Route path='Gemstones' element={<BestSellerCategory brand="Gemstones" />} />
              <Route path='Gold Watches' element={<BestSellerCategory brand="Gold Watches" />} />
              <Route path='Limited Edition Jewelry' element={<BestSellerCategory brand="Limited Edition Jewelry" />} />
              <Route path='Mechanical Watches' element={<BestSellerCategory brand="Mechanical Watches" />} />
              <Route path='Pendants & Necklaces' element={<BestSellerCategory brand="Pendants & Necklaces" />} />
              <Route path='AllProduct' element={<AllProduct />} />
              <Route path='Search' element={<Search />} />
              <Route path='WatchesNews' element={<WatchesNews />} />
              <Route path='Jewllarynews' element={<Jewllarynews />} />
              <Route path='Repairnews' element={<Repairnews />} />
              <Route path='ReadMore/:id' element={<ReadMore />} />
              <Route path='SignIn' element={<IsNotLogin><SignIn /></IsNotLogin>} />
              <Route path='Create' element={<IsNotLogin><Create /></IsNotLogin>} />
              <Route path='ShoppingCard' element={<IsLogin><ShoppingCard /></IsLogin>} />
              <Route path='Payment' element={<IsLogin><Payment /></IsLogin>} />
            </Route>
          </Routes>
        </BrowserRouter>



      </RecoilRoot>

      <ToastContainer />
    </div>
  );
}

export default App;
