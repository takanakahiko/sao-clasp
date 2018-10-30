# <%= name %>

<%= description %>

## Getting Started

``` bash
# setup GAS project
$ clasp create --rootDir ./src

# serve with hot reload at localhost:3000
$ <%= _.pm %> run dev

# Development and build project
$ <%= _.pm %> run build

# clasp push
$ <%= _.pm %> run push
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

## License
This software is released under the MIT License, see LICENSE.txt.

This template was made by [template-clasp](github.com/takanakahiko/template-clasp).
( MIT &copy; [takanakahiko](github.com/takanakahiko) )

This template was made based on [gas-clasp-starter](github.com/howdy39/gas-clasp-starter).
( MIT &copy; [howdy39](github.com/howdy39) )