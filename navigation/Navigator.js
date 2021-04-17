import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LogIn from '../screens/LogIn.jsx';
import SignUp from '../screens/SignUp.jsx';

const AuthNavigator = createSwitchNavigator({
  LogIn,
  SignUp,
});

export default createAppContainer(AuthNavigator);