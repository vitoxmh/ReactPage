import React, {Fragment, useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import { validate } from 'rut.js'
import './contacto.scss'
 

function Contacto() {

    /*const [datos, setDatos] = useState({
        name     : '',
        lastname : '',
        email: ''
    });




    const handleInputChange = (e) => {

        console.log(e.target.value);
        setDatos({

            ...datos,
            [e.target.name] : [e.target.value]

        })

    }


    const enviarDatos = (e) => {

            e.preventDefault();
            console.log(datos.name+ ' ' +datos.lastname + ' '+ datos.email);

    }*/



    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onBlur" // "onChange"
      });
    const onSubmit = data => console.log(data);


    return (
        <Fragment>
            Pagina Contacto en React
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className={errors.name?'error input':'input'}>
                        <labe className="input__label">Name: </labe>
                        <input 
                            type="text" 
                            id=""
                            className="input__input"  
                            placeholder="Name"
                            {...register("name",
                                              
                                                  {
                                                    required: {
                                                        value: true, 
                                                        message: 'Nombre es requerido'
                                                        }, 
                                                    maxLength: {
                                                        value: 5, 
                                                        message: 'No más de 5 carácteres!'
                                                        },
                                                    minLength: {
                                                        value: 2, 
                                                        message: 'Mínimo 2 carácteres'
                                                        }
                                                }

                                        )
                            }
                            ></input>
                            <div class="error">
                              {errors.name && errors.name.message}
                            </div>
                    </div>
                    <div className={errors.phone?'error input':'input'}>
                        <labe className="input__label">Phone: </labe>
                        <input 
                            type="text" 
                            id=""
                            className="input__input"  
                            placeholder="Name"
                            {...register("phone",
                                              
                                                  {
                                                    required: {
                                                        value: true, 
                                                        message: 'Phone requerido'
                                                        }, 
                                                    maxLength: {
                                                        value: 10, 
                                                        message: 'No más de 5 carácteres!'
                                                        },
                                                    minLength: {
                                                        value: 5, 
                                                        message: 'Mínimo 2 carácteres'
                                                        },
                                                    pattern: {
                                                          value: /^[0-9\-]+$/i,
                                                          message: "Numero Invalido"
                                                      }
                                                }

                                        )
                            }
                            ></input>
                            <div class="error">
                              {errors.phone && errors.phone.message}
                            </div>
                    </div>
                    
                    <div className={errors.phone?'error input':'input'}>
                        <labe className="input__label">Email: </labe>
                        <input 
                            type="text" 
                            id=""
                            className="input__input"  
                            placeholder="Name"
                            {...register("email",
                                              
                                                  {
                                                    required: {
                                                        value: true, 
                                                        message: 'Email requerido'
                                                        }, 
                                         
                                                }

                                        )
                            }
                            ></input>
                            <div class="error">
                              {errors.phone && errors.phone.message}
                            </div>
                    </div>

                    <div className={errors.rut?'error input':'input'}>
                        <labe className="input__label">Rut: </labe>
                        <input 
                            type="text" 
                            id=""
                            className="input__input"  
                            placeholder="Name"
                            {...register("rut",
                                              
                                              {   
                                                validate: validate,  
                                              },

                                        )
                            }
                            ></input>
                            
                        {errors.rut && errors.rut.type === "validate" && (
                          <div class="error">Rut Invalido</div>
                        )}
                        </div>
                    <button type="submit">Enivar</button>
                </form>
                
            </div>
        </Fragment>
    )
}

export default Contacto
