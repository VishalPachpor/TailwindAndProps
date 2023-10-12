
import Card from './components/Card'
import './App.css'

function App() {
  let details = "Read more about the mackbook series here";
  let name = "Display Name";
  let nextText = "Browse more";
  let details2 = "Details regarding the product"

  return (
    <>
     <h1 className='bg-green-400 text-black'>Tailwind And Props in React </h1>
      <Card about="This is Mac" next="Click me" desc={details}/> 
      <Card about={name} next={nextText} desc={details2}/> 
    </>
  )
}

export default App
