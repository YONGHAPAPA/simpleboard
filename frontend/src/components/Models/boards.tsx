import React from 'react';
import { doFetchJSON } from '../../utils/utilFetch';


export interface IBoard {
    id: number, 
    idPath: string, 
    level: number, 
    seq: number, 
    boardName: string, 
    boardPath: string,
    boardType: string, 
    parentBoard: number, 
    description: string, 
    creId: string,
    creDt: Date,
    updId: string,
    updDt: Date, 
}

export interface IBoards extends Array<IBoard>{}

export interface IPost {
    id: number, 
    title: string, 
    content: string, 
    postType: string, 
    deleteFlg: string, 
    creId: string, 
    creDt: Date, 
    updId: string, 
    updDt: Date,
}

export interface IPosts extends Array<IPost>{}

export interface IBoardPost extends IPost{
    primaryFlg: string,
    total: number,    
}

export interface IBoardPosts extends Array<IBoardPost>{};

export function initBoardList(): IBoards {

    let boardList:IBoards = new Array<IBoard>();
    const initBoard: IBoard = {
        id: 0, 
        boardName: 'loading board...', 
        boardType: '', 
        parentBoard: 0, 
        description: '', 
        seq: 0, 
        level: 0, 
        idPath: '', 
        boardPath: '',
        creId:'', 
        creDt:new Date(),
        updId:'',
        updDt: new Date(), 
    }

    boardList.push(initBoard);
    //console.log(boardList);
    return boardList;
}



export async function getAllBoardList(): Promise<IBoards>{
    const params = new URLSearchParams();
    const boards = await doFetchJSON("board/getAllBoards", params, "getAllBoards");
    
    //[M.RMK:2023.02.01] jsonData 는 유사배열(Array-like object) 이므로 forEach(), map() 등 함수를 바로 사용할수 없음
    //Array.from 으로 감싸서 루프처리해줌(length 속성이 있어야 유사배열임)
    //또는 열거연산자 '...' 로도 사용가능
    //참조 : stackdiary.com/guides/typeerror-foreach-is-not-a-function/
    //return [...jsonData];
    //return [...boards];
    return boards;
}

export async function getPostsByBoardId(id:number|undefined, limit:number|null, pagenum:number|null): Promise<IBoardPosts> {

    const params = new URLSearchParams(`limit=${limit}&pagenum=${pagenum}`);
    const posts = await doFetchJSON(`board/getPostsByBoardId/${id}`, params, "getPostByBoardId");
    //return [...posts]
    return posts;
}


