# POC - Expo Deep Linking

## 02 - ReactNavigation Deep Linking Example

### Getting Started

Install and run expo application

```
$ yarn install
$ yarn start
```

### Testing DeepLinking

```
#-- iOS

$ npx uri-scheme open 'exp://127.0.0.1:19000/--/home' --ios
$ npx uri-scheme open 'exp://127.0.0.1:19000/--/settings' --ios

#-- Android

$ npx uri-scheme open 'exp://127.0.0.1:19000/--/home' --android
$ npx uri-scheme open 'exp://127.0.0.1:19000/--/settings' --android
```
