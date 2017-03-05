// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  BackAndroid,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import { Connect } from '../Redux';
import DrawerButton from '../Components/DrawerButton';
import styles from './Styles/DrawerContentStyle';
import { Images } from '../Themes';

class DrawerContent extends Component {

  static defaultProps = {
    profile: {
      displayName: '',
    },
  }

  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer();
        return true;
      }
      return false;
    });
  }

  onLogout() {
    this.props.actions.signOut();
    // Just to test onboard multiple times
    setTimeout(() => this.toggleDrawer(), 500);
    setTimeout(() => this.props.actions.signIn(), 1500);
  }

  toggleDrawer() {
    this.context.drawer.toggle();
  }

  navigateTo = page => () => {
    this.props.actions.setActivePage(page);
    NavigationActions[page]();
    this.props.actions.closeDrawer();
  }

  render() {
    const { auth: { profile }, active } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={Images.sampleAvatar} style={styles.avatar} />
          </View>
          <Text style={styles.name}>{profile.displayName}</Text>
        </View>
        <ScrollView style={styles.contentContainer}>

          <DrawerButton
            isActive={active === 'map'}
            text={I18n.t('BARS')}
            navigateTo={this.navigateTo('map')}
          />

          <DrawerButton
            isActive={active === 'editProfile'}
            text={I18n.t('PROFILE')}
            navigateTo={this.navigateTo('editProfile')}
          />

          <DrawerButton
            isActive={active === 'pushNotifications'}
            text={I18n.t('PUSH_NOTIFICATIONS')}
            navigateTo={() => {}}
          />

          <DrawerButton
            isActive={active === 'termsOfService'}
            text={I18n.t('TERMS_OF_SERVICE')}
            navigateTo={this.navigateTo('termsOfService')}
          />

          <DrawerButton
            isActive={active === 'privacyPolicy'}
            text={I18n.t('PRIVACY_POLICY')}
            navigateTo={this.navigateTo('privacyPolicy')}
          />

          <DrawerButton
            isActive={active === 'feedback'}
            text={I18n.t('SEND_FEEDBACK')}
            navigateTo={() => {}}
          />

        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity navigateTo={this.onLogout}>
            <Text style={styles.copyright}>© 2017 ALKO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  active: state.drawer.page,
});

export default Connect(DrawerContent, mapStateToProps);
