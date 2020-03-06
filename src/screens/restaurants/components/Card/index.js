import React from 'react';
import {styles} from './style';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const RestaurantCard: React = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: '100%', marginVertical: 5 * 2}]}
      activeOpacity={0.5}
      onPress={onPress}>
      {item.photos && (
        <Image
          style={styles.thumbnail}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyBF-9-JzfR7fPrzxLv2JN9xvbAi-cV7CRk`,
          }}
        />
      )}

      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
