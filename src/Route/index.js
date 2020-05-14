import{
    createAppContainer, 
    createSwitchNavigator
  } from 'react-navigation'
  import Splash from '../Components/Splash';
  import Dashboard from './navigation'
  
  const appSwitchNavigator = createSwitchNavigator({
      Splash:Splash,
      Dashboard:Dashboard
  }, {
      initialRouteName:'Splash'
  })
  
  export default createAppContainer(appSwitchNavigator);
  