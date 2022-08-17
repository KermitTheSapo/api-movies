import React, { Component } from "react";
import axios from "axios";
import * as S from "../components/style.js"

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/now_playing?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1"
})

export default class NowPlaying extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta)
        const allFilmes = resposta.data.results.map((item) => {
            return {
                // nome: item.original_title,
                // sinopse: item.overview,
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        this.setState({
            movies: allFilmes
        })
    }

    render() {
        return (
            <div>
                <S.GlobalStyle />
                {this.state.movies.map((item, index) => (
                    <div key={index}>
                        <S.FilmesUl>
                            <S.Poster src={item.image} alt="" />
                            <S.TituloDescricao>
                                <S.Titulo>{item.title}</S.Titulo>
                                <S.Descricao>{`Sinopse: ${item.overview}`}</S.Descricao>                        
                            </S.TituloDescricao>
                        </S.FilmesUl>
                    </div>

                ))}
            </div>
        )
    }
}