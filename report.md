# Case Study: React Native
## Technology
- React Native uses Javascript to create mobile applications for both Android and iOS devices. I think if the project were to be started today, the developers would still choose to use Javascript. Javascript unlike Java is a language that users can pick up pretty quickly and intuitively, since there is not the need to learn about object oriented programming. This makes using the framework more accessible to all users regardless of skill level or knowledge of programming.
- There are two different methods that you can use to install and build an app using React Native. You can either use the Expo command line interface or the React Native command line interface.
  - The Expo Command line interface requires Node 10+ to be installed. In order to install this interface, create a new app, and run the program, you'd enter the following commands
  ``` 
  npm install -g expo-cli
  expo init MyReactProject
  cd MyReactProject
  npm start # you can also use expo start
  ```
  One benefit of using the Expo Method is that you do not need to install Xcode or Android Studio because you can preview you app right on your phone. You can download the Expo app onto your device, and as long as your device and your computer are on the same wireless network, you can pull up the current prototype on your phone. You either scan the QR code that is printed in your terminal for Android Devices or follow the onscreen instructions for iOS devices. You can also install Xcode and Android Studio to run emmulators, which you would run using either the `npm run ios` or `npm run android` commands.

  - Using the React Native interfacfe requires Node 8.3 or newer, which is better for people who don't always have the newest versions of different technologies installed. To install the cli, and create a new application, you'd enter the following commands
  ```
  npm install -g react-native-cli
  react-native init MyReactProject
  cd MyReactProject
  ```
  For this method, you must install Xcode and Android Studio, to use the emmulators to preview your application. You'd run either the `react-native run-ios` or `react-native run-android` commands, depending on which device you'd like to use.
- React Native uses __many__ libraires, which you can find [here](https://github.com/facebook/react-native/tree/master/Libraries)

## Testing
## Software Architecture
## Issues
## Demo
- For my first demo, I created a simple application that changes the color of the background, every time the button is pressed. 
<center><img src="./images/demo_app.png" width="75%%"/></center>
<center>You can see 2 button presses and the changing of color in this picture</center>