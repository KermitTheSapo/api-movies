import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #0F110C;
    }

    ::selection{
        color: white;
        background-color: black;
    }        
    ::-webkit-scrollbar-track {
        background-color: white;
    }
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-thumb {
        background: #612940;
    }
`
export const H1 = styled.h1`
    color: #F7D08A;
    cursor: pointer;
`

export const DivHeader = styled.div`
    height: 5vh;
    background-color: #612940;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Nav = styled.nav`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Ul = styled.ul`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color: #DE1A1A;
    height: 8vh;
`
export const Li = styled.li`
    list-style: none;
    font-size: 1.5vw;
    text-decoration: none;
    color: #ACBED8;
    display: flex;
    align-items: center;
`

export const FilmesUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    border-bottom: solid 5px #880000;
`

export const Poster = styled.img`
    height: 300px;
    width: 200px;
`

export const TituloDescricao = styled.div`
    width: 40%;    
`

export const Titulo = styled.h2`
    width: 100%;
    text-align: center;
    color: #F7D08A;
`


export const Descricao = styled.p`
    text-align: justify;
    color: #ACBED8;
`

export const LinkS = styled(Link)`
    &:hover{
        color: #F7D08A;
        text-shadow: 1px 1px black;
    }

    text-decoration: none;
    color: #F0D2D1;
`

export const Borda = styled.div`
    width: 2px;
    height: 50px;
    margin-left: 10px;
    border: solid 1px black;
`

export const Introducao = styled.div`
    border: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Contador = styled.div`
    height: 5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Principal = styled.h2`
    color: #F7D08A;
`

export const Paragrafo = styled.p`
    color: #ACBED8;
`

export const DivHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    align-self: center;
    height: 100%;

    img {
        margin-right: 10vw;
    }
`
export const Engloba = styled.div`
    display: flex;
    justify-content: center;
    height: 50vh;
`

export const Explicacao = styled.p`
    color: #ACBED8;
    width: 80%;
    text-align: center;
`

export const BatataFlix = styled.h2`
    color: #F7D08A;
`

export const Apresentacao = styled.p`
    color: #ACBED8;
`

export const Lancamento = styled.h4`
    color: #F7D08A;
`
export const Nota = styled.h4`
    color: #F7D08A;
`

export const DivTituloOriginal = styled.div`
    display: flex;
    color: #F7D08A;
    align-items: center;
`
export const TituloOriginal = styled.h4`
    text-align: center;
    color: #ACBED8;
`

export const Sinopse = styled.div`
    color: #F7D08A; 
`
export const SinopseP = styled.p`
    color: #ACBED8;
`

export const Pesquisa = styled.input`
    width: 20%;
    background-color: grey;
    color: white;
    height: 5vh;
    text-align: center;
    font-size: 1.5vw;
    &::placeholder{
        color: white;
        font-size: 1vw;
    }
`
