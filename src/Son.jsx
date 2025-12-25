function Son(props) {

    return (
        <div>
            <h4>Hi I'm son</h4>
            <div>{props.children}</div>
        </div>
    )
}

export default Son