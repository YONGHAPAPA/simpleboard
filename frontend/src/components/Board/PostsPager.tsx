import * as React from 'react';



function PostsPager({total, dividend, curPage, callBackClick} : {total: number, dividend: number, curPage:number, callBackClick:(pagenum:number)=>void}){
    let totalPageCnt = total / dividend;

    /*
        [M.RMK]2023.03.04
        [...new Array(totalPageCnt)] 와
        [new Array(totalPageCnt)] 의 차이
        위는 배열, 아래는 유사배열형태인것 같네...
    */
    const pager = [...new Array(totalPageCnt)].map((item, i)=> i+1);    //[M.RMK]2023.03.04 map 함수안의 콜백함수 몸통부분의 괄호는 대괄호가 아닌 공백이나 소괄호(), 대괄호{} 차이 체크

    const handlerClick = (pagenum:number)=>{
        //console.log(`Page Click >>> ${pagenum}`)
        callBackClick(pagenum);
    }
    

    return(
        <>
            {pager.map((page)=>{
                return <button key={page} onClick={()=>handlerClick(page)}>{page}</button>
            })}
        </>
    );
}


export default PostsPager;