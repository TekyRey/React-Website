import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>
                Boba's Pizzeria is a new player in the restaurant industry.  The restaurant is in a comfortable, familiar, small town that has a strong need for additional dining options.  Bolstered by the need for more choices in family-oriented dining experiences, combined with the option for home-delivery, the restaurant is positioned to take advantage of the market need and serve the families in the Kakamega area.

                Kakamega's population is rapidly growing with new subdivisions and young families moving to the rural suburb of Lurambi area.  It is Boba's Pizzeria's strategy to exploit the first-mover opportunity and establish itself as the preferred pizza provider to the area.  We believe a locally-owned restaurant is the best option to serve the rapidly growing population with a fresh, unique menu as opposed to a national chain franchise.

                This business plan calls for an exciting, profitable start-up year ahead with future forecasted growth as we meet the demands of the community.  In all, this plan describes a healthy company with good growth prospects, looking to manage its orderly growth in the near future.
                </p>
            </div>
        </div>
    )
}

export default About
