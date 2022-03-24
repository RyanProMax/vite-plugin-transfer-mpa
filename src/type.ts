
export interface Config {
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