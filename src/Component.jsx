function Component(props) {

    const {data} = props;

    if(data) return ( <p>That's from props: {data}</p> )
    else return ( <p>No props 🥺</p>)
}

export default Component