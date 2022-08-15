// key: 3ec3b78e7bcb7df233c8d24e81fd8592
// requisição: https://api.themoviedb.org/3/movie/550?api_key=3ec3b78e7bcb7df233c8d24e81fd8592
// https://api.themoviedb.org/3/movie/popular?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1

import React, {Component} from "react";
import axios from "axios";

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1"
})

export default class Movies extends Component {
    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta)
        const allFilmes = resposta.data.results.map((item) => {
            return{
                // nome: item.original_title,
                // sinopse: item.overview,
                ...item,
                nome: item.overview
            }
        })
        this.setState({
            movies: allFilmes
        })
    }

    render(){
        return(
            <div>
                {this.state.movies.map((item, index) => (
                    <ul key={index}>
                        {/* <li>{item.nome}</li> */}
                        {/* <li>{item.sinopse}</li> */}
                        <li>{item.original_title}</li>
                        <li>{item.overview}</li>
                    </ul>
                ))}
            </div>
        )
    }
}