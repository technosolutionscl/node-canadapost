node-canadapost-international
=============================

A node module for integrating with Canada Post's shipping API

This module currently only supports Rates. Feel free to contribute.


Getting Started
---------------

The easiest way to grab the module is through `npm`:

    npm install node-canadapost-international


Pass your username, password and customer ID for the Canada Post API when requiring the library:

    var CanadaPost = require('node-canadapost-international')('<username>', '<password>', '<customerId>');

The module uses your NODE_ENV environment variable to determine if it's authenticating against their
production or development servers, if NODE_ENV is set to anything other than 'production' it will assume
development.

Start by setting up some defaults, these can be changed any time before calling the API:

    // Put your postal code here, should match the one Canada Post has on file. No spaces, all caps.
    CanadaPost.setOriginPostalCode('V1V2A2');

    // Optionally provide a contract ID and tell the system to use contract rates when calculating costs.
    // Defaults to counter rates otherwise.
    CanadaPost.setContractId(5555);
    CanadaPost.useContract(true);


Finding Rates for a Package
---------------------------

Call the `getRates` function and pass an object containing at least a weight and either destinationPostalCode, destinationZipCode or destinationCountryCode.
Optionally you can send along package dimensions (length is the longest side, width the next longest, and height the
smallest of the sides). Weight is measured in KiloGrams and dimensions are in CentiMeters.

Postal codes should always be all caps with no spaces.

Example:

    CanadaPost.getRates({
      weight: 10, // kg
      dimensions: {
        length: 64.5,
        width: 54.234,
        height: 12
      },
      destinationPostalCode: 'K1A0A6'
    }, function(err, rates) {
      console.log(err,rates);
    });

Choose which destination to ship to by specifying either:

- destinationPostalCode - Ship to Canada
- destinationZipCode - Ship to the United States
- destinationCountryCode - ship to any other country. Use the 2 character country code.

License
-------

This library is licensed under the [MIT license][license]



[license]: http://opensource.org/licenses/MIT
