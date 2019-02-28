import React, { Component } from 'react';
import avata from './images/avata.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header"> 
                    <div className="main">                   
                        <h1>Who I am ?</h1>
                    </div>                   
                </header>
                <div className="App-content">
                    <div className="profile">
                        <div className="avata">
                            <img src={avata} alt="logo" />
                        </div>
                        <div className="profile-intro">
                            <h2>I'M <span className="text-name">{this.props.name}</span></h2>
                            <h3>GRAPHIC <span className="text-name">AND</span> WEB TEMPLATE</h3>
                            <p>
                                <strong>Nick name: </strong>{this.props.nickname}<br />
                                <strong>Email: </strong>{this.props.email}
                            </p>
                        </div>
                    </div>
                    <div className="description">
                        <h2>Personal qualities</h2>
                        <ul>
                            <li>As planned, said work arrangements, active, enthusiastic, innovative, passionate and very sociable job</li>
                            <li>As a hardworking, inquisitive, want to learn new technology. Absorb and adapt to rapid job</li>
                            <li>Ability to work independently and in groups, to withstand high pressure.</li>
                        </ul>
                        <h2>Skills</h2>
                        <ul>
                            <li>PHP programming</li>
                            <li>CSS design</li>
                            <li>Development open sources</li>
                            <li>Independent or team work</li>
                            <li>Experienced Web Responsive</li>
                        </ul>
                    </div>
                </div>
                <footer className="App-footer">
                    <div className="main">
                        <p>Copyright © 2019. All rights reserved.</p>
                        <p>Made with love by <a href="#">{this.props.nickname}</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

App.defaultProps = {
    name: 'Quynh Pham',
    nickname: 'Lyly',
    email: 'quynh.p@shopstack.asia'
}

export default App;
