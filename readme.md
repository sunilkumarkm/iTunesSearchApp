# iTunes Seach App

An example project incorporating the iTunes Search API for android/ios react native application

## Preview

![Dashboard](https://github.com/sunilkumarkm/iTunesSearchApp/blob/master/app/assets/Dashboard.png?raw=true)
![Item Details](https://github.com/sunilkumarkm/iTunesSearchApp/blob/master/app/assets/Details.png?raw=true)

## Setup

Before attempting to run this demo please make sure that you have taken care of the following dependencies

Ensure that you have setting up the development environment [Environment Setup](https://reactnative.dev/docs/environment-setup).

Once this is complete, clone the repo and install the dependencies.

```
git clone https://github.com/sunilkumarkm/iTunesSearchApp.git

yarn install
```

### Configuring the environments for iOS and Android

**iOS (XCode)**

Navigate to project ios subfolder and run

```
pod install
```

to install the iOS dependencies

## Running the app

The iTunes Search App is designed to work with both ios and android systems. It will run on the simulator or the actual device.

You can run the app on your device with the following commands

**For iOS**

```
react-native run-ios
```

For iOS you will probably want to have the simulator open already as XCode 9 does not start the simulator automatically with this command

**For Android**

```
react-native run-android
```

Be sure you have the android platform-tools in your PATH environment variable so that react native can access tools like adb to run your app. You may need to setup a virtual device first if you wish to use the simulator.

**For Testing**

```
yarn test
```
