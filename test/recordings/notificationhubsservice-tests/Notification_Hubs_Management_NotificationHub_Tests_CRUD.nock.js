// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '111c36dc-4047-4c69-acd5-301072ff1fc2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01', '*')
  .reply(201, "{\"id\":null,\"name\":null,\"type\":null,\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '138',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1af72b8a-ef59-4273-9bea-8a5b4db68c0b_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd33161be-87df-44cb-9f16-41219f1bafa6',
  'x-ms-routing-request-id': 'WESTUS:20160517T180500Z:d33161be-87df-44cb-9f16-41219f1bafa6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01', '*')
  .reply(201, "{\"id\":null,\"name\":null,\"type\":null,\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '138',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1af72b8a-ef59-4273-9bea-8a5b4db68c0b_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd33161be-87df-44cb-9f16-41219f1bafa6',
  'x-ms-routing-request-id': 'WESTUS:20160517T180500Z:d33161be-87df-44cb-9f16-41219f1bafa6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647\",\"name\":\"testHub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e2178d52-eb34-4900-a73d-87b1e1a233d5_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e3c11b6f-25bc-4262-8668-33054b955ebd',
  'x-ms-routing-request-id': 'WESTUS:20160517T180501Z:e3c11b6f-25bc-4262-8668-33054b955ebd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647\",\"name\":\"testHub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e2178d52-eb34-4900-a73d-87b1e1a233d5_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e3c11b6f-25bc-4262-8668-33054b955ebd',
  'x-ms-routing-request-id': 'WESTUS:20160517T180501Z:e3c11b6f-25bc-4262-8668-33054b955ebd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs?api-version=2014-09-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testhub3647\",\"name\":\"testhub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f685005-8fb2-4aeb-870a-baeffccffab9_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6df246ec-0761-4d66-b222-91594aa0ff1c',
  'x-ms-routing-request-id': 'WESTUS:20160517T180503Z:6df246ec-0761-4d66-b222-91594aa0ff1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs?api-version=2014-09-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testhub3647\",\"name\":\"testhub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f685005-8fb2-4aeb-870a-baeffccffab9_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6df246ec-0761-4d66-b222-91594aa0ff1c',
  'x-ms-routing-request-id': 'WESTUS:20160517T180503Z:6df246ec-0761-4d66-b222-91594aa0ff1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/pnsCredentials?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/pnsCredentials\",\"name\":\"testHub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/pnsCredentials\",\"location\":null,\"tags\":null,\"properties\":{}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '340',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db010d56-a99c-437d-9cd3-d7a74e36babc_M3_M3',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5b8d4bce-6883-4b66-98ca-c725379908fe',
  'x-ms-routing-request-id': 'WESTUS:20160517T180504Z:5b8d4bce-6883-4b66-98ca-c725379908fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/pnsCredentials?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/pnsCredentials\",\"name\":\"testHub3647\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/pnsCredentials\",\"location\":null,\"tags\":null,\"properties\":{}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '340',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db010d56-a99c-437d-9cd3-d7a74e36babc_M3_M3',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5b8d4bce-6883-4b66-98ca-c725379908fe',
  'x-ms-routing-request-id': 'WESTUS:20160517T180504Z:5b8d4bce-6883-4b66-98ca-c725379908fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed893a01-c09f-4991-bbc9-8bba5ca8cd4c_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '32aefc5d-a17a-4b0b-a2aa-4f2b1a6a888a',
  'x-ms-routing-request-id': 'WESTUS:20160517T180508Z:32aefc5d-a17a-4b0b-a2aa-4f2b1a6a888a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed893a01-c09f-4991-bbc9-8bba5ca8cd4c_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '32aefc5d-a17a-4b0b-a2aa-4f2b1a6a888a',
  'x-ms-routing-request-id': 'WESTUS:20160517T180508Z:32aefc5d-a17a-4b0b-a2aa-4f2b1a6a888a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7030a6b7-3c83-40a6-8d20-434dd445386d_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd3c880be-e2f7-4b6a-b690-ee699451f522',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180510Z:d3c880be-e2f7-4b6a-b690-ee699451f522',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01')
  .reply(200, "{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7030a6b7-3c83-40a6-8d20-434dd445386d_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd3c880be-e2f7-4b6a-b690-ee699451f522',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180510Z:d3c880be-e2f7-4b6a-b690-ee699451f522',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules?api-version=2014-09-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/DefaultListenSharedAccessSignature\",\"name\":\"DefaultListenSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"DefaultListenSharedAccessSignature\",\"primaryKey\":\"RFRE6iWlFKpD5DCGi2BboGsfFH1BWAL71EXMnywIaKM=\",\"secondaryKey\":\"xI4OE/HeDkB7/X+0D4Id65uSy3/g1amp110IrXMcwhI=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\"],\"createdTime\":\"2016-05-17T18:04:59.91135Z\",\"modifiedTime\":\"2016-05-17T18:04:59.91135Z\"}},{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/DefaultFullSharedAccessSignature\",\"name\":\"DefaultFullSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"DefaultFullSharedAccessSignature\",\"primaryKey\":\"o5AR5DtPLUSyroOHKTfO1vhdxe0SPjq3OYG5qCXfWQc=\",\"secondaryKey\":\"v7FvNHFXNnPzZbA5AunUiPcrnHU24YuvMnVuS0dgR04=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Manage\",\"Send\"],\"createdTime\":\"2016-05-17T18:04:59.91135Z\",\"modifiedTime\":\"2016-05-17T18:04:59.91135Z\"}},{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2178',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b33643ec-4787-4f8a-a23b-1c0c87c62327_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dabe19b5-4208-4296-9157-869a1413b6c6',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180512Z:dabe19b5-4208-4296-9157-869a1413b6c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules?api-version=2014-09-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/DefaultListenSharedAccessSignature\",\"name\":\"DefaultListenSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"DefaultListenSharedAccessSignature\",\"primaryKey\":\"RFRE6iWlFKpD5DCGi2BboGsfFH1BWAL71EXMnywIaKM=\",\"secondaryKey\":\"xI4OE/HeDkB7/X+0D4Id65uSy3/g1amp110IrXMcwhI=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\"],\"createdTime\":\"2016-05-17T18:04:59.91135Z\",\"modifiedTime\":\"2016-05-17T18:04:59.91135Z\"}},{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/DefaultFullSharedAccessSignature\",\"name\":\"DefaultFullSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"DefaultFullSharedAccessSignature\",\"primaryKey\":\"o5AR5DtPLUSyroOHKTfO1vhdxe0SPjq3OYG5qCXfWQc=\",\"secondaryKey\":\"v7FvNHFXNnPzZbA5AunUiPcrnHU24YuvMnVuS0dgR04=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Manage\",\"Send\"],\"createdTime\":\"2016-05-17T18:04:59.91135Z\",\"modifiedTime\":\"2016-05-17T18:04:59.91135Z\"}},{\"id\":\"/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550\",\"name\":\"testAuth2550\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"keyName\":\"testAuth2550\",\"primaryKey\":\"IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryKey\":\"aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"claimType\":\"SharedAccessKey\",\"claimValue\":\"None\",\"rights\":[\"Listen\",\"Send\"],\"createdTime\":\"2016-05-17T18:05:07.6877929Z\",\"modifiedTime\":\"2016-05-17T18:05:07.6877929Z\"}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2178',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b33643ec-4787-4f8a-a23b-1c0c87c62327_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dabe19b5-4208-4296-9157-869a1413b6c6',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180512Z:dabe19b5-4208-4296-9157-869a1413b6c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550/listKeys?api-version=2014-09-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns5747.servicebus.windows.net/;SharedAccessKeyName=testAuth2550;SharedAccessKey=IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryConnectionString\":\"Endpoint=sb://testns5747.servicebus.windows.net/;SharedAccessKeyName=testAuth2550;SharedAccessKey=aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"primaryKey\":null,\"secondaryKey\":null,\"keyName\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '30930d96-4683-4d16-b65f-565b80e3bb10_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c244d9d5-9533-4e06-850c-bea83fa5ad1b',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180513Z:c244d9d5-9533-4e06-850c-bea83fa5ad1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550/listKeys?api-version=2014-09-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns5747.servicebus.windows.net/;SharedAccessKeyName=testAuth2550;SharedAccessKey=IR4qH02MB2yXjlekt5fhlgMR9YAoMsXHTkUqarUkATU=\",\"secondaryConnectionString\":\"Endpoint=sb://testns5747.servicebus.windows.net/;SharedAccessKeyName=testAuth2550;SharedAccessKey=aVpieJX6Ot7PUnC9N4wUAWbpB6wfX+s893SwXW9WCeQ=\",\"primaryKey\":null,\"secondaryKey\":null,\"keyName\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '30930d96-4683-4d16-b65f-565b80e3bb10_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c244d9d5-9533-4e06-850c-bea83fa5ad1b',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180513Z:c244d9d5-9533-4e06-850c-bea83fa5ad1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '2eb5f36b-87d2-4258-a5a1-bff0140c1455_M0_M0',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '30292018-a1b6-4e0f-b564-48469600dd1a',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180520Z:30292018-a1b6-4e0f-b564-48469600dd1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647/AuthorizationRules/testAuth2550?api-version=2014-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '2eb5f36b-87d2-4258-a5a1-bff0140c1455_M0_M0',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '30292018-a1b6-4e0f-b564-48469600dd1a',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180520Z:30292018-a1b6-4e0f-b564-48469600dd1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '7250b79e-4ccb-4bff-a77f-8803af43d62b_M0_M0',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c1ba1d56-bb45-4e3d-873d-d5930c75eb81',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180522Z:c1ba1d56-bb45-4e3d-873d-d5930c75eb81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/111c36dc-4047-4c69-acd5-301072ff1fc2/resourceGroups/nodeTestGroup4429/providers/Microsoft.NotificationHubs/namespaces/testNS5747/notificationHubs/testHub3647?api-version=2014-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '7250b79e-4ccb-4bff-a77f-8803af43d62b_M0_M0',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c1ba1d56-bb45-4e3d-873d-d5930c75eb81',
  'x-ms-routing-request-id': 'CENTRALUS:20160517T180522Z:c1ba1d56-bb45-4e3d-873d-d5930c75eb81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 18:05:22 GMT',
  connection: 'close' });
 return result; }]];