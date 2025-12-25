function Daughter(props) {

    return (
        <div>
            <h4>Hi I'm daughter</h4>
            <div>{props.children}</div>
        </div>
    )
}

export default Daughter