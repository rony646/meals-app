import React from 'react';
import { useSelector } from 'react-redux';


import { HeaderButtons, Item, StyleSheet } from 'react-navigation-header-buttons';
import { View, Text } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';


const FavoritesScreen = props => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  if(favoriteMeals.length === 0 || !favoriteMeals) {
    return <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
              <Text style={{fontFamily: 'open-sans-bold'}}>No favorite meals foud. Start adding some!</Text>
           </View>
  };

  return <MealList listData={favoriteMeals} navigation={props.navigation}/>
};




FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title="menu" iconName="ios-menu" onPress={() => {
                      navData.navigation.toggleDrawer();
                    }}/>
                </HeaderButtons>
  }
};

export default FavoritesScreen;
