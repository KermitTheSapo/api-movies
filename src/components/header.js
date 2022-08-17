import React, { Component } from 'react'
import Home from "../services/home.js"
import Movies from '../services/movies.js'
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
                        <Link to="/movies">
                            <S.Li>Popular Movies</S.Li>
                        </Link>
                        
                        <S.Li>
                            <Link to="/series">Series</Link>
                        </S.Li>
                    </S.Ul>
                </S.Nav>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/movies' element={<Movies/>} />
                </Routes>
            </BrowserRouter>


        )
    }
}
