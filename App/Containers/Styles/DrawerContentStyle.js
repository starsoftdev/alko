
import { Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default {
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blazeOrange,
    paddingVertical: Metrics.largeMargin,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: Metrics.avatarBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blazeOrangeLighten,
    marginBottom: Metrics.doubleBaseMargin,
  },
  avatar: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: Metrics.avatarBorderRadius,
  },
  name: {
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.primary,
    color: Colors.snow,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.dune,
    paddingVertical: 40,
  },
  footer: {
    height: 40,
    padding: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    fontWeight: '600',
    fontFamily: Fonts.type.primary,
    color: Colors.inactive,
    fontSize: Fonts.size.small,
  },
};
