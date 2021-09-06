import React from 'react'
import './footer.scss'
import linkFooter from '../../data/footer.json'
import Lista from '../Lista'


function Footer() {

   

    return (
        <footer className="c-footer">
            <div className="c-footer__container">
                <ul>
                  {
                      linkFooter.map((item) =>  (
                          <Lista key={item.id} name={item.name} href={item.href}></Lista>
                      ))
                  }
                </ul>
            </div>
        </footer>
    )
}

export default Footer
