let receivesAFunction = cb => cb();

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        anything;
    }
}
