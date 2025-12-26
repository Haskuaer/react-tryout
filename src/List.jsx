function List() {

    const personel = [
        {id: 1, name: "Adam"},
        {id: 2, name: "Daniel"},
        {id: 3, name: "Paul"},
        {id: 4, name: "Victoria"}
    ];

    return(
        <>
            <h1>Personel:</h1>
            <ul>
                {personel.map((person) => <li key={person.id}>{person.name}</li>)}
            </ul>
        </>
    )
}

export default List