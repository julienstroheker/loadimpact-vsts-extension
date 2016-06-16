/// <reference path="../definitions/vsts-task-lib.d.ts" />
/// <reference path="../definitions/isomorphic-fetch.d.ts" />

import path = require('path');
require('isomorphic-fetch');
import tl = require('vsts-task-lib/task');
var onError = function(errMsg) {
    tl.error(errMsg);
    tl.exit(1);
}

var apiToken = tl.getInput('apiToken', true);
tl.debug('apiToken: ' + apiToken);
var testID = tl.getInput('testID', true);
tl.debug('test Name: ' + testID);

var password = ''
var auth = 'Basic ' + new Buffer(apiToken + ':' + password).toString('base64');

fetch('https://api.loadimpact.com/v2/test-configs', {
	method: 'get',
	headers:{
		'Authorization': auth
	}
}).then(function(response) {
	response.json().then(r => tableScenario(r))
}).catch(function(err) {
	// Error :(
});

function tableScenario(json){
	var table = json.map( i => ({id: i.id, name: i.name}))
	tl.debug('Tests Available: ' + table);
	var id = table.find(e => e.name === testID).id
	fetch('https://api.loadimpact.com/v2/test-configs/'+ id +'/start', {
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		headers: {
			'Authorization': auth
		}
	}).then(function() { /* handle response */ });
	tl.debug('Test ' + testID + 'Started');
}
