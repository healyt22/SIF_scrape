// scrape_oddshark.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = 'oddshark.html'

page.open('http://www.oddsshark.com/ncaaf/scores', function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});
