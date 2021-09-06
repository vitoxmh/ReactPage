import React, {Fragment, useState} from 'react'


function Formulario() {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    });

    const handleInputChange = (e) => {

    
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        });

        if(e.target.name == 'nombre' && e.target.value == ''){

            e.target.parentNode.classList.add('error');

        }else{

            e.target.parentNode.classList.remove('error');
        }



    }


    return (
        <Fragment>
            <div className="">
                <div className="input">
                    <label></label>
                    <input 
                        name="nombre"  
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInputChange}
                        
                        />
                </div>

                <div className="input">
                <input 
                    name="apellido"  
                    type="text"
                    placeholder="Apellico"
                    onChange={handleInputChange}
                    
                    />
                </div>
                    
            </div>
            <div>
                <h3>{ datos.nombre}</h3>
                <h3>{ datos.apellido}</h3>
            </div>
        </Fragment>
    )
}

export default Formulario
