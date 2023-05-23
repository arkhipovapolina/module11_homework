function getsum(x) {
    return function(y) {
        return x + y;
    };
}

console.log(getsum(5)(2));