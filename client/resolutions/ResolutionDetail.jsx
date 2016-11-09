import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends Component{
  constructor(){
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
        ReactDOM.findDOMNode(this.refs.container));
  }

  resolution(){
    return Resolutions.findOne(this.props.id);
  }


  render(){
    let res = this.resolution();
    if(!res){
      return(<div>Loading...</div>);
    }

      return(
        <div>
          <h1>{res.text}</h1>
        </div>
      )
  }
}
