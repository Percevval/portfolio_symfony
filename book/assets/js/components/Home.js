import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Cv from './Cv';
import Accueil from './Accueil';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            
           <div>
               <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link  className={"navbar-brand"} to={"/accueil"}>Nicolas Gretten</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link  className={"navbar-brand"} to={"/accueil"}>Accueil <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link className={"nav-link"} to={"/MesProjets"}>Mes Projets</Link>
                        </li>
                        <li class="nav-item">
                            <Link className={"nav-link"} to={"/cv"}>CV</Link>
                        </li>
                        <li class="nav-item">
                            <Link className={"nav-link"} to={"/contact"}>Contact</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                
               <Switch>
                   <Redirect exact from="/" to="/accueil" />
                   <Route path="/cv" component={Cv} />
                   <Route path="/accueil" component={Accueil} />
                   <Route path="/contact" component={Contact} />
               </Switch>
               <footer class="page-footer bg-primary font-small blue fixed-bottom">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright: Nicolas Gretten</div>
                </footer>
           </div>
        )
    }
}
    
export default Home;