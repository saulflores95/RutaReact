import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{

  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render(){
    return(
      <ReactCSSTransitionGroup
      component="div"
      transitionName="route"
      transitionEnterTimeout={600}
      transitionAppearTimeout={600}
      transitionLeaveTimeout={400}
      transitionAppear={true}    >
        <h1>About Us</h1>
        <p>Semiotics authentic street art lumbersexual scenester affogato. Unicorn try-hard single-origin coffee celiac, vape authentic tilde banh mi. XOXO lomo literally, farm-to-table humblebrag readymade la croix VHS air plant succulents. Cardigan try-hard chillwave, heirloom typewriter deep v irony disrupt VHS master cleanse drinking vinegar af waistcoat +1 iceland. Letterpress +1 pop-up lo-fi, stumptown iceland gluten-free tote bag portland hoodie jianbing locavore venmo four dollar toast art party bit you probably havent heard them banjo, disrupt single-origin coffee XOXO small batch gentrify fingerstache etsy blue bottle selfies twee raw denim lumbersexual. Readymade kombucha keffiyeh, mustache aesthetic roof party viral cray food truck man braid.</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>

    )
  }
}
