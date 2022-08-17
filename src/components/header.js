import React, { Component } from 'react'
import Home from "../services/home.js"
import Movies from '../services/movies.js'
import Series from '../services/TopRated.js'
import NowPlaying from '../services/NowPlaying.js'
import UpComing from '../services/upcoming.js'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import * as S from "./style.js"

export default class main extends Component {
    render() {
        return (
            <BrowserRouter>
            <S.GlobalStyle/>
            <S.DivHeader>
                <S.H1>BatataFlix</S.H1>
                <p>Buscar</p>
            </S.DivHeader>
                <S.Nav>
                    <S.Ul>
                        <S.Li>
                            <Link to="/">Home</Link>
                        </S.Li>
                        <Link to="/popular">
                            <S.Li>Popular Movies</S.Li>
                        </Link>                        
                        <S.Li>
                            <Link to="/rated">Rated Movies</Link>
                        </S.Li>
                        <S.Li>
                            <Link to="/NowPlaying">Now Playing Movies</Link>
                        </S.Li>
                        <S.Li>
                            <Link to="/UpComing">UpComing Movies</Link>
                        </S.Li>
                    </S.Ul>
                </S.Nav>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/popular' element={<Movies/>} />
                    <Route path='/rated' element={<Series/>} />
                    <Route path='/NowPlaying' element={<NowPlaying/>} />
                    <Route path='/UpComing' element={<UpComing/>} />
                </Routes>
            </BrowserRouter>


        )
    }
}
