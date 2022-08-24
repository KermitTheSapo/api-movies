import React, { Component } from 'react'
import duck from "../imgs/duck.gif"
import * as S from "../components/style.js"

export default class home extends Component {
  render() {
    return (
      <S.Engloba>
        <S.GlobalStyle />
        <S.DivHome>
          <S.BatataFlix>O que é BatataFlix?</S.BatataFlix>
          <S.Explicacao>Um site de filmes feito em React utilizando uma api da IMDB, no menu de navegação você pode ter acesso aos filmes mais populares, mais votados, recentes, e que viram de acordo com o imbd</S.Explicacao>
          <S.Pato src={duck} alt="" />
          <S.Apresentacao>Desenvolvido por Robert J.</S.Apresentacao>
      </S.DivHome>      
      </S.Engloba>
      
    )
  }
}
