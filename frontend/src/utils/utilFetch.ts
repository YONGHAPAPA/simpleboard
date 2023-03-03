import { sleep } from './utilExtra'

export async function doFetchJSON(url:string, params: URLSearchParams, mark:string){
    // console.log("doFetchJSON....");
    // const result = await sleep(2000, 'doFetchJson', true);
    // console.log(`sleep result ${result}`);
    const errMessage = `[Error]doFetchJSON :: ${mark} :: ${url}`;

    //console.log(url);
    const fetchUrl = `${origin}/${url}`;

    let fetchedReulst = fetch(fetchUrl)
    .then((response)=>{

        console.log(response);
        // console.log(response.status);
        // console.log(response.ok);

        if(response.ok){
            return response.json(); //서버와 통신시 이상없이 데이터를 가져오면 JSON DATA를 다음 .then 에서 읽을수 있도록 json() promise 객체를 넘겨준다. 
        } else {
            if(response.status == 404){
                //[M.RMK]Custom Exception 처리방법, 리턴 받는 쪽도 규약이 필요할것
                throw new Error(`[404 Error]${response.url}`)
            } else {
                throw new Error(errMessage)
            }
        }
    })
    .then((json)=>{
        return json; //fetch를 이용한 서버와 통신 성공시 넘어온 json promise 는 바로 사용안되므로 다음 .then 에서 리턴처리해줘야함 (참조:wooooooak.github.io/javascript/2018/11/25/fetch&json()/)
    })
    .catch((error)=>{
        console.log(errMessage + " :: " + error);
        return error;
    })

    return fetchedReulst;
}

