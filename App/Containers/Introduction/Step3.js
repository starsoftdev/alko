import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import I18n from 'react-native-i18n';
import Button from 'app/Components/Button';
import styles from '../Styles/IntroductionScreenStyle';
import { Actions as NavigationActions } from 'react-native-router-flux';
import LocationHelper from 'app/Lib/LocationHelper';

export default class Step3Screen extends Component {

  requestLocationPermission = () => {
    NavigationActions.introStep4Screen();
    LocationHelper.getInstance().requestWhenInUsePermission();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{I18n.t('Introduction_step3_title')}</Text>
            <Text style={styles.description}>{I18n.t('Introduction_step3_description')}</Text>
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button onPress={this.requestLocationPermission} text={I18n.t('Introduction_step3_btn')} />
        </View>
      </View>
    );
  }

}
