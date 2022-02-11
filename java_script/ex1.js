var promise = new Promise(function(resovle, reject){
    setTimeout(()=> resovle("Hello world!"), 5000);
   
});
promise.then(function(){
    console.log("Successful", promise);
}).catch(function(){
    console("Fail",promise);
})