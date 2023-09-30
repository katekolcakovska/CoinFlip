import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinCointainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: "https://www.pcgs.com/UserImages/12598787o.jpg" },
            { side: 'tails', imgSrc: "https://www.pcgs.com/UserImages/12598787r.jpg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(oldState => {
            let newState = {
                ...oldState,
                currCoin: newCoin,
                nFlips: oldState.nFlips + 1
            };
            if (newCoin.side === "heads") {
                newState.nHeads += 1;
            } else {
                newState.nTails += 1;
            }
            return newState;
        });
        // return{
        // currCoin: newCoin,
        // nFlips:oldState.nFlips + 1,
        // nHeads: oldState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        // nTails: oldState.nTails + (newCoin.side === "tails" ? 1 : 0)
        // };
    }
    handleClick(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div className='CoinContainer'>
                <h2>Let's Flip a Coin!</h2>
                {/* <Coin side={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc} /> */}
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads an {this.state.nTails} tails</p>
            </div>
        );
    }
}

export default CoinCointainer;