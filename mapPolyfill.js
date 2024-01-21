
Array.prototype.myPolMap = function (callBackFn) {
    var newArr = []
    // call the callback function on every itration
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callBackFn(this[i], i, this))
    }
    return newArr;
}