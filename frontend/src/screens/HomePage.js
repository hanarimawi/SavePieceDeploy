import React, { Component } from 'react';
import HomeButton from '../components/HomeButton'
import '../style/HomePage.css';


class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div>
                    <img alt="Save Me A Piece" src={require('../logo.png')}/>
                    <div className="home-title">SAVE ME A PIECE</div>
                    <div>
                        <HomeButton url="/loginchoice" type="h" name="LOGIN" />
                        <HomeButton url="/signupchoice" type="h" name="SIGN UP" />
                    </div>
                </div>
            </div>     
        );
    }
}

export default HomePage;
