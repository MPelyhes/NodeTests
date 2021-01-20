const franc = require('franc');
const langs = require('langs');
const colors = require('colors')
const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log('Sorry, could not figure it out! Try again with more sample text.'.red)
} else {
  const language = (langs.where('3', langCode).name);
  console.log(`Our best guess is: ${language}`.green)
}
