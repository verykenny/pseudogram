

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p className='copy'>&copy; Copyright 2021, curtis-and-kenny</p>
                </div>
                <div className="about-us__footer">
                    <div>
                        <p>Curtis Bridge</p>
                        <i className="fab fa-github-square icon"></i>
                        <i className="fab fa-linkedin icon"></i>
                    </div>
                    <div>
                        <p>Kenneth Donahue</p>
                        <i className="fab fa-github-square icon"></i>
                        <i className="fab fa-linkedin icon"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
