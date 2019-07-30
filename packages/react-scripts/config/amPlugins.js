'use strict';

const webpack = require('webpack');

module.exports = [
  new webpack.NormalModuleReplacementPlugin(/LOCATION_INTERCEPTORS/, function(
    resource
  ) {
    resource.request = resource.request.replace(
      /LOCATION_INTERCEPTORS/,
      `./${process.env.LOCATION}`
    );
  }),
];
