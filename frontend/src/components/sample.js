// Promise 샘플

export function sleep(interval){

    let isSuccess = true;

    let promise = new Promise((resolve, reject)=>{
        if(isSuccess){
            setTimeout(()=>{resolve("success")}, interval)
        } else {
            setTimeout(()=>{reject("failed")}, interval);
        }
    });

    // promise.then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     console.log(err);
    // })

    return promise;
}


