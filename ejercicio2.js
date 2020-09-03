function run() {
    /* función mcd*/
    let mcd = (a,b) => { return a == b ? a : mcd(Math.min(a,b), Math.abs(a-b)) };
    /* función mcd*/
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("response").innerHTML = "<h1>MCD: </h1>" + mcd(n1, n2);
}