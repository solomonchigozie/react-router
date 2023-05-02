const Planets = ()=>{
    const planet = [
        {name : "Mars", isGasPlanet : true},
        {name : "Mercury", isGasPlanet : false},
        {name : "Venus", isGasPlanet : true},
        {name : "Earth", isGasPlanet : false},
        {name : "Neptune", isGasPlanet : true},
    ]

    return (
        <div className="App">
            {planet.map((planets, key) =>{
                if(planets.isGasPlanet) return <h1>{planets.name}</h1>
            })}
        </div>
    )
}