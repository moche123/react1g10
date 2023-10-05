import { 
    useEffect,
    useRef,
    useState 
} from "react";


function UseRefTemplate() {
   const [name, setName] = useState('');
//    const [count, setCount] = useState(0);

    const prevName = useRef('')
    // const count = useRef(0);

   useEffect(() => {
    //count.current = count.current + 1; 
    prevName.current = name;
    console.log('NO RE RENDERIZAR')
    // setCount(count+1)
   });

   return (
   <>
       <input 
        value={ name } onChange={ (e) => setName( e.target.value )  } /> 
       <div>My name is {name} and it used to be { prevName.current } </div>
       {/* {count.current} */}
    
   </>
 )
}

export default UseRefTemplate