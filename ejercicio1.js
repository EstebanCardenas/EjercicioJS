function secret(array, funct, key) {
    let ret = []
    array.forEach( el => ret[ret.length] = funct(el, key) );
    return ret;
}

function encrypt(el, key) {
    return el + key;
}

function decrypt(el, key) {
    return el - key;
}

function run() {
    let arr = document.getElementById("array").value.split(",").map(el => +el);
    let cipher = document.getElementById("cipher").value;
    let ciph = cipher == "encrypt" ? encrypt : decrypt;
    let key = parseInt(document.getElementById("key").value);
    document.getElementById("demo").innerHTML = "<h1>Resultado:</h1>" + secret(arr, ciph, key);
}