import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%
  }
`
export const Campo = styled.input`
padding: 8px;
background-color: #fff;
border-radius: 8px;
font-weight: bold;
color: #666666;
border-color: #666666;
width: 100%;
`

export const BotaoAdicionar = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #00B0FF;
  border-radius: 8px;
  margin-right: 8px;
  transition: 0.3s;
  width: 100%;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #00BFFF;
  }
`

export default EstiloGlobal