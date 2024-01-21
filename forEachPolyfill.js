Array.prototype.myPolyForEach = function(callBackFn) {

    for(let i = 0; i < arguments.length; i++) {
        callBackFn(this[i],i,this);
    }
}
