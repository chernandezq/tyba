import React from 'react';
import {styles} from './style';
import RestaurantCard from '../Card';
import {FlatList, View} from 'react-native';

const RestaurantsList: React = ({data}) => {
  const keyExtractor = data => data.id;

  const renderItem = ({item}) => {
    return <RestaurantCard item={item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyboardShouldPersistTaps="handled"
      ListFooterComponent={() => <View style={{height: 80}} />}
    />
  );
};

export default RestaurantsList;
