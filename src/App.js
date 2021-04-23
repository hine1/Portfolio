import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import {Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />      

{/*        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
        </Switch>*/}
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
        <Footer/>
    </div>
  );
}

export default App;
