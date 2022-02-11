const messages = ['message1', 'message2', 'message3', 'message4',"message5"];

let promise1 = new Promise(function(resovle,reject){
    setTimeout(() => {
        const randomIndex1 = Math.round(Math.random()*messages.length);
        resovle(messages[randomIndex1]);
    }, 2000);
})
promise1.then(function(result1){
    console.log(result1);
    let promise2 = new Promise(function(resovle,reject){
        setTimeout(() => {
            const randomIndex2 = Math.round(Math.random()*messages.length);
            resovle(messages[randomIndex2]);
        }, 2000);
    });
    promise2.then(function(result2){
        console.log(result2)
        let promise3 = new Promise(function(resovle,reject){
            setTimeout(()=>{
                const randomIndex3 = Math.round(Math.random()*messages.length);
                resovle(messages[randomIndex3]);
            },2000);
        });
        promise3.then(function(result3){
            console.log(result3)
            let promise4 = new Promise(function(resovle,reject){
                setTimeout(()=>{
                    const randomIndex4 = Math.round(Math.random()*messages.length);
                    resovle(messages[randomIndex4]);
                },2000);
            });
            promise4.then(function(result4){
                console.log(result4);
                let promise5 = new Promise(function(resovle,reject){
                    setTimeout(()=>{
                        const randomIndex5 = Math.round(Math.random()*messages.length);
                        resovle(messages[randomIndex5]);
                    },2000);
                })
                promise5.then(function(result5){
                    console.log(result5)
                }).then(function(){
                    console.log("All tasks are ready.")
                })

            })
        });
    });

});