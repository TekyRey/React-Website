import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedinIcon from '@material-ui/icons/Linkedin'


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                {" "}
                <InstagramIcon />{" "}
                <p>&copy; 2021 BobaMundiaPizza.com</p>
            </div>
            
        </div>
    )
}

export default Footer

