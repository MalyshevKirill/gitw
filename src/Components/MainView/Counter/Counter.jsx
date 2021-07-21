import c from './Counter.module.css'

const Counter = (props) => {
    return(
        <div className={c.counter} title={props.title}>
            {props.icon()}
            {props.count}
        </div>
    )
}
export default Counter