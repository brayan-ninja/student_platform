import {Link} from 'react-router-dom';
import {Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            <nav>
                <h1>Student Platform</h1>
                <div classname="links">
                    <link to="">Home</link>
                    <link to="">create</link>
                </div>
            </nav>
        );
            
    }
}

export default Navbar;