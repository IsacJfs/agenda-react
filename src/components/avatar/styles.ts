import styled from 'styled-components'

export const Navbar = styled.div`
  h1 {
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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

export const BotaoMenu = styled.button`
  background-color: transparent;
  border: none;

  svg {
    width: 32px;
    height: 32px;
  }
`
