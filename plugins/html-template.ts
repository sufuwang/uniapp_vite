const { writeFile, readFile, readdir } = require('fs/promises')
import { Compilation, Compiler, Stats } from 'webpack'

interface TypeParams {
  template: string
}

class ClearDistPlugin {
  template = ''
  constructor({ template }: TypeParams) {
    this.template = template
  }
  async apply(compiler: Compiler) {
    const html = (await readFile(this.template)).toString()
    const script = (src: string) => `<script src="${'./' + src}"></script>`
    const isDevServer = compiler.options.devServer?.hot

    // 单次打包
    !isDevServer && compiler.hooks.done.tap(
      'HtmlTemplatePlugin',
      async (stats: Stats) => {
        const dist = compiler.options.output.path
        const allJS = (await readdir(dist) as Array<string>).filter(d => d.endsWith('.js'))
        const htmlWithScript = html + allJS.map(js => script(js)).join('\n')
        await writeFile(`${dist}/index.html`, htmlWithScript, { flag: 'w' })
      }
    )
    // 开启 devServer
    isDevServer && compiler.hooks.emit.tapAsync(
      'HtmlTemplatePlugin',
      (compilation: Compilation, callback: Function) => {
        const allJS = Object.keys(compilation.assets).filter(d => d.endsWith('.js'))
        const htmlWithScript = html + allJS.map(js => script(js)).join('\n')
        console.info('allJS:', allJS)
        compilation.assets['index.html'] = {
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

export default ClearDistPlugin;
