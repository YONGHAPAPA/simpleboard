import * as React from 'react';
import { useParams } from 'react-router-dom';

function BoardPostList(){

    let { id } = useParams();
     
    console.log(`boardId : ${id}`)

    
    return(
        <>
            <div className='body-right'>
                <div>{`Board [${id}] Post List`}</div>
                <div></div>
            </div>
        </>
    );
}

export default BoardPostList;