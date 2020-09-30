import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../utils';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed }
  } = currentWeather;

  const windSpeed =
    unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;

  return (
    <View style={styles.WeatherDetails}>
      <View style={styles.WeatherDetailsRow}>
        <View
          style={{
            ...styles.WeatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR
          }}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome name="tempterature-low" size={25} color={PRIMARY_COLOR} />
            <View style={styles.WeatherDetailsItems}>
              <Text>Feels like:</Text>
              <Text style={styles.textSecondary}>{feels_like}</Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
            <View style={styles.WeatherDetailsItems}>
              <Text>Humidity:</Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ ...styles.WeatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
        <View
          style={{
            ...styles.WeatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR
          }}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome name="weather-windy" size={30} color={PRIMARY_COLOR} />
            <View style={styles.WeatherDetailsItems}>
              <Text>Wind speed:</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
            <View style={styles.WeatherDetailsItems}>
              <Text>Pressure:</Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

WeatherDetails.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  unitsSystem: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  WeatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10
  },
  WeatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  WeatherDetailsBox: {
    flex: 1,
    padding: 20
  },
  WeatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: 500,
    margin: 7
  }
});
