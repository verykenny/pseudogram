
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
                        <a href='https://github.com/C-Bridge17' target='blank'>
                            <i className="fab fa-github-square icon"></i>
                        </a>
                        {/* Update This Link to LinkedIn */}
                        <a href='https://github.com/C-Bridge17' target='blank'>
                            <i className="fab fa-linkedin icon"></i>
                        </a>
                    </div>
                    <div>
                        <p>Kenneth Donahue</p>
                        <a href='https://github.com/veryKenny' target='blank'>
                            <i className="fab fa-github-square icon"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/kenneth-donahue/' target='blank'>
                            <i className="fab fa-linkedin icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
