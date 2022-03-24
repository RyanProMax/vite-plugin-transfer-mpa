# vite-plugin-transfer-mpa

> design for electron project mainly.

## Motivation

It will move the entry html file to the root directory, and rename the file with it's directory name.
So you should ensure that `scanDir` is the parent directory of `the entry html file`.

e.g `build/pages/home/index.html` -> `build/home.html`

## Usage

```sh
npm install @ryanpromax/vite-plugin-transfer-mpa
```

```ts
// vite.config.ts
import mpa from 'vite-plugin-transfer-mpa'

// @see https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...other plugins
    mpa(/* options */),
  ]
})
```

## Options

```ts
{
  /**
   * @description 打包目录
   * package directory
   * @default 'path.resolve(viteConfig.root, viteConfig.build.outDir) || path.resolve(process.cwd(), "dist")'
   */
  buildDir: string
  /**
   * @description 扫描目录
   * where to locate pages
   * @default 'path.resolve(buildDir, "pages")'
   */
  scanDir: string
  /**
   * @description 文件名
   * what is your html file name, e.g. index.html / main.html / entry.html / template.html
   * @default 'index.html'
   */
  filename: string
}
```
