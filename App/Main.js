import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mapping, dark, light} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import Navigation from './navigation/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import firebase from 'react-native-firebase';
import NavigationService from './navigation/navigationService';

class Main extends Component {
  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
  }

  //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('line 28', fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log(fcmToken);
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  //4  menerima fcm nya
  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // console.log('notif', notification);
        this.showHeadsUp(notification);
      });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const {data} = notificationOpen.notification;
        console.log('background', data);
        NavigationService.navigate(data.route, {id: data.id});
        //this.showAlert(title, body);
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const {data} = notificationOpen.notification;
      console.log('closed', data);
      NavigationService.navigate(data.route, {id: data.id});
      //this.showAlert('closed ' + title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  showHeadsUp(notif) {
    console.log('112', notif);
    const {notificationId, title, body, data} = notif;

    const notification = new firebase.notifications.Notification()
      .setNotificationId(notificationId)
      .setTitle(title)
      .setBody(body)
      .setData(data);
    //.cancelNotification(notificationId);

    notification.android.setPriority(
      firebase.notifications.Android.Priority.High,
    ); /// set to High
    notification.android.setChannelId('test-channel'); ///for android 8.0 and above
    notification.android.setAutoCancel(true); // buat ilangin setelah klik notifnya

    // Build a channel
    const channel = new firebase.notifications.Android.Channel(
      'test-channel',
      'Test Channel',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);

    return firebase.notifications().displayNotification(notification);
  }

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
