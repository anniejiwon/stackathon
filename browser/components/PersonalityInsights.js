'use strict';

var PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');
var fs = require('fs');

var personality_insights = new PersonalityInsightsV2({
    url: "https://gateway.watsonplatform.net/personality-insights/api",
    username: '83acba1f-9461-4c89-b6d0-deab31578b5b',
    password: 'vZFSqxhbugIa'
});

/*
 * English example:
 *   'text' parameter contains the input text.
 */
personality_insights.profile({
  text: answers.join('\n')},
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});



/*
 * CSV output example:
 * https://www.ibm.com/watson/developercloud/doc/personality-insights/output.shtml#outputCSV
 */
personality_insights.profile({
    text: 'Enter more than 100 unique words here...',
    csv: true,
    csv_headers: true
  }).pipe(fs.createWriteStream('./output.csv'));