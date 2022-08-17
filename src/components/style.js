import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #8EB19D;
    }

    ::selection{
        color: #F0D2D1;
        background-color: #F0D2D1;
    }        
    ::-webkit-scrollbar-track {
        background-color: #F0D2D1;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #D9DD92;
    }
`
export const Busca = styled.div`
    display: flex;
    border: solid;
    align-items: center;
    width: 10%;
    justify-content: space-between;
`

export const H1 = styled.h1`
    color: #F3C654;
`
export const DivHeader = styled.div`
    height: 5vh;
    background-color: #66B3BA;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Nav = styled.nav`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Ul = styled.ul`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color: #42CAFD;
`
export const Li = styled.li`
    list-style: none;
    font-size: 1.5vw;
    text-decoration: none;
    color: #F0D2D1;
`

export const FilmesUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    border-bottom: solid 5px;
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
    color: #F6EFA6;
`

export const Descricao = styled.p`
    text-align: justify;
`

export const LinkS = styled(Link)`
    text-decoration: none;
    color: #F0D2D1;
`

export const Lupa = styled.img`
    width: 1vw;
`