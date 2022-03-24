import { Plugin, ResolvedConfig } from 'vite'
import { resolve } from 'path';
import fse from 'fs-extra';
import { Config } from './type';

export default function mpa(userOptions: Partial<Config> = {}): Plugin {
  let config: ResolvedConfig;
  const options = {
    buildDir: '',
    scanDir: '',
    filename: 'index.html',
    ...userOptions
  }
  return {
    name: 'vite-plugin-electron-mpa',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig
    },
    closeBundle() {
      const root = config.root || process.cwd();
      const dest = (config.build && config.build.outDir) || 'dist';
      const buildDir = options.buildDir || resolve(root, dest);
      const scanDir = options.scanDir || resolve(buildDir, 'pages');

      const pageNames = fse.readdirSync(scanDir);
      pageNames.forEach((pageName) => fse.moveSync(resolve(scanDir, pageName, options.filename), resolve(buildDir, `${pageName}.html`)));
      fse.removeSync(scanDir);
    },
  }
}