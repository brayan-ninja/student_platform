import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import './App.css';
import StudentDetails from "./components/Studentdetails";


function App() {
  return (
    <div className="App">
     <Router>
      <div className='app'>
        <Navbar />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
          <Create/>
          </Route>
          <Route path='/student-details/:id'>
          <StudentDetails/>
        </Route>

        </Switch>
      </div>
     </Router>
    
    </div>
  );
}

export default App;
