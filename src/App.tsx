import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Cadastro from './pages/cadastro';
import EstiloGlobal, {Container} from './styles';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  {
    path: '/novo',
    element: <Cadastro />
  }

])



function App() {
  return (
    <>
      <EstiloGlobal/>
      <Container>
          <RouterProvider router={rotas}/>
      </Container>
    </>
  );
}

export default App;
