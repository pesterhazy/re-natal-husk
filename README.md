# re-natal-husk

Experiment to show how to use the "empty husk" bundle idea to build production bundles for re-natal

Feeds index.ios.js.husk.js into the packager, then injects the actual ClojureScript generated bundle.

This avoids perennial issues with the React Native packager.

Limitations

- index.ios.js.husk.js is hand-crafted right now
- uses a hacky regex to patch the bundles (might break with updates to packager)

## Usage

This builds a Release configuration build.

```
npm install

lein prod-build

cp patch-react-native-xcode.sh ./node_modules/react-native/packager/react-native-xcode.sh 

react-native run-ios --configuration Release
```

## Todo

- [ ] Find a way to patch react-native/packager/react-native-xcode.sh automatically
- [ ] Replace the /tmp/mytemp.js file with something more reliable
- [ ] Auto-generate index.ios.js.husk.js from .re-natal
- [ ] upstream into re-natal

## License

Copyright © 2017 Paulus Esterhazy

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
