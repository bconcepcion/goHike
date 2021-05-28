import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Pages/Home'
import {About} from './components/Pages/About'
import {Contact} from './components/Pages/Contact'

function App() {



  return (
    <>
      <Router>
        <Navbar />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
      </Router>
      
    </>
  );
}

export default App;
