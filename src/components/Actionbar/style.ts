import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ProfilePhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

export const Barra = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    flex-direction: row;
    margin-left: 16px;
  }
`

export const Titulo = styled.h1`
  color: ${variaveis.corTextoMenu};
  font-size: large;
  writing-mode: vertical-rl;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-top: 0;
    writing-mode: horizontal-tb;
  }
`
