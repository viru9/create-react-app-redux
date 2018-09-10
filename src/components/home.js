import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import {fetchHomeValues} from './../actions/home';
import AlertModel from './common/alert';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show_alert: false
    }
  }

buttonClicked(){
  this.setState({
    show_alert:true
  });
}

  componentDidMount() {

  }


  render() {
    return (
      <div>
<MainNav/>
<AlertModel show_alert={this.state.show_alert}/>
      Home Page

      <button onClick={this.buttonClicked.bind(this)}>Open Alert</button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(Home);
