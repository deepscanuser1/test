

function CWE_482_665() { // UNUSED_EXPR
    this.foo;
}

// Example 1
function foo() {
    var obj == {};
    var y = obj.x; // NULL_POINTER alarm
}
 
// Example 2
if (x == null) { // (x == null) should be modified to (x != null).
    y = x.a; // NULL_POINTER alarm: x is undefined or null but is property-accessed.
}
 
// Example 3
y = x || x.a; // NULL_POINTER alarm: x has a falsy value but is property-accessed.
 
// Example 1
function foo() {
    var obj;
    var y = obj.x; // NULL_POINTER alarm
}
 
// Example 2
if (x == null) { // (x == null) should be modified to (x != null).
    y = x.a; // NULL_POINTER alarm: x is undefined or null but is property-accessed.
}
