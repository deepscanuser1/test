function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
    var x = -1;
    if (x = -1) console.log('Error!', x);
}

function CWE_482_665() { // UNUSED_EXPR
    this.foo;
}

var a = 0;
var b = 0;
