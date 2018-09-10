import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class MainNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Main Nav
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {mainNav: state};
}

export default connect(mapStateToProps, {})(MainNav);
