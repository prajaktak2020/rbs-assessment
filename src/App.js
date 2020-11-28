import 'animate.css/animate.min.css';
import './App.css';
import Header from './components/Header';
import Banner from './components/Sections/Banner';
import MeetCommunity from './components/Sections/MeetCommunity';
import Location from './components/Sections/Location';
import Menu from './components/Sections/Menu';
import PopularRecipes from './components/Sections/PopularRecipes';
import RequestInfoLabel from './components/SideContent/RequestInfoLabel';
import ScrollIndicator from './components/SideContent/ScrollIndicator';
import CollaborateWithUs from './components/Sections/CollaborateWithUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <ScrollIndicator />
      <RequestInfoLabel />
      <Banner />
      <MeetCommunity />
      <Location />
      <Menu />
      <PopularRecipes />
      <CollaborateWithUs />
      <Footer/>

    </div>
  );
}

export default App;
