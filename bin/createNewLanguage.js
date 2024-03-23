/**
 * This is a CLI to generate and add a new language file
 * Simply run `yarn newLang`
 */
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('node:fs/promises');
const os = require('node:os');
const childProcess = require('node:child_process');

const rl = readline.createInterface({ input, output });

rl.question('Declare the new language id (Ex: en, fr, ...): ')
  .then(function (langId) {
    rl.close();
    if (langId.length !== 2) {
      throw new TypeError('Language id should follow ISO 639');
    }
    const newLangFilePath = `src/ipa/${langId}.js`;
    return Promise.all([
      fs
        .writeFile(
          newLangFilePath,
          `const ${langId} = {
  label: 'FIXME',
  ipa: {},
};
export default ${langId};${os.EOL}`
        )
        .then(() => newLangFilePath),
      fs.writeFile(
        'src/ipa/languages.js',
        `export { default as ${langId} } from './${langId}.js';${os.EOL}`,
        { flag: 'a' }
      ),
    ]);
  })
  .then(function ([filePath]) {
    childProcess.exec(`git add ${filePath}`);
  })
  .catch(console.error);
