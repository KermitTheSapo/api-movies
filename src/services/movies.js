// key: 3ec3b78e7bcb7df233c8d24e81fd8592
// requisição: https://api.themoviedb.org/3/movie/550?api_key=3ec3b78e7bcb7df233c8d24e81fd8592
// https://api.themoviedb.org/3/movie/popular?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1

import React, {Component} from "react";
import axios from "axios";

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=3ec3b78e7bcb7df233c8d24e81fd8592&language=pt-BR&page=1"
})
console.log(FilmesApi)

export default class Movies extends Component {
    render(){
        return(
            <div>
                <h1>aaaaaa</h1>
            </div>
        )
    }
}