import styled from 'styled-components'
import nameIcon from '../../components/icons/person-fill-add.svg'
import foneIcon from '../../components/icons/telephone-plus-fill.svg'
import emailIcon from '../../components/icons/envelope-plus-fill.svg'
import variaveis from '../../styles/variaveis'

export const SideB = styled.aside`
  padding: 16px;
  background-color: ${variaveis.corPrincipal};
  height: 100vh;
  align-self: start;
  @media (max-width: 768px) {
    height: 100%;
  }
`

export const Container = styled.div`
  text-align: center;
`
export const ContainerAvatar = styled(Container)`
  @media (max-width: 768px) {
    text-align: start;
  }
`
export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 32px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
    position: fixed;
    left: 32px;
    top: 24px;
    text-align: start;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const ImputForm = styled.input`
  border: none;
  background-color: #fff;
  margin-left: 8px;
  width: 96%;
  height: 40px;
  font-size: 18px;
  background-repeat: no-repeat;
  background-position: 16px;
  padding-left: 40px;
  border-radius: 16px;
  margin-bottom: 16px;
`

export const ImputName = styled(ImputForm)`
  background-image: url(${nameIcon});
`
export const ImputFone = styled(ImputForm)`
  background-image: url(${foneIcon});
`
export const ImputEmail = styled(ImputForm)`
  background-image: url(${emailIcon});
`

export const ButtonContact = styled.button`
  background-color: #283042;
  padding: 8px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`
