# re-natal-husk

Experiment to show how to use the "empty husk" bundle idea to build production bundles for re-natal

For the problem this is intended to solve see [this repro-repo](https://github.com/jeaye/react-native-packager-bug).

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

react-native run-ios --configuration Release
```

To see regular builds fail

```
./build-normal
```

But this works

```
./build-husk
```


## Todo

- [ ] Find a way to patch react-native/packager/react-native-xcode.sh automatically. Currently this requires using an alternative script called husk-react-native-xcode.sh - but what if the original changes? Also this is a little annoying to set up....
- [ ] Auto-generate index.ios.js.husk.js from .re-natal
- [ ] upstream into re-natal

## See also

- http://austinbirch.co.uk/2017/07/28/clojurescript-and-react-native-bundling-for-release-with-advanced-optimisations.html

## License

Copyright © 2017 Paulus Esterhazy

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
