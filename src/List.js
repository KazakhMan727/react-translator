import React from "react";

function List () {

    const arr = [
        {city: "Astana", population: 1002874},
        {city: "Almaty", population: 1777000},
        {city: "Shymkent", population: 932235},
        {city: "Karaganda", population: 500826},
        {city: "Aktau", population: 182495}
    ]

    // const list = arr.map(element => <li key={element.toString}>{element}</li>);

    return (
        <div>
            <ul>
                {
                    arr.map(element => <li key={element.city}>City: {element.city}, population: {element.population}</li>)
                }
            </ul>
        </div>
    );

}

export default List;