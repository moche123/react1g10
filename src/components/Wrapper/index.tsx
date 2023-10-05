import './wrapper.css'
interface IWraperProps {
    children: React.ReactNode;
}

function Wrapper(props: IWraperProps) {
  return (
    <div className="container">
        {props.children}
    </div>
  )
}

export default Wrapper