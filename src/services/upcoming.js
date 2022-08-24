import React, { Component } from "react";
import axios from "axios";
import * as S from "../components/style.js"

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/upcoming?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1"
})

export default class UpComing extends Component {
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
                    <S.Principal>Próximos Filmes</S.Principal>
                    <S.Paragrafo>A seguir um top 20 dos Filmes em Breve</S.Paragrafo>
                    <S.Pesquisa placeholder="Procure pelo seu filme" type="text" onChange={this.handleChange} autoFocus />
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
                                {/* <S.TituloOriginal>{`Titulo Original: ${item.original_title}`}</S.TituloOriginal> */}
                                <S.DivTituloOriginal>
                                    <h3>Data de Lançamento: </h3>
                                    <S.Data>{item.release_date.replace(/-/g, " ").split(" ").reverse().join("/")}</S.Data>
                                </S.DivTituloOriginal>
                                {/* <S.Lancamento>{`Data de Lançamento: ${item.release_date}`}</S.Lancamento> */}
                                <S.DivTituloOriginal>
                                    <h3>Nota: </h3>
                                    <S.TituloOriginal>{item.vote_average}</S.TituloOriginal>
                                </S.DivTituloOriginal>
                                {/* <S.Nota>{`Nota: ${item.vote_average}`}</S.Nota> */}
                                <S.Sinopse>
                                    <h3>Sinopse: </h3>
                                    <S.Sinopse>{item.overview}</S.Sinopse>
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