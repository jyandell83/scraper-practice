const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.ndbc.noaa.gov/station_page.php?station=46218';

rp(url)
  .then((html) => {
    console.log($('table', html));
  })
  .catch(function(err){
      console.log(err);
  });
