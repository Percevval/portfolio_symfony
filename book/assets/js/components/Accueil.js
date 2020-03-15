import React, {Component} from 'react';
import axios from 'axios';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);    
    
class Accueil extends Component {
    constructor() {
        super();
        
        this.state = { accueil: [], loading: true}
    }
    
    componentDidMount() {
        // this.getPosts();
    }
    
    getTopProject() {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
        //     const posts = res.data.slice(0,15);
        //     this.setState({ posts, loading: false })
        // })
    }
    
    render() {
        return (
            <div>
                <div class="container mt-5">
                    <div class="jumbotron">
                        <h1 class="display-3 text-center">Bonjour</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <ColoredLine color="lightgrey" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <div class="card border-primary mb-3">
                                <div class="card-header text-center">Header</div>
                                <div class="card-body">
                                    <h4 class="card-title">Primary card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card border-primary mb-3">
                                <div class="card-header text-center">Header</div>
                                <div class="card-body">
                                    <h4 class="card-title">Primary card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card border-primary mb-3">
                                <div class="card-header text-center">Header</div>
                                <div class="card-body">
                                    <h4 class="card-title">Primary card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Accueil;