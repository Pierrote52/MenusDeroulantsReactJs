import React from "react";


function Selector(props) {
    return <select name="Departement" onChange={(e) => { props.result(e.target.value) }}>
        {props.options.map((element) => {
            return <option key={element.value} value={element.value}>{element.name}</option>
        })

        }



    </select>
}

export default Selector;