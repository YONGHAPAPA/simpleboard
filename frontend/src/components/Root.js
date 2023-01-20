import * as React from 'react'
import Header from './Header';
import BoardBody from './BoardBody';
import BoardSideNav from './BoardSideNav';
import BoardPostList from './BoardPostList';
import Layout from './Layout';


import { Outlet, Router, RouterProvider, createRoutesFromElements, createBrowserRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './Footer';


function Root(){

    return(
        <>
            <div className='flex-container'>
                <div className='inline-flex-container'>
                    <div className='main-header2'>a</div>
                    <div className='main-body2'>b</div>
                    <div className='main-footer2'>c</div>
                </div>
                <div className='inline-flex-container'>
                    <div className='main-header2'>d</div>
                    <div className='main-body2'>e</div>
                    <div className='main-footer2'>f</div>
                </div>
                <div className='inline-flex-container'>
                    <div className='main-header2'>h</div>
                    <div className='main-body2'>i</div>
                    <div className='main-footer2'>j</div>
                </div>
            </div>
        </>
    )
}

export default Root;