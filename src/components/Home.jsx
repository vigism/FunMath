import React from 'react';

class Home extends React.Component {
    
    
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="home-container">
                <h1>Math Games</h1>

                <ul className="home-list">
                    <li>Addition with missing number</li>
                    <li>Addition with missing answer</li>
                </ul>
            </div>
        )
    }

    
}

export default Home;