
export default function Item(props){
    

    
const styles={
    backgroundColor:props.on?"#222222":"transparent"
}
    
    return(
        <div className="box" style={styles} onClick={props.handleClick}>

        </div>
    )
}