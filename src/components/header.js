import React, { Component } from 'react'
import Home from "../services/home.js"
import Movies from '../services/movies.js'
import Series from '../services/TopRated.js'
import NowPlaying from '../services/NowPlaying.js'
import UpComing from '../services/upcoming.js'
import Lupa from "../imgs/lupa.png"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as R from "react-router-dom"
import * as S from "./style.js"

export default class main extends Component {
    render() {
        return (
            <R.BrowserRouter>
            <S.GlobalStyle/>
            <S.DivHeader>
                <S.H1>BatataFlix</S.H1>
                <S.Busca>
                    <S.Lupa src={Lupa} alt="aaaa" />
                    <input type="text" />
                </S.Busca>
            </S.DivHeader>
                <S.Nav>
                    <S.Ul>
                        <S.Li>
                            <S.LinkS to="/">Home</S.LinkS>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/popular">Popular Movies</S.LinkS>
                        </S.Li>                       
                        <S.Li>
                            <S.LinkS to="/rated">Rated Movies</S.LinkS>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/NowPlaying">Now Playing Movies</S.LinkS>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/UpComing">UpComing Movies</S.LinkS>
                        </S.Li>
                    </S.Ul>
                </S.Nav>
                <R.Routes>
                    <R.Route path='/' element={<Home />}/>
                    <R.Route path='/popular' element={<Movies/>} />
                    <R.Route path='/rated' element={<Series/>} />
                    <R.Route path='/NowPlaying' element={<NowPlaying/>} />
                    <R.Route path='/UpComing' element={<UpComing/>} />
                </R.Routes>
            </R.BrowserRouter>


        )
    }
}
