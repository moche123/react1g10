import Wrapper from '../Wrapper';
import './styles.css';

interface CardProps {
    title: string,
    ageText: string;
    active: boolean;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}


function Card(props: CardProps) {

  const compositionClass = props.count % 2 === 0 ? 'light' : 'dark'
  const updateCountFromCard = () => {
    props.setCount(props.count+1);
  }

  return (

    <div className="card-wrapper">
      <div className={ props.count % 2 === 0 ? 'light' : 'dark' }>{props.title}-{props.ageText}</div>
      <div className = { compositionClass }></div>
      <br />
      <p>Count from APP: {props.count} </p>
      <button onClick={  updateCountFromCard }>CLICK</button>
      <Wrapper> 
        <p>Card info</p>
      </Wrapper>
    </div>

    
  )
}

export default Card