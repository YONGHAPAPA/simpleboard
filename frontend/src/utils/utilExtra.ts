
export async function sleep(interval:number, mark?:string, isResolve?:boolean){

    console.log(`sleep [${mark}] : ${interval}`);
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isResolve){
                resolve("resolve")
            } else {
                reject("reject")
            }
        }, interval)
    });
    
    return promise;
}