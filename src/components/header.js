import React, { Component } from 'react'
import Home from "../services/home.js"
import Movies from '../services/movies.js'
import TopRated from '../services/TopRated.js'
import NowPlaying from '../services/NowPlaying.js'
import UpComing from '../services/upcoming.js'
import PopularSeries from '../services/Popularseries.js'
import TopRatedSeries from '../services/TopRatedSeries.js'
import Trending from '../services/trending.js'
import NowPlayingSeries from '../services/NowPlayingSeries.js'

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
            </S.DivHeader>
                <S.Nav>
                    <S.Ul>
                        <S.Li>
                            <S.LinkS to="/">Home</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/popular">Filmes Populares</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>                       
                        <S.Li>
                            <S.LinkS to="/rated">Filmes mais votados</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/NowPlaying">Filmes em reprodução</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/UpComing">Próximos Filmes</S.LinkS>
                        </S.Li>                         
                    </S.Ul>
                    <S.Ul>
                        <S.Li>
                            <S.LinkS to="/Trending">Trending</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>   
                        <S.Li>
                            <S.LinkS to="/PopularSeries">Series Populares</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/TopRatedSeries">Series Mais votadas</S.LinkS>
                            <S.Borda></S.Borda>
                        </S.Li>
                        <S.Li>
                            <S.LinkS to="/NowPlayingSeries">Series em reprodução</S.LinkS>
                        </S.Li> 
                    </S.Ul>
                </S.Nav>
                <R.Routes>
                    <R.Route path='/' element={<Home />}/>
                    <R.Route path='/popular' element={<Movies/>} />
                    <R.Route path='/rated' element={<TopRated/>} />
                    <R.Route path='/NowPlaying' element={<NowPlaying/>} />
                    <R.Route path='/UpComing' element={<UpComing/>} />
                    <R.Route path='/PopularSeries' element={<PopularSeries/>} />
                    <R.Route path='/TopRatedSeries' element={<TopRatedSeries/>} />
                    <R.Route path='/Trending' element={<Trending/>} />
                    <R.Route path='/NowPlayingSeries' element={<NowPlayingSeries/>} />
                </R.Routes>
            </R.BrowserRouter>


        )
    }
}
