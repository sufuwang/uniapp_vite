const { resolve } = require('path')
const { rmdir, writeFile } = require('fs/promises')
import { Compiler, Stats, Compilation } from 'webpack'

class ClearDistPlugin {
  apply(compiler: Compiler) {
    const isDevServer = compiler.options.devServer?.hot

    compiler.hooks.beforeRun.tap(
      'ClearDistPlugin_beforeRun',
      async () => {
        await rmdir(resolve(__dirname, '../dist'), { recursive: true })
      }
    )
    !isDevServer && compiler.hooks.afterDone.tap(
      'ClearDistPlugin_afterDone',
      async (stats: Stats) => {
        await writeFile(`${stats.compilation.outputOptions.path}/stats.js`, 'console.info(1212)', { flag: 'w' })
      }
    )
    isDevServer && compiler.hooks.emit.tapAsync(
      'ClearDistPlugin_emit',
      (compilation: Compilation, callback: Function) => {
        const htmlWithScript = 'console.info(1212)'
        compilation.assets['stats.js'] = {
          source() {
            return htmlWithScript;
          },
          size() {
            return htmlWithScript.length;
          }
        } as any;
        compilation.assets['a.js'] = {
          source() {
            return htmlWithScript;
          },
          size() {
            return htmlWithScript.length;
          }
        } as any;
        callback();
      }
    );
  }
}

export default ClearDistPlugin