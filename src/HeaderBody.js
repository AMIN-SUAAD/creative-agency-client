import React from 'react';
import headerImage from './images/headerImage.png'

const HeaderBody = () => {
    return (
        <div style = {{ height: '400px',backgroundColor: '#fbd062'}} className="row d-flex align-items-center mb-5">
            <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your<br></br>Brand To The<br></br>Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus urna sed ornare tempus. Quisque nisl leo, congue id viverra euismod, volutpat id urna. Aliquam dapibus ipsum in sodales vulputate. Nam ornare, nunc a pellentesque fermentum, odio est placerat erat, sit amet sagittis nulla magna quis ligula. Integer sed nibh posuere, sodales velit non, placerat nisi. Fusce at varius ex.</p>

            </div>
            <div className="col-md-6 offset-md-1">
            <img style={{width: '450px'}} src={headerImage} alt="" ></img>


            </div>
            
        </div>
    );
};

export default HeaderBody;