
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





/*
    [M.RMK]2023.02.22
    중첩배열 SCAN해서 원하는 INDEX 의 값을 찾아서 변환처리
*/
const checkSub = (item:any, index:number, name:string)=>{

if(item.id == index){
    Object.assign(item, {"name": name});
    return {...item};
}

if(item.sub){
    item.sub.map((item:any)=>{
        return {...checkSub(item, index, name)};
    })
}

return item;
}

const list = [
    {
        id:1, 
        name:"1ST"
    }, {
        id:2, 
        name:"SE",
        sub:[{
            id:3, 
            name:"SE-1"
        }, {
            id:4, 
            name:"SE-2",
            sub:[
                {
                    id:6, 
                    name:"SE-2-1"
                }, 
                {
                    id:7, 
                    name:"SE-2-2"
                }
            ]
        }]
    }, {
        id:5, 
        name:"3RD"
    }
];

let newList = list.map((item, index, arg)=>{
let findItem = checkSub(item, 7, 'NEW NAME');
return item;
})

