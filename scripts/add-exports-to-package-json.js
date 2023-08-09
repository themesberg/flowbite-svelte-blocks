/*
This script reads the files in the dist directory and creates a new exports object in the package.json file with the appropriate svelte and types paths for each Svelte component file found in the dist directory, except for index.js and index.d.ts.

The resulting exports object is structured as follows:
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "svelte": "./dist/index.js"
  },
  "./<component-name>.svelte": {
    "types": "./dist/<component-name>.svelte.d.ts",
    "svelte": "./dist/<component-name>.svelte"
  },
  ...
}

where <component-name> represents the name of each Svelte component file found in the dist directory.
*/

// Import the 'fs' module to access the file system
import fs from 'fs';

// Read the list of files in the "./dist" directory and filter out non-.svelte files.
const files = fs.readdirSync('./dist').filter((file) => file.endsWith('.svelte'));

// Create the initial "exports" object with an entry for "./dist/index.*".
const exports = {
  '.': {
    types: './dist/index.d.ts',
    svelte: './dist/index.js'
  }
};

// Iterate over each ".svelte" file in the "./dist" directory.
// For each file, add an entry to the "exports" object with the svelte and types paths updated.
files.forEach((file) => {
  if (file !== 'index.svelte') {
    const name = file.replace('.svelte', '');
    exports[`./${name}.svelte`] = {
      types: `./dist/${name}.svelte.d.ts`,
      svelte: `./dist/${name}.svelte`
    };
  } else {
    exports[`./${file}`] = `./dist/${file}`;
  }
});

// Read the package.json file, update the "exports" field, and write the file back out.
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
packageJson.exports = exports;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));