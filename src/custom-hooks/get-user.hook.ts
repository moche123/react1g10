import { useState, useEffect } from 'react';


interface InitialData  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/
const useFetch = (url:string) =>{

    const initialData:InitialData = {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    }

    const [ data, setData ] = useState(initialData)

    useEffect(() => {
      
        fetch(url)
        .then(response => response.json())
        .then(info => {
            setData(info)
        })
      
    }, [url])
    
    return [data]

}



export default useFetch;