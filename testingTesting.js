

var watson = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: 'WV6m1MJaIQQp',
  password: 'WV6m1MJaIQQp',
  version_date: '2016-10-19'
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});


var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: '{username}',
  password: '{password}',
  version_date: '2016-10-20'
});

var params = {
  content_items: require('./profile.json').contentItems,
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

personality_insights.profile(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);