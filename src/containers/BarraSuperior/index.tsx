import * as S from './style' 
import { Campo, BotaoAdicionar } from '../../styles/index'
import React from 'react'

const BarraSuperior = () => {
    return(

        <S.header>
            <Campo 
            type='search'
            placeholder="Buscar"
             ></Campo>
            <BotaoAdicionar to={'/novo'}>Adicionar Contato</BotaoAdicionar>
        </S.header>

    )
}

export default BarraSuperior