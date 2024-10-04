import { Link } from 'react-router-dom';
import {Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            <nav>
                <h1>Student Platform</h1>
                <div classname="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                </div>
            </nav>
        );
            
    }
}

export default Navbar;