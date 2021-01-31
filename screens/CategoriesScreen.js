import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  FlatList, 
  TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummydata';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

const renderGridItem = (itemData) => {
  return <CategoryGridTile 
    color={itemData.item.color}
    title={itemData.item.title} 
    onSelect={() => {
    props.navigation.navigate({routeName: 'CategoryMeals', params: {
      categoryId: itemData.item.id
    }})
  }}/>
};


  return (
    <FlatList 
      data={CATEGORIES} 
      numColumns={2} 
      renderItem={renderGridItem} 
      />
  );
};

CategoriesScreen.navigationOptions = (navData) => { 
  return {
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
                  <Item title="menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                  }}/>
                </HeaderButtons>,
    headerTitle: 'Meal Categories'
  }
 
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
