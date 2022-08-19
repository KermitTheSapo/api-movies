import React, { Component } from "react";
import axios from "axios";
import * as S from "../components/style.js"

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=3ec3b78e7bcb7df233c8d24e81fd8592"
})

export default class Movies extends Component {
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
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        this.setState({
            movies: allFilmes,
            FilterMovies: allFilmes
        })
    }
    handleChange = (event) =>{
        const ListaFiltrada = this.state.movies.filter((item) => {
            if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                return  true
            } else if (item.original_name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            } else if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
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
                    <S.Principal>Trending</S.Principal>
                    <S.Paragrafo>A seguir um top 20 dos filmes e series em trending atualmente</S.Paragrafo>
                    <S.Pesquisa placeholder="Procure pelo seu filme" type="text" onChange={this.handleChange} autoFocus />
                </S.Introducao>
                {this.state.FilterMovies.map((item, index) => (
                    <div key={index}>
                        <S.FilmesUl>
                            <S.Poster src={item.image} alt="" />
                            <S.TituloDescricao>
                                <S.Titulo>{item.name}</S.Titulo>
                                <S.Titulo>{item.title}</S.Titulo>
                                <S.DivTituloOriginal>
                                    <h3>Popularidade: </h3>
                                    <S.TituloOriginal>{item.popularity}</S.TituloOriginal>
                                    <S.TituloOriginal>pessoas</S.TituloOriginal>
                                </S.DivTituloOriginal>
                                <S.DivTituloOriginal>
                                    <h3>Nota: </h3>
                                    <S.TituloOriginal>{item.vote_average}</S.TituloOriginal>
                                </S.DivTituloOriginal>
                                {/* <S.Nota>{`Nota: ${item.vote_average}`}</S.Nota> */}
                                <S.Sinopse>
                                    <h3>Sinopse: </h3>
                                    <S.SinopseP>{item.overview}</S.SinopseP>
                                </S.Sinopse>
                                {/* <S.Descricao>{`Sinopse: ${item.overview}`}</S.Descricao> */}
                            </S.TituloDescricao>
                        </S.FilmesUl>
                    </div>
                ))}
            </div>
        )
    }
}