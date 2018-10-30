
const fs = require('fs');
const Axios = require('axios');

//var AUTH_TOKEN = 'ubzx24lblowvuxx3';
var AUTH_TOKEN = '4XchKcJeLMhVHlRj2J80nzAm';

Axios.defaults.headers.common['Zotero-API-Key'] = AUTH_TOKEN;

//Axios.get('http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true').then(console.log).catch(console.log);

Axios.put('http://api.zotero.org/groups/2144277/items/FCB5J7RN', {tag:[{tags:'testing via node'}] }).then(console.log).catch(console.log);
