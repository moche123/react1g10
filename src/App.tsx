import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'
import Wrapper from './components/Wrapper';
import useFetch from './custom-hooks/get-user.hook';
import UseRefTemplate from './other-hooks/useref';



const App = ()=>{

  //! CUSTOM HOOK 

  const [ user ] = useFetch('https://jsonplaceholder.typicode.com/todos/1') 
  //! END CUSTOM HOOK 

  const active = false;
  // let count = 0;

  const incrementCount = () => {
  //count = count + 1;
    // console.log(count);
    setCount(count+1);
  }

  const [ count,setCount ] = useState(0);

  // useEffect(() => {
   
  //   const interval = setInterval( () => {
  //     console.log(interval)
  //   } , 1000 )
  //   return () => {
  //     console.log('INTERVALO DESTRUIDO')
  //     clearInterval(interval)
  //   }
  // }, [count])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ responseApiPokemon,setResponseApiPokemon ] = useState<any>();

  const getInfo = () => {

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      setResponseApiPokemon(res)
    })
    .catch((err) => {
        // Capturamos los errores
        console.log(err)
    })
  }

  //* SE EJECUTA UNA SOLA VEZ AL INICIO
  useEffect(() => {
    getInfo();
    
  
  }, [])
  

  return (
    <>

      <button onClick={ incrementCount }>Click me</button>
      <p>{count}</p>

      <h2>Card: </h2>
      <Card title='Este es el título' ageText='La edad es 20' active={active} count={count}
            setCount={setCount} />

      <Wrapper> 
        <p>Information</p>
      </Wrapper>

      <hr /><hr />
      <h4>USE REF TEMPLATE</h4>
      <UseRefTemplate />
      <hr /><hr />
      <div>
        {
          responseApiPokemon &&  <div>Pokemon Count : {responseApiPokemon.count}</div> 
        }
        
      </div>

      <hr /><hr />
      <div>
        Nombre de usuario del custom hook: { user && <div>{user.title}</div> }
      </div>
    </>
  )
}

export default App
