const franc = require('franc');
const langs = require('langs');

const francResult = (franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট'));
console.log(langs.where('3', francResult).name);