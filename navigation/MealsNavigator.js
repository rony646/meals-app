import React from 'react';

import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultHeaderOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultHeaderOptions
})

const tabScreenConfig =  {
  Meals: {
  screen: MealsNavigator, 
  navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons 
                name='ios-restaurant' 
                size={25} 
                color={tabInfo.tintColor}
              />
    },
    tabBarColor: Colors.primaryColor
  }},
Favorites: {
  screen: FavNavigator,
  navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons
                name='ios-star' 
                size={25}
                color={tabInfo.tintColor}
              />
    },
    tabBarColor: Colors.accentColor
  }
}
}

const MealsFavNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white',
  shifting: true

}) 
: createBottomTabNavigator( tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans-bold'
    },
    activeTintColor: Colors.accentColor
  }
})

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: defaultHeaderOptions
})

const MainNavigator = createDrawerNavigator({
   MealsFavs: {
     screen: MealsFavNavigator,
     navigationOptions: {
       drawerLabel: 'Meals'
     }
    },
   Filters:  FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
       fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);
