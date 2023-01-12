import logo from './logo.svg';
import './App.css';
import { SocialList } from './components/home_socialLinks';
import { MobileNavigationBar, NavigationBar } from './components/header_navbar';
import { Introduction } from './components/home_introduction';

function App() {
  return (
   <>
   <div className='wrapper'>
    <MobileNavigationBar/>
    <NavigationBar />
    <Introduction></Introduction>
    <SocialList />
   </div>
   </>
   );
}

export default App;
