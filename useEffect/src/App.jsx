
import './App.css'
import AxiosApi from './components/AxiosApi'
import ComponentMounting from './components/ComponentMounting'
import ComponentUpdating from './components/ComponentUpdating'
import ComponentWillMount from './components/ComponentWillMount'
import Example1 from './components/Example1'
import FetchApi from './components/FetchApi'
import MiniProject from './components/MiniProject'
import PromiseChaining from './components/PromiseChaining'
import RickMortyApi from './components/RickMortyApi'

function App() {
 
  return (
    <>
      <ComponentMounting />
      <ComponentUpdating />
      <ComponentWillMount />
      <Example1 />
      <FetchApi />
      <PromiseChaining />
      <AxiosApi />
      <RickMortyApi />
      <MiniProject />
      
    </>
  )
}

export default App
