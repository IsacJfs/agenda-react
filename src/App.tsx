import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle, { Container, MainContainer } from './styles'
import SideBar from './containers/Sidebar'
import ListaAZ from './containers/ListAZ'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Container>
          <div>
            <SideBar />
          </div>
          <MainContainer>
            <ListaAZ />
          </MainContainer>
        </Container>
      </Provider>
    </>
  )
}

export default App
