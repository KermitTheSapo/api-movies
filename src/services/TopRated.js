import React, { Component } from "react";
import axios from "axios";
import * as S from "../components/style.js"
import Youtube from "../imgs/youtube.png"


const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1"
})

export default class TopRated extends Component {
    state = {
        movies: [],
        FilterMovies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const resposta = await FilmesApi.get()
        const allFilmes = resposta.data.results.map((item) => {
            return {
                // nome: item.original_title,
                // sinopse: item.overview,
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                video: `https://www.youtube.com/results?search_query=Trailer+${item.title}`
            }
        })
        this.setState({
            movies: allFilmes,
            FilterMovies: allFilmes
        })
    }
    handleChange = (event) =>{
        const ListaFiltrada = this.state.movies.filter((item) => {
            if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return  true
            } else if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            } else {
                return ""
            }
        })
        this.setState({
            FilterMovies:ListaFiltrada
        })
    }

    render() {
        return (
            <div>
                <S.GlobalStyle />
                <S.Introducao>
                    <S.Principal>Filmes Mais votados</S.Principal>
                    <S.Paragrafo>A seguir um top 20 dos filmes mais votados</S.Paragrafo>
                    <S.Pesquisa placeholder="Procure pelo seu filme" type="text" onChange={this.handleChange} autoFocus/>
                </S.Introducao>
                {this.state.FilterMovies.map((item, index) => (
                    <div key={index}>
                        <S.FilmesUl>
                            <S.Poster src={item.image} alt="" />
                            <S.TituloDescricao>
                                <S.Titulo>{item.title}</S.Titulo>
                                <S.DivTituloOriginal>
                                    <h3>Titulo Original: </h3>
                                    <S.TituloOriginal>{item.original_title}</S.TituloOriginal>
                                </S.DivTituloOriginal>
                                <S.DivTituloOriginal>
                                    <h3>Data de Lançamento: </h3>
                                    <S.Data>{item.release_date.replace(/-/g, " ").split(" ").reverse().join("/")}</S.Data>
                                </S.DivTituloOriginal>
                                <S.DivTituloOriginal>
                                    <h3>Nota: </h3>
                                    <S.TituloOriginal>{item.vote_average}</S.TituloOriginal>
                                </S.DivTituloOriginal>
                                <S.DivVideo>
                                    <h3>Assista o Trailer: </h3>
                                    <a href={item.video} target="_Blank" rel="noreferrer"><S.YoutubeImg src={Youtube} alt="aaa"/></a>
                                </S.DivVideo>
                                <S.Sinopse>
                                    <h3>Sinopse: </h3>
                                    <S.SinopseP>{item.overview}</S.SinopseP>
                                </S.Sinopse>
                            </S.TituloDescricao>                          
                        </S.FilmesUl>
                    </div>

                ))}
            </div>
        )
    }
}