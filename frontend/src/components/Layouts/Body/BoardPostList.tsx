import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getPostsByBoardId } from '../../Models/boards'

function BoardPostList(){

    let { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    //console.log(id);
    let limit = searchParams.get("limit")
    let pagenum = searchParams.get("pagenum");

    console.log(limit);
    console.log(pagenum);


    const loadPosts = async ()=>{

        console.log("loadPosts");

        let posts = await getPostsByBoardId(id, limit, pagenum).then((data)=>{
            return data;
        });

        return posts;
    }
    

    React.useEffect(()=>{
        loadPosts().then((posts)=>{
            console.log(posts);
        })
    }, [id])


    
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