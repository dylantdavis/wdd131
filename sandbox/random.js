console.log("Hello World");

function double(num) {
    return num * 2;
}

const double2 = function () {
    return num * 2;
}

function modifyList(list, callback) {
    list.forEach(callback)
}

const double3 = (num) => { return num * 2 };