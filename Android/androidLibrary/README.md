
# react-native-android-library

## Getting started

`$ npm install react-native-android-library --save`

### Mostly automatic installation

`$ react-native link react-native-android-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-android-library` and add `RNAndroidLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAndroidLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAndroidLibraryPackage;` to the imports at the top of the file
  - Add `new RNAndroidLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-android-library'
  	project(':react-native-android-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-android-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-android-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAndroidLibrary.sln` in `node_modules/react-native-android-library/windows/RNAndroidLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Android.Library.RNAndroidLibrary;` to the usings at the top of the file
  - Add `new RNAndroidLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAndroidLibrary from 'react-native-android-library';

// TODO: What to do with the module?
RNAndroidLibrary;
```
  