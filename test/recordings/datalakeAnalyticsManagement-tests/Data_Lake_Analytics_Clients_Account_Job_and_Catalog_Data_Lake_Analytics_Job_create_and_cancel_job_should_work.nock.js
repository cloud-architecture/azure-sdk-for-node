// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla3781.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"9f151b51-2e1b-4f73-8389-8b07bb360c8d\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-01-22T06:50:53.8873016+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-01-22T06:50:53.8873016+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ebf14730-cd39-48f3-80ef-89bcbc15c025',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3781.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"9f151b51-2e1b-4f73-8389-8b07bb360c8d\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-01-22T06:50:53.8873016+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-01-22T06:50:53.8873016+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ebf14730-cd39-48f3-80ef-89bcbc15c025',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla3781.azuredatalakeanalytics.net:443')
  .post('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'ade6c5e0-8287-435a-b944-99cd3eaeaa79',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3781.azuredatalakeanalytics.net:443')
  .post('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'ade6c5e0-8287-435a-b944-99cd3eaeaa79',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla3781.azuredatalakeanalytics.net:443')
  .get('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"9f151b51-2e1b-4f73-8389-8b07bb360c8d\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-01-22T06:50:53.8873016+00:00\",\"endTime\":\"2017-01-22T06:50:55.293536+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrptest2@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-01-22T06:50:53.8873016+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-01-22T06:50:54.3404251+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-01-22T06:50:55.293536+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT0.9531109S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f05930e-8666-464c-876e-e3999f1b9831',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3781.azuredatalakeanalytics.net:443')
  .get('/Jobs/9f151b51-2e1b-4f73-8389-8b07bb360c8d?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"9f151b51-2e1b-4f73-8389-8b07bb360c8d\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-01-22T06:50:53.8873016+00:00\",\"endTime\":\"2017-01-22T06:50:55.293536+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrptest2@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-01-22T06:50:53.8873016+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-01-22T06:50:54.3404251+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-01-22T06:50:55.293536+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls5550.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/01/22/06/50/9f151b51-2e1b-4f73-8389-8b07bb360c8d/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT0.9531109S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f05930e-8666-464c-876e-e3999f1b9831',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:50:56 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['9f151b51-2e1b-4f73-8389-8b07bb360c8d'];};