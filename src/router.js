import React from "react";
import { Platform, StatusBar,View } from "react-native";
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import Up from "./screens/Up";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/Signin";
import search from "./screens/search";
import Lessons from "./screens/lesson";
import Schools from "./categories/school";
import Request from './components/teacher1'
import Reqpage from './components/reqpage'
import Tutpro from './components/tutorpro'
import LoginScreen from './login_screen'
import Home from "./screens/Home";
import Post from "./screens/Post";

import Profile from "./screens/Profile";
import Business from "./categories/Business";
import Design from "./categories/Design";
import Development from "./categories/Development";
import Health from "./categories/health";
import IT from "./categories/IT";
import Language from "./categories/Lang";
import Lifestyle from "./categories/life";
import Marketing from "./categories/Marketing";
import Music from "./categories/Music";
import Office from "./categories/office";
import Personal from "./categories/Personal";
import Photography from "./categories/Photography";
import Testp from "./categories/Testp";
import { Provider } from 'mobx-react/native';
import appStore from '../store/AppStore'
import Signin from './screens/Signin'

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};
export const Cat = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header:null
    }
  },
  Post: {
    screen: Post,
    navigationOptions: {
      title: "Post Offer",
      headerStyle
    }
  },
  Schools: {
    screen: Schools,
    navigationOptions: {
      title: "Schools",
      headerStyle
    }
  },
  Business: {
    screen: Business,
    navigationOptions: {
      title: "Business",
      headerStyle
    }
  },
  Request: {
    screen: Request,
    navigationOptions: {
      title: "Request",
      headerStyle
    }
  },
  Reqpage: {
    screen: Reqpage,
    navigationOptions: {
      title: "Offers",
      headerStyle
    }
  },
  tutpro: {
    screen: Tutpro,
    navigationOptions: {
      title: "Tutor profile",
      headerStyle
    }
  },
  Design: {
    screen: Design,
    navigationOptions: {
      title: "Design",
      headerStyle
    }
  },
  Development: {
    screen: Development,
    navigationOptions: {
      title: "Development",
      headerStyle
    }
  },
  Health: {
    screen: Health,
    navigationOptions: {
      title: "Health",
      headerStyle
    }
  },
  it: {
    screen: IT,
    navigationOptions: {
      title: "IT",
      headerStyle
    }
  },
  Language: {
    screen: Language,
    navigationOptions: {
      title: "Language",
      headerStyle
    }
  },
  Lifestyle: {
    screen: Lifestyle,
    navigationOptions: {
      title: "Lifestyle",
      headerStyle
    }
  },
  Marketing: {
    screen: Marketing,
    navigationOptions: {
      title: "Marketing",
      headerStyle
    }
  },
  Music: {
    screen: Music,
    navigationOptions: {
      title: "Music",
      headerStyle
    }
  },
  Office: {
    screen: Office,
    navigationOptions: {
      title: "Office",
      headerStyle
    }
  },
  Personal: {
    screen: Personal,
    navigationOptions: {
      title: "Personal",
      headerStyle
    }
  },
  Photography: {
    screen: Photography,
    navigationOptions: {
      title: "Photography",
      headerStyle
    }
  },
  Testp: {
    screen: Testp,
    navigationOptions: {
      title: "Testp",
      headerStyle
    }
  },
  Log: {
    screen: LoginScreen,
    navigationOptions: {
      title: "LoginScreen",
      headerStyle
    }
  },
});



export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Cat,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    search: {
      screen: search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="search" size={30} color={tintColor} />
        )
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    },

  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const Roo = createSwitchNavigator(
 {
  SignIn: LoginScreen,Up:Up,log:Signin,

   home: SignedIn,
 }

);
class AA extends React.Component {
  render() {
    console.disableYellowBox = true


    return (
        <Provider appStore={appStore}>

          <Roo />
        </Provider>

    );
  }
}

export default AA;

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },

  );
};
