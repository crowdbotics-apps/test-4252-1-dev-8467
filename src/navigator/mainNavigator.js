import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth49622Navigator from '../features/EmailAuth49622/navigator';
import CopyOfBlankScreen19620Navigator from '../features/CopyOfBlankScreen19620/navigator';
import BlankScreen19618Navigator from '../features/BlankScreen19618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth49622: { screen: EmailAuth49622Navigator },
CopyOfBlankScreen19620: { screen: CopyOfBlankScreen19620Navigator },
BlankScreen19618: { screen: BlankScreen19618Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
