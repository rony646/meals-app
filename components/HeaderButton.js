import React from 'react';
import {} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return <HeaderButton 
    {...props} 
    IconComponent={Ionicons} 
    iconSize={23} 
    color={Platform.OS === 'ios' ? Colors.primaryColor : 'white'}
    />
};

export default CustomHeaderButton;