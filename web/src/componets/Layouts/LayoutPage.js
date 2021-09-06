import React from 'react'
import Footer from '../footer/Footer'
import Formulario from '../Formulario'
import Header from '../header/Header'


const LayoutPage = () => {

    return (<div className="App">
                <Header></Header>
                <Formulario></Formulario>
                <Footer></Footer>
            </div>);
}

export default LayoutPage