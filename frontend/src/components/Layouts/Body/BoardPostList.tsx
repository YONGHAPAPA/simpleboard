import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import type { IPost, IPosts, IBoardPosts } from '../../Models/boards'
import { getPostsByBoardId } from '../../Models/boards'
import PostItem from '../../Board/PostItem';
import PostsPager from '../../Board/PostsPager';




const getPostByPage = async (boardId:number, limit: number, pagenum: number) => {
    let newPosts = await getPostsByBoardId(boardId, limit, pagenum).then((posts)=>{
        return posts
    });

    return newPosts;
}

function BoardPostList(){
    let initBoardPosts: IBoardPosts = [];
    const [boardPostsProps, setBoardPostsProps] = React.useState({
        boardPosts : initBoardPosts, 
        boardId: 0,
        total: 0,
    });

    let { boardId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const clickToPage = (pagenum: number)=>{
        const promise = getPostByPage(boardPostsProps.boardId, limit, pagenum);

        promise.then((newPosts)=>{
            console.log(newPosts);
            setBoardPostsProps({
                "boardId": boardPostsProps.boardId, 
                "boardPosts": newPosts, 
                "total": boardPostsProps.total
            });
        })
    }

    /*
        [M.RMK]2023.03.04 디폴트 limit, pagenum 가져오는 로직개선필요
    */
    const dfltLimit = 5;
    const dfltPgnum = 1;

    let param_limit = searchParams.get("limit");
    let param_pagenum = searchParams.get("pagenum");

    /*
        [M.RMK]2023.03.04 
        Number 함수는 인자가 null 경우 0 으로 리턴하네.
    */
    let limit = Number(searchParams.get("limit"));
    let pagenum = Number(searchParams.get("pagenum"));

    limit = (limit == 0) ? dfltLimit : limit;
    pagenum = (pagenum == 0) ? dfltPgnum : pagenum;    

    //console.log(`boardId > ${boardId}`)

    const loadPosts = async ()=>{
        let posts = await getPostsByBoardId(Number(boardId), limit, pagenum).then((data)=>{
            return data;
        });

        //console.log(posts);

        return posts;
    }

    React.useEffect(()=>{
        loadPosts().then((posts)=>{
            let total = posts.length > 0 ? posts[0].total : 0;
            
            setBoardPostsProps({
                "boardPosts": posts, 
                "boardId": Number(boardId),
                "total": total
            });
        })
    }, [boardId])

    //{console.log(boardPostsProps.total)}

    return(
        <>
            <div className='body-right'>
                <div>{`Board [${boardId}] Post List`}</div>

                
                <div>
                    {boardPostsProps.boardPosts && boardPostsProps.boardPosts.map((data)=>{
                        return <PostItem post={data} />
                    })}
                </div>

                <div><PostsPager total={boardPostsProps.total} dividend={limit} curPage={pagenum} callBackClick={clickToPage} /></div> 
            </div>
        </>
    );
}

export default BoardPostList;