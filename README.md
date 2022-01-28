# POC - Expo Deep Linking

## Getting Started

Install and run expo application

```
$ yarn install
$ yarn start
```

## Testing DeepLinking

```
#-- iOS

$ npx uri-scheme open 'exp://127.0.0.1:19000/--/chat/jan?foo=bar' --ios

#-- Android

$ npx uri-scheme open 'exp://127.0.0.1:19000/--/chat/jan?foo=bar' --android
```
