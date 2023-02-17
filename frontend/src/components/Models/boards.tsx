import React from 'react';
import { doFetchJSON } from '../../utils/utilFetch';


export interface IBoard {
    id: Number, 
    boardName: String, 
    boardType: String, 
    parentBoard: Number, 
    description: String, 
    seq: Number, 
    level: Number, 
    idPath: String, 
    boardPath: String, 
    //length:Number,
}



export interface IBoards extends Array<IBoard>{}


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
    }

    boardList.push(initBoard);
    //console.log(boardList);
    return boardList;
}


export async function getAllBoardList(): Promise<IBoard[]>{
    const jsonData = await doFetchJSON("board/getAllBoardList", "getAllBoardList");
    //jsonData 는 유사배열(Array-like object) 이므로 forEach(), map() 등 함수를 바로 사용할수 없음
    //Array.from 으로 감싸서 루프처리해줌(length 속성이 있어야 유사배열임)
    //또는 열거연산자 '...' 로도 사용가능
    //참조 : stackdiary.com/guides/typeerror-foreach-is-not-a-function/

    // Array.from(jsonData).forEach((item)=>{
    //     console.log(item);
    // });
    return [...jsonData];
}


