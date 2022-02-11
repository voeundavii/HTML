async function promise(){
    return "Hello world! in Exercise3";
}
promise().then(function(){
    console.log(promise())
})