import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{

  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render(){

    var styles = {
      section: {
        background: '#F9F9FA'
      },
      img: {
        padding: '30px 0'
      }
    }

    return(
      <div>
        <div className="container">
          <h1>About Us</h1>
          <p>Semiotics authentic street art lumbersexual scenester affogato. Unicorn try-hard single-origin coffee celiac, vape authentic tilde banh mi. XOXO lomo literally, farm-to-table humblebrag readymade la croix VHS air plant succulents. Cardigan try-hard chillwave, heirloom typewriter deep v irony disrupt VHS master cleanse drinking vinegar af waistcoat +1 iceland. Letterpress +1 pop-up lo-fi, stumptown iceland gluten-free tote bag portland hoodie jianbing locavore venmo four dollar toast art party bit you probably havent heard them banjo, disrupt single-origin coffee XOXO small batch gentrify fingerstache etsy blue bottle selfies twee raw denim lumbersexual. Readymade kombucha keffiyeh, mustache aesthetic roof party viral cray food truck man braid.</p>
          <div>
            <button className="waves-effect waves-light btn"
              onClick={this.setVar}>
              Sign Up
            </button>
          </div>
        </div>
        <div style={styles.section}>
          <section>
            <div className="row">
              <div className="col s6">
                <div className="col s3 offset-s3"
                  style={styles.img}>
                  <img className="circle"
                    src="http://img.webme.com/pic/m/mr-incognito/silueta.gif"
                    width={130}
                    height={130}/>
                </div>
              </div>
              <div className="col s6">
                <div className="col s3 offset-s3"
                  style={styles.img}>
                  <img className="circle"
                    src="http://img.webme.com/pic/m/mr-incognito/silueta.gif"
                    width={130}
                    height={130}/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    )
  }
}
