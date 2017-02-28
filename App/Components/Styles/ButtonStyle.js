// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes/';

export default StyleSheet.create({
  btn: {
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: Colors.blazeOrange,
  },
  btnText: {
    color: Colors.snow,
    backgroundColor: Colors.transparent,
    fontFamily: Fonts.type.primary,
    fontSize: 15,
    textShadowColor: Colors.blazeOrangeShadow,
    textShadowOffset: { width: 0, height: 2 },
  },
  darkBtn: {
    backgroundColor: Colors.tundora,
  },
  darkBtnText: {
    color: Colors.doveGray,
    textShadowColor: Colors.panther,
  },
  btnDisallow: {
    marginTop: Metrics.doubleBaseMargin,
    backgroundColor: Colors.tundora,
  },
  btnDisallowText: {
    color: '#707070',
    textShadowColor: 'rgb(50,50,50)',
  },
});
