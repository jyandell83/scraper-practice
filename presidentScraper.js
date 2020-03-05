const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then((html) => {
    //success!
    console.log($('tbody > tr > td > b > a', html).length);
    console.log($('tbody > tr > td > b > a', html));
  })
  .catch(function(err){
    //handle error
  });
