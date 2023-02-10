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
    boardPath: String
}

export interface IBoardNavItem {
    id: Number, 
    boardName: String, 
    boardType: String, 
    parentBoard: Number, 
    description: String, 
    seq: Number, 
    level: Number, 
    idPath: String, 
    boardPath: String
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
        boardPath: ''
    }

    boardList.push(initBoard);
    console.log(boardList);
    return boardList;
}

export async function getAllBoardList(){
    const boardAllList = await doFetchJSON("board/getAllBoardList", "getAllBoardList");
    return boardAllList;
}


