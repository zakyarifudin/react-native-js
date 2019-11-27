import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mapping, dark, light} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import Navigation from './navigation/navigation';

class Main extends Component {
  render() {
    const {selectedTheme} = this.props.auth;

    return (
      <ApplicationProvider
        mapping={mapping}
        theme={selectedTheme === 'dark' ? dark : light}>
        <Navigation />
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps))(Main);
