home = {}; 


home.define_array = function define_array() {
    array = ["A", 2, true, NaN, null, typeof(3)];
    return array;
}

home.sort_array = function sort_array(input) {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input.length - 1; j++) {
            if (input[j] > input[j + 1]) {
                temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }
    return input
}

home.define_global = function define_global() {
    window.global_var = "this is a global variable";
}

home.define_object = function define_object() {
    obj = {}
    obj.a = 1;
    obj.b = 2;
    obj.c = 3;
    return obj;
}

home.debug_secret = function debug_secret() {
    return "SGVsbG8gV29ybGQh"
}