function MyObject(){}

MyObject.prototype.concated = '';
MyObject.prototype.incremented = 0;

function MyTestService(){}

MyTestService.prototype.test3 = function(strArg, intArg){
    var ret = new MyObject();
    ret.concated = strArg + '[' + intArg + ']';
    ret.incremented = intArg + 1;
    return ret;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());

var test3operation = soapService.getOperation('test3');
test3operation.setOutputType(MyObject, 'MyObject');
test3operation.setInputType('intArg', { type: 'number' });

soapServer.listen(1337, '127.0.0.1');
