import React, {Component} from 'react';
import axios from 'axios';

class Cv extends Component {
    constructor() {
        super();
        this.state = { cv: [], loading: true};
    }
    
    componentDidMount() {
        this.getCv();
    }
    
    getCv() {
       axios.get(`http://127.0.0.1:8000/api/cv`).then(cv => {
           this.setState({ cv: cv.data, loading: false})
           console.log(cv);
       })
    }
    
    render() {
        return(
            <div>
                <div class="h1 text-center" id="">ICI MON CV</div>
                { this.state.cv.map(cv =>
                <div className="media">
                    <div className="media-left align-self-center">
                        <img className="img"
                            src={cv.id}/>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
export default Cv;