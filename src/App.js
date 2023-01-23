import logo from './logo.svg';
import './App.css';
import { SocialList } from './components/home_socialLinks';
import { MobileNavigationBar, NavigationBar } from './components/header_navbar';
import { Introduction } from './components/home_introduction';
import { Footer } from './components/footer';

function App() {
  return (
   <>
   <div className='wrapper'>
    <MobileNavigationBar/>
    <NavigationBar />
    <Introduction />
    <SocialList />
    <Footer />
   </div>
   </>
   );
}

export default App;
