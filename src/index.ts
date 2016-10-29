import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
import * as path from 'path'

/**
 * Tslint loader support for *.ts files
 * See: https://github.com/wbuchwalter/tslint-loader
 */
export = function eslint({options = {}, exclude = null} = {}) {
  return function eslint(this: WebpackConfigWithMetadata): WebpackConfigWithMetadata {
    return {
      module: {
        preLoaders: get(this, 'module.preLoaders', []).concat([
          { test: /\.jsx?$/, loader: 'eslint', exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : []) }
        ])
      },
      eslint: options
    }
  }
}