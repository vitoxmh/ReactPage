import React from 'react'

function Lista({name,href}) {
    
    function alerta(aler){
        alert(aler)
        return false;
    }

    return (
        <li onClick={ () => alerta(name)} >{name}</li>
    )
}

export default Lista
