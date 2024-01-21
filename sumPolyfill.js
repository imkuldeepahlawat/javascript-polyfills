Array.prototype.myPolySum = function(){
    if(this.length !== 0){

        let sum = this[0];
    
        for(let i =1; i < arr.length; i++){
            sum += arr[i]
        }

        return sum;
    }
    return null;
}