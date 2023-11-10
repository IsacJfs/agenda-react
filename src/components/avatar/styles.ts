import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Navbar = styled.div`
  color: ${variaveis.corTextoMenu};
  h1 {
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 32px;
  }
`

export const ProfilePhoto = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    align-items: start;
  }
`
