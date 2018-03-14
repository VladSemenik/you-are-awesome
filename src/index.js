// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName;};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
      enumerable: false,
      value: 'value'
});
    return propertyName;
};
const createProtoMagicObject = () => {
    var result = () => {}, circle = new Function();
    result.__proto__ = circle;
    result.prototype = result.__proto__;
    return result;
};
var result =0;
const incrementor = () => {
    result++;
    return incrementor;
};
incrementor.__proto__.valueOf = () => {
    return result;
}
var i = 0;
const asyncIncrementor = () => {
    var promise1 = new Promise(function(resultf) { //Promise
        resultf(++i);
    })
    return promise1;
};
const createIncrementer = () => {
    
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    var promise1 = new Promise(function(resolve) {
        setTimeout(function(){
            resolve(param);
        }, 1001)
    })
    return promise1;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort(function(a, b) {
        return a.value - b.value;
    });
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;