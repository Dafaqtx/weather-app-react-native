import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={setUnitsSystem}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}>
        <Picker.Item label="C°" value="metrics" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

UnitsPicker.propTypes = {
  unitsSystem: PropTypes.string.isRequired,
  setUnitsSystem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  unitsSystem: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20
      },
      android: {
        top: 20
      }
    }),
    left: 20,
    height: 50,
    width: 100
  }
});
