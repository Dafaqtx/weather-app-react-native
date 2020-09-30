import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, StyleSheet } from 'react-native';
import WeatherInfo from './WeatherInfo';
import UnitsPicker from './UnitsPicker';
import ReloadIcon from './ReloadIcon';
import WeatherDetails from './WeatherDetails';

export default function CurrentWeather({ currentWeather, unitsSystem, setUnitsSystem, load }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <StatusBar style="auto" />
        <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
        <ReloadIcon load={load} />
        <WeatherInfo currentWeather={currentWeather} />
      </View>
      <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
    </View>
  );
}

CurrentWeather.propTypes = {
  unitsSystem: PropTypes.string.isRequired,
  currentWeather: PropTypes.object.isRequired,
  setUnitsSystem: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  main: {
    justifyContent: 'center',
    flex: 1
  }
});
