// @flow

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyle';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';
import CustomNavBar from '../Navigation/CustomNavBar';
import { slideLeft } from '../Themes/NavigationAnimations';

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen';
import AllComponentsScreen from '../Containers/AllComponentsScreen';
import UsageExamplesScreen from '../Containers/UsageExamplesScreen';
import LoginScreen from '../Containers/LoginScreen';
import ListviewExample from '../Containers/ListviewExample';
import ListviewGridExample from '../Containers/ListviewGridExample';
import ListviewSectionsExample from '../Containers/ListviewSectionsExample';
import ListviewSearchingExample from '../Containers/ListviewSearchingExample';
import MapviewExample from '../Containers/MapviewExample';
import APITestingScreen from '../Containers/APITestingScreen';
import ThemeScreen from '../Containers/ThemeScreen';
import DeviceInfoScreen from '../Containers/DeviceInfoScreen';

import IntroductionStep1Screen from '../Containers/Introduction/Step1';
import IntroductionStep2Screen from '../Containers/Introduction/Step2';
import IntroductionStep3Screen from '../Containers/Introduction/Step3';
import IntroductionStep4Screen from '../Containers/Introduction/Step4';

class NavigationRouter extends Component {
  render() {
    return (
      <Router animationStyle={slideLeft}>
        <Scene key="onboard">
          <Scene initial key="introStep1Screen" component={IntroductionStep1Screen} hideNavBar />
          <Scene key="introStep2Screen" component={IntroductionStep2Screen} hideNavBar />
          <Scene key="introStep3Screen" component={IntroductionStep3Screen} hideNavBar />
          <Scene key="introStep4Screen" component={IntroductionStep4Screen} hideNavBar />
        </Scene>

        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="drawerChildrenWrapper" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key="presentationScreen" component={PresentationScreen} title="Ignite" renderLeftButton={NavItems.hamburgerButton} />
            <Scene key="componentExamples" component={AllComponentsScreen} title="Components" />
            <Scene key="usageExamples" component={UsageExamplesScreen} title="Usage" rightTitle="Example" onRight={() => window.alert('Example Pressed')} />
            <Scene key="login" component={LoginScreen} title="Login" hideNavBar />
            <Scene key="listviewExample" component={ListviewExample} title="Listview Example" />
            <Scene key="listviewGridExample" component={ListviewGridExample} title="Listview Grid" />
            <Scene key="listviewSectionsExample" component={ListviewSectionsExample} title="Listview Sections" />
            <Scene key="listviewSearchingExample" component={ListviewSearchingExample} title="Listview Searching" navBar={CustomNavBar} />
            <Scene key="mapviewExample" component={MapviewExample} title="Mapview Example" />
            <Scene key="apiTesting" component={APITestingScreen} title="API Testing" />
            <Scene key="theme" component={ThemeScreen} title="Theme" />

            {/* Custom navigation bar example */}
            <Scene key="deviceInfo" component={DeviceInfoScreen} title="Device Info" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
