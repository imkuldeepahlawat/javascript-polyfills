Array.prototype.myPolReduce = function (callBackFn, initValue) {
    var accumulator = initValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callBackFn.call(undefined, accumulator, this[i], i, this)
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}