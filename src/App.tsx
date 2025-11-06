import './App.css';
import HomePage from './pages/homepage';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Shop from './pages/shop';
import About from './pages/aboutus';
import Bloglisting from './pages/blogs';
import NotFound from './components/notFound';
import Contact from './pages/contactus';
import ProductDetails from './pages/productdetailspage';
import Whatsapp from './components/whatsapp';
import ExpressDelivery from './pages/help/expressdelivery';
import PrivacyPolicy from './pages/help/policy/page';
import Terms from './pages/help/terms';
import BlogDetail from './pages/blogdetails';
import Checkout from './pages/checkout';
import NewsListing from './pages/news';
import NewsDetailPage from './pages/Newsdetailpage';
import TrackOrder from './pages/help/trackorder/trackorder';
import Careers from './pages/help/careers/page';
import Modes from './pages/help/modes';
import { TableDemo } from './users';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />      
        <Route path="/blogs" element={<Bloglisting />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />       
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetail" element={<ProductDetails />} />
        <Route path="/expressdelivery" element={<ExpressDelivery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/checkout" element={<Checkout />} />
         <Route path="/news" element={<NewsListing />} />
         <Route path="/news/:title" element={<NewsDetailPage />} />
         <Route path="/trackorder" element={<TrackOrder />} />
         <Route path="/careers" element={<Careers />} />
         <Route path="/modes" element={<Modes />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/header" element={<MobileHeader />} /> */}
        <Route path="/users" element={<TableDemo />} />
      </Routes>
      <Whatsapp/>
      <Footer /> 
      </BrowserRouter>
    
  );
}

export default App;
