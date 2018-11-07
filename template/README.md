# <%= name %>

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)


<%= description %>

## Getting Started

``` bash
# setup GAS project
$ clasp create --rootDir ./src

# push with hot reload
$ <%= pm %> run dev
```

## Configuration

### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

## Contributing

Pull requests and stars are always welcome.

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

For bugs and feature requests, please [create an issue](https://github.com/takanakahiko/sao-clasp/issues).

## License
This software is released under the MIT License, see LICENSE.txt.

This template was made by [template-clasp](github.com/takanakahiko/template-clasp).
( MIT &copy; [takanakahiko](github.com/takanakahiko) )

This template was made based on [gas-clasp-starter](github.com/howdy39/gas-clasp-starter).
( MIT &copy; [howdy39](github.com/howdy39) )