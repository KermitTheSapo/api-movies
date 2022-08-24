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
    justify-content: space-evenly;
    flex-direction: column;
`

export const Ul = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color: #DE1A1A;
    height: 5vh;
    @media (max-width: 1440px) {
        width: 90%;
    }
    @media (max-width: 2560px) {
        width: 75%;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
`
export const Li = styled.li`
    list-style: none;
    font-size: 1.3em;
    text-decoration: none;
    color: #ACBED8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
    @media (max-width: 2560px) {
        font-size: 2em;
        width: 18%;
    }
    @media (max-width: 2100px) {
        font-size: 1.9em;
        width: auto;
    }
    @media (max-width: 1900px) {
        font-size: 1em;
        width: 15%;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
        width: 15%;
    }
    @media (max-width: 1024px) {
        font-size: 0.75em;
        width: 18%;
    }
    @media (max-width: 425px) {
        font-size: 0.75em;
        width: 20%;
    }
    @media (max-width: 375px) {
        font-size: 0.6em;
        width: 20%;
    }
    @media (max-width: 320px) {
        font-size: 0.6em;
        width: auto;
    }
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
    height: 28.763vh;
    width: 9.376vw;
    @media (max-width: 1024px) {
        width: 15vw;
    }
    @media (max-width: 425px) {
        height: 25vh;
        width:25vw;
    }
`

export const TituloDescricao = styled.div`
    width: 40%;
    @media (max-width: 425px) {
        width: 70%;
    }    
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
    @media (max-width: 2100px) {
        padding-right: 2vw;
    }
`

export const Borda = styled.div`
    width: 2px;
    height: 4.5vh;
    margin-left: 10px;
    border: solid 1px black;
`

export const Introducao = styled.div`
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
    font-size: 3em;
    @media (max-width: 1440px) {
        font-size: 2.5em;
    }
    @media (max-width: 1024px) {
        font-size: 2em;
    }
    @media (max-width: 425px) {
        font-size: 1.5em;
    }
`

export const Paragrafo = styled.p`
    color: #ACBED8;
    font-size: 2em;
    @media (max-width: 1440px) {
        font-size: 1.5em;
    }
    @media (max-width: 1024px) {
        font-size: 1em;
    }
`

export const DivHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    align-self: center;
    height: 100%;
    @media (max-width: 425px) {
        width: 100%;
    }
`
export const Engloba = styled.div`
    display: flex;
    justify-content: center;
    height: 80vh;
    @media (max-width: 440px) {
        height: 80vh;
    }
    @media (max-width: 425px) {
        height: 80vh;
    }
`

export const Explicacao = styled.p`
    color: #ACBED8;
    width: 80%;
    text-align: center;
    @media (max-width: 2560px) {
        font-size: 1.5em;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
    }
`

export const BatataFlix = styled.h2`
    color: #F7D08A;
    font-size: 1em;
    @media (max-width: 2560px) {
        font-size: 3em;
    }
    @media (max-width: 1440px) {
        font-size: 2em;
    }
`

export const Apresentacao = styled.p`
    color: #ACBED8;
    @media (max-width: 2560px) {
        font-size: 1.5em;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
    }
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

export const Titulo = styled.h2`
    width: 100%;
    text-align: center;
    color: #F7D08A;
    font-size: 2.5em;
    @media (max-width: 1440px) {
        font-size: 2em;
    }
    @media (max-width: 1024px) {
        font-size: 1.5em;
    }
    @media (max-width: 425px) {
        font-size: 1em;
    }
`
export const TituloOriginal = styled.h4`
    text-align: center;
    color: #ACBED8;
    font-size: 1.5em;
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 1024px) {
        font-size: 1em;
    }
    @media (max-width: 425px) {
        font-size: 0.8em;
    }
`

export const H3 = styled.h3`
    font-size: 1.5em;
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 425px) {
        font-size: 0.8em;
    }
`

export const Data = styled.h4`
    text-align: center;
    color: #ACBED8;
    font-size: 1.5em;
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 425px) {
        font-size: 0.8em;
    }
    /* transform: scale(-1,1) */
`

export const SinopseP = styled.p`
    color: #ACBED8;
    font-size: 1em;
    @media (max-width: 2560px) {
        font-size: 1.5em;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
    @media (max-width: 425px) {
        font-size: 0.7em;
    }
`

export const Sinopse = styled.div`
    color: #F7D08A; 
`


export const Pesquisa = styled.input`
    width: 20%;
    background-color: grey;
    color: white;
    height: 5vh;
    text-align: center;
    font-size: 1.3em;
    &::placeholder{
        color: white;
        font-size: 1em;
        @media (max-width: 1024px) {
            font-size: 0.8em;
        }
    }
`

export const Pato = styled.img`
    margin-right: 6vw;
    @media (max-width: 1440px) {
        margin-right: 9.5vw;
    }
    @media (max-width: 1024px) {
        margin-right: 14vw;
    }
    @media (max-width: 425px) {
        margin-right: 35vw;
    }
    
`