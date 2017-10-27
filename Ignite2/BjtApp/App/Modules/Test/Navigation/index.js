import React from 'react';
import Home from '../Containers/Home';
import { ActionConst } from 'react-native-router-flux'

export const pages = [
  {
    type: ActionConst.REPLACE,
    component: Home,
    key: 'testHome',
    title: '书库',
  }
];
