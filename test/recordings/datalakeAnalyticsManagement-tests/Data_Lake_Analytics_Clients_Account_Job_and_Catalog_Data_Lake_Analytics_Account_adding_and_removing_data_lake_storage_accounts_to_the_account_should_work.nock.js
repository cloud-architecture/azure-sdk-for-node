// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/DataLakeStoreAccounts/xplattestadls7224?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/dataLakeStoreAccounts/xplattestadls7224\",\"name\":\"xplattestadls7224\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3b38a373-531a-421d-9c71-1be168362110',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '35d64dc9-b2ec-4993-be40-aae544683ff4',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064936Z:35d64dc9-b2ec-4993-be40-aae544683ff4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/DataLakeStoreAccounts/xplattestadls7224?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/dataLakeStoreAccounts/xplattestadls7224\",\"name\":\"xplattestadls7224\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3b38a373-531a-421d-9c71-1be168362110',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '35d64dc9-b2ec-4993-be40-aae544683ff4',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064936Z:35d64dc9-b2ec-4993-be40-aae544683ff4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls7224\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:49:33.3228936Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1054',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2c268fc7-1565-4b1c-9596-de51ec813a74',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'f712a05e-8ee7-400f-acb9-f715bcb8ee4c',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064937Z:f712a05e-8ee7-400f-acb9-f715bcb8ee4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls7224\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:49:33.3228936Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1054',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2c268fc7-1565-4b1c-9596-de51ec813a74',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'f712a05e-8ee7-400f-acb9-f715bcb8ee4c',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064937Z:f712a05e-8ee7-400f-acb9-f715bcb8ee4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/DataLakeStoreAccounts/xplattestadls7224?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'ed549c82-3e62-4409-b2e9-b99fdb8a0ff7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '89a515fd-e979-4139-88dc-53d89d1f4e2f',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064939Z:89a515fd-e979-4139-88dc-53d89d1f4e2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781/DataLakeStoreAccounts/xplattestadls7224?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'ed549c82-3e62-4409-b2e9-b99fdb8a0ff7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '89a515fd-e979-4139-88dc-53d89d1f4e2f',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064939Z:89a515fd-e979-4139-88dc-53d89d1f4e2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:49:33.3228936Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '976',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '755c2e69-40ab-465c-843c-a67289ca8725',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '028b3672-b7f6-4746-957b-4ae9ad35e86c',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064940Z:028b3672-b7f6-4746-957b-4ae9ad35e86c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:49:33.3228936Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '976',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '755c2e69-40ab-465c-843c-a67289ca8725',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '028b3672-b7f6-4746-957b-4ae9ad35e86c',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064940Z:028b3672-b7f6-4746-957b-4ae9ad35e86c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:40 GMT',
  connection: 'close' });
 return result; }]];