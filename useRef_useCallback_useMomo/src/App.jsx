import Additems from "./components/useCallback/Additems"
import Counter from "./components/useCallback/Counter"
import EvenOdd from "./components/useCallback/EvenOdd"
import Factorial from "./components/useMemo/Factorial"
import Filtering from "./components/useMemo/Filtering"
import Sorting from "./components/useMemo/Sorting"
import InputFeild from "./components/useRef/InputFeild"
import Paragraph from "./components/useRef/Paragraph"
import TextArea from "./components/useRef/TextArea"


function App() {
  
  return (
    <>
      <InputFeild />
      <TextArea />
      <Paragraph />

      <Counter />
      <EvenOdd />
      <Additems />

      <Factorial />
      <Sorting />
      <Filtering />
      
    </>
  )
}

export default App
