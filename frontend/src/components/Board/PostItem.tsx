import * as React from 'react';
import type { IPost } from '../Models/boards'

function PostItem({post} : {post: IPost}){
    return (
        <div>
            <span>ID : {post.id}&nbsp;</span>
            <span>TITLE : {post.title}&nbsp;</span>
            <span>CONTENT : {post.content}</span>
        </div>
    );
}


export default PostItem;