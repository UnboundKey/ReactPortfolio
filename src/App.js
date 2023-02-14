import './App.css';
import { SocialList } from './components/home_socialLinks';
import { MobileNavigationBar, NavigationBar } from './components/header_navbar';
import { Introduction } from './components/home_introduction';
import { Footer } from './components/footer';
import { HomeProjects } from './components/home_projects';

function App() {
  return (
   <>
   <div className='wrapper'>
    <MobileNavigationBar/>
    <NavigationBar />
    <div className='innerwrapper'>
    <Introduction />
    <SocialList />
    <HomeProjects />
    <Footer />
    </div>
   </div>
   </>
   );
}

export default App;
