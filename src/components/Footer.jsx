import React from 'react'

const year = new Date().getFullYear()

function Footer(){
    return <div>
        <footer>
            <p>Copyright &#169; {year}</p>
        </footer>
    </div>
}

export default Footer;