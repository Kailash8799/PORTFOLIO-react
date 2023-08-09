import React from 'react'

const Footer = () => {
    return (
        <div className='mt-0'>
            <footer className="footer">
                {/* <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div> */}
                <ul className="social-icon">
                    <li className="social-icon__item"><a className="namec social-icon__link" rel="noreferrer" target={"_blank"} href="https://facebook.com">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="namec social-icon__link" rel="noreferrer" target={"_blank"} href="https://twitter.com/kailash8799">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="namec social-icon__link" rel="noreferrer" target={"_blank"} href="/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="namec social-icon__link" rel="noreferrer" target={"_blank"} href="https://instagram.com/kailash8799">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
               
                <p className='font'>&copy;2023 Kailash Rajput | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
