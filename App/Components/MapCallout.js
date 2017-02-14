import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Styles from './Styles/MapCalloutStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';

// Example
ExamplesRegistry.add('Map Callout', () =>
  <MapCallout
    location={{
      title: 'Callout Example',
    }}
    onPress={() => window.alert('That tickles!')}
  />
);

type MapCalloutProps = {
  location: Object,
  onPress: () => void
}

export default class MapCallout extends React.Component {

  constructor(props: MapCalloutProps) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(this.props.location);
  }


  render() {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `MapView.Callout`
    *************************************************************/
    const { location } = this.props;
    return (
      <MapView.Callout style={Styles.callout}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>{location.title}</Text>
        </TouchableOpacity>
      </MapView.Callout>
    );
  }
}
