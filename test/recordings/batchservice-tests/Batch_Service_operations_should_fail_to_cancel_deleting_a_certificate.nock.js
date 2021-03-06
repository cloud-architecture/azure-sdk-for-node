// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)/canceldelete?api-version=2017-09-01.6.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"CertificateBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified certificate has been marked for deletion and is being deleted.\\nRequestId:48678d5a-dfd2-490c-ad48-e4446d07c033\\nTime:2017-10-02T21:52:07.9430194Z\"\r\n  }\r\n}", { 'content-length': '393',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '48678d5a-dfd2-490c-ad48-e4446d07c033',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:52:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)/canceldelete?api-version=2017-09-01.6.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"CertificateBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified certificate has been marked for deletion and is being deleted.\\nRequestId:48678d5a-dfd2-490c-ad48-e4446d07c033\\nTime:2017-10-02T21:52:07.9430194Z\"\r\n  }\r\n}", { 'content-length': '393',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '48678d5a-dfd2-490c-ad48-e4446d07c033',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:52:07 GMT',
  connection: 'close' });
 return result; }]];