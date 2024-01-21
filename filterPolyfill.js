Array.prototype.myPolFilter = function (callBackFn) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        // check for true values from callback function
        if (callBackFn(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr;
}