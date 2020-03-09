const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then((html) => {
    const urls = [];
    const numberOfPresidents = $('tbody > tr > td > b > a', html).length;
      console.log(numberOfPresidents);
    for (let i = 0; i < numberOfPresidents; i++) {
        urls.push($('tbody > tr > td > b > a', html)[i].attribs.href);
    }
    console.log(urls);
  })
  .catch(function(err){
      console.log(err);
  });
