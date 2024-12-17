/*import MyComponent from "./components/hoc/MyComponent"

import withMyComponent from "./components/hoc/withMyComponent"
import Theme from "./components/hoc/Theme"
import withTheme from "./components/hoc/withTheme"


function App() {
  
const EnhanceComponent=withMyComponent(MyComponent)
const EnhanceTheme=withTheme(Theme)
  return (
    <>
      <EnhanceComponent />
      <EnhanceTheme />
     
    </>
  )
}

export default App*/

//App.jsx with Lazy loading
import React, { lazy, Suspense } from 'react'

const Home=lazy(()=>import('./components/lazyloading/Home'))
const About=lazy(()=>import('./components/lazyloading/About'))
const App = () => {
  return (
    <div>
      <h2>Example of LazyLoading</h2>
      <Suspense fallback={<div>Please wait</div>}><Home /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait Abou page is Loading</div>}><About /></Suspense>
      <Suspense fallback={<div>Please wait</div>}><Home /></Suspense>
    </div>
  )
}

export default App
