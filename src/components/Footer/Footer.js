import React from 'react'
import './Footer.css';
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_body_list'>
                <div className='footer_list'>
                    <span>Explore Shows</span>
                    <ul>
                        <li>SET Shows</li>
                        <li>SAB Shows</li>
                        <li>Marathi Shows</li>
                        <li>Kids</li>
                        <li>Aath Shows</li>
                        <li>English TV Shows</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Top TV Shows</span>
                    <ul>
                        <li>Barsatein</li>
                        <li>Tarak Mehta Ka Ooltah Chashmah</li>
                        <li>Kaun Banega Crorepati</li>
                        <li>India's Best Dancer</li>
                        <li>Balveer 3</li>
                        <li>Katha Ankahee</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Sony LIV Originals</span>
                    <ul>
                        <li>Scam 2003 The Telgi Story</li>
                        <li>Scam 1992 The Harshad Mehta Story</li>
                        <li>College Romance</li>
                        <li>Rocket Boys</li>
                        <li>The Jengaburu Curse</li>
                        <li>Gullak</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>New on Sports</span>
                    <ul>
                        <li>US Open 2023</li>
                        <li>New Zealand Tour of England 2023</li>
                        <li>Roshn Saudi League</li>
                        <li>Durand Cup 2023</li>
                        <li>Bundesliga</li>
                        <li>WWE</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>New On LIV</span>
                    <ul>
                        <li>Aayirathonnu Nunakal</li>
                        <li>Por Thozhil</li>
                        <li>Father Stu</li>
                        <li>Fatafati</li>
                        <li>Pareshan</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Shows by Genres</span>
                    <ul>
                        <li>Drama</li>
                        <li>Comedy</li>
                        <li>Thriller</li>
                        <li>Romantic</li>
                        <li>Reality</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Movies by Language</span>
                    <ul>
                        <li>Hindi</li>
                        <li>English Movies</li>
                        <li>Marathi</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Movies by Genre</span>
                    <ul>
                        <li>Action Movies</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Romantic Movies</li>
                        <li>Horror Movies</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Sports</span>
                    <ul>
                        <li>Football</li>
                        <li>Cricket</li>
                        <li>WWE</li>
                        <li>UFC</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Explore More</span>
                    <ul>
                        <li>Shows</li>
                        <li>Movies</li>
                        <li>Sports</li>
                        <li>Premium</li>
                        <li>QOTY</li>
                    </ul>
                </div>
            </div>
            <div className='footer_body_social'>
                <div className='footer_body_social_1'>
                    <div className='footer_body_social_list'>
                        <span className='footer_body_social_list_data'>Terms of Use</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>Privacy Policy</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>FAQs</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>Contact Us</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>Advertise With Us</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>Content Redressal Mechanism</span>
                        <span className='footer_body_social_list_dot'></span>
                        <span className='footer_body_social_list_data'>3.5.23</span>
                    </div>
                    <div className='footer_body_social_list_network'>
                        <p>© 2022 Sony Pictures Networks India Pvt. Ltd.</p>
                    </div>
                </div>
                <div className='footer_body_social_2'>
                    <a href="https://play.google.com/store/apps/details?id=com.sonyliv" target="_blank">
                        <span style={{ marginRight: '5px' }}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAoCAMAAADjcxkDAAAA/1BMVEVHcEwxMTGOjo7///9+fn55eXmEhISQkJB0dHSLi4sA4v80NTUyMjIA0/8A8HbHx8f29vbi4uIA2/9DQ0M8Pj3AwMDs7Oz7+/sAxv9VVVVnZ2dzcnOrq6s4OTjd3d1LS0tfX1+hoaFrbWv8OEXzMkrY2NiampqKiopPT0+np6f/zAAcc4SAgIC0tLR4eHiFhYX/xACJcpkAt//Pz8+VlZXmKVH/1AAcbYSRkZHOxykE53swUksN2ncVs31p1F1bXn6FXoYA3bDRikkA3LFCU2WuT3MdZ3xzbTAfkGUma14D17AJzbDXOFsC3qyvrzPSjEjgR1eiwUtvmFsPxLAklb6+WhWOAAAACnRSTlMA////uJrS+VvmxdMMwwAABFxJREFUWMPNmHlb2zgQxiPP7gKVQTK2ZRwfcQy+WDtpcEqBQqHHtnt07/3+n2VHcgKmxDTdsE8yfyRRLNm/zLwzmqjX623vbGnrtK2d7R7aN2OTrNV0M/sWvTEmazeqbfd2zPVzkPy73tYGYBC61dM2gYP8Nw6douGb/tmvwjFdnePD1U/6Y3P7zLYjUoaMaYkIGSFaUYUirPDSGC+5pLYJMQarcrw6+fvy6lU3Sc4sYg1IWcoB6+NLVuBzLfww8nVi1hYLSxKuzPHh5OSXSyTpmprGxHRdq/RH8ecctsy5M49lobk6x8sTCXJxcRV0cPRJP2VlWZVeF0c89J+G4+Tni729ix8Xis1lAaEsfywuMU3E6hwHBwcIsod2uVCwMbOZR8rEtq2GQ0OOUHLMdMpiEjtPwoH2bk+RLJSJpKNBEMzSs523utwn8MKAPhFHA3Kxd2V9fVl5kjr2cnd3t+URlEmwlnoqORqUNw3I6/OP+ho4vt+dWwPy+vnx8fnHe7MHRSiMKvrCPftp3h5maZpOR5jZA6xAy3Ds79+SvJEYyHF8+ltLJmMOIByA4nEtDsFrDw2QJjzSB39JDmUK5FfEQI7T09Pz27ka8LFFgn44JV/HEUWRxrm7LMez/TnJ/u7k7fPGH3ccrsMbf38pMx9wKF9CujQH2oxkcnj4tvHHn7eFxIbs3lIrmpUs6roztNylOp1xDKKgzRFBpThoFJmyCKmFAV3Msf+sYUEMCYI67d8VBQ7tDtKqMOihlGyGquGyyY1QCUYNruRwQ/wya3EUoEmOWAA4PrUVqg2jLn8olMmR5Dj8/fyvVggC4PKtdKQxwqDOfBmpDMR0KmBMcu4UWgKKwxROkSXNYwxI0yEDw0IOmjjDswTSCLB9MR1BOzkaDAnyh3e/ojogx16SJCGwWN6IlFBRzmVKcq5X8rGBoThS0IhbgXGXL/agyRc39lwekgRyMoUz8gjH5Ajt8Ojm/f06rbNb+fWhmKrfSh3DBbsRT25wXYlUctgwrUGkg3m+uJZa5pMSgwgOJyMY6ga3HuFQGEc/vH+43YKw5oodnYHc/gMnnHEwGBgOVTpoOKAe0bZOG47cEaM85pxQIbx2+jzgmLx4gRTXC3JT9yF0G4UmNIIEJX8Gvi64K3NakErmkykURybpdM1sc+jI4cFQ8nC5VEDezSExPl0v3moDTBHDZhwS9DcGf2iDMNHD3Pc5xgwR7EI0OqUh1EXSuKrtD9SRXzmSw+JKYR0ciPHpprNDJXGNwU2m0lk05eAwKQAPhRjizqHntQM1g3wqsJOt8LKvqkQtZv6IxJDEBvApM1Rw404OxJDy7N5l9aDV55jzj1bjP0sPTGI7s2/pg45IV62T2dzdxKTp6NcRY6Ewlmx7RnwohZIstziFcQeH/s/NtbVCC2EaEGJkoqUmB0IEnf8rV+x6zMIQbDkMEtnjJ/h/+3/0Y5ty7rAp5zCbci61/nM6os7pNuTc8l8biZR33Rr82QAAAABJRU5ErkJggg==' /></span>
                    </a>
                    <a href="https://apps.apple.com/in/app/sonyliv-originals-hollywood/id587794258" target="_blank">
                        <span><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAoCAMAAAASeEKOAAAAYFBMVEVHcEyvr6////8xMTGnp6enp6epqamnp6enp6enp6eampo6Ojo0NDSLi4u6urqurq6lpaX39/dBQUFOTk5sbGzq6up1dXXFxcXR0dFhYWGTk5Pd3d19fX1ZWVlHR0eFhYXTwDbLAAAACnRSTlMAEP//ds0+4x2wKL7qggAABBNJREFUWMPNmNt22zgMRTXnpO1EpHi/ipT0/3/ZB9lxbKVO2mbG4YuxuLCgbQAEQA7DMDx9Gx+6fjx/H4ZhGJ6T42OXn56GYXhKfPiS8/dh+CEfD8Llefhn/gIcdN+Gf6evACJ+3AGRSd1ksXTrL+IoD1Y28bZm8r8LshbgxtgUc1NvfsDZ2534xgddJXP6TRDZgHKzN2lKZUifPEWlWLh6Wdcg6SwpQiW5JEeKtOwgIlRy9UslSWlKZU5hJVmD/CDIBqAeQVgbQ5takNZtkWaTNudCZynamDW9GZuURSnrydNeirrNJKVqG3PRdqVRWn0QpAEj3wbJnVOmSkotbZVYBYSz7JkOgsnYtUZK60n2zBUiFaZMkl2RubMkaafNyo+B2HYM5qRJo1kSt8xuch8LJQStc5ZbpoOb8hJ9aCeQSdFBpMxQXkASVRfoKb0HIsM8B0lBPxnTr1JzKl03x62Eluji7OJ8AVljMpmj2qwXcdTWk1xj0oovICGGHYRZpfROaEIEgKjHAgCI/XX9m6cgSYa5kuwr+0pOkpuQG+nnTVJsKTn6OewNzM9d0geu+2dTZ/IMnrLP9T5Ix+3qb56p/7qgeXvLEf1DKqu+5bD+ISVeHhxiHtNrlkOG3DpkKiW8N+aoaKPyfwUSDiDiWOfUfZvVIpYIT9LXzwO56b8e2dr7R6ZhJrmQnKA/LzQ3cZixlX1POElR3UVcTyZf4N0I5XaFZZFnxcWTlKeNX4K4A0i5/bt+3v+nQlUAlCAVgj6JJC1OFiMAWFJoAHaWpEbIGMnNArbfPb7lQDJeR6bRI0qSCjHOxkKR+iKSHAG1kOSU0caZzCh9ijCkRrGlc0IJoV05+wAyH0CgX6XJhJHcTWhYT1ZgOYkLsJxJoDzJ3XcJUZAV8DRAJYW1ggxXzj6AHJPkaiopqEKM0CT1HqGCTrP7opxj4rVF9GcQvTu1YKNBJhlQQggd9m6vOcamvZoez2X/Yl9hpNnLnr5Uv7VBnUHK3q0uitPZsrwHUu+dmw1Na60t6gtIxnayLxWmV3UgnkHyvp0xnRQ7cq211uX+GHDbbV6Xr4xt/zGkRiYpLCoNCkkRXzEnFHJCJjm+VjQklz3b3xueXbtuvu7qcK/7qBBJDUxizSikAWbhFJokKXPyLkTMZIKtjqvFRqF2RbOHX610wb0zofkIAC03AIjL1azSzkALNYo9KZiL+JLuavcRGpksrEXzLyC+AfZ60HlzZnWjmj3JdVbjenU3Gk++38ZKjbEaNTuSBmY5iaRcRq3G/frgjZpI+lnpLkmGkwHZjTL9PY98cOlLqTPXw8IHp7eP3mv+HOTT777/M8gfPkvIui0Xsf4tiPv2Fw81nznJL89f6Onq8Y950s9Pw/BVnjd/At6LguQbVdJVAAAAAElFTkSuQmCC' /></span>
                    </a>
                </div>
                <div className='footer_body_social_3'>
                    <p>Connect With Us</p>
                    <a href="https://www.linkedin.com/company/sony-pictures-networks-india" target="_blank" style={{color: 'black'}}>
                        <span><FaLinkedinIn style={{ width: '30px', height: '25px', marginTop: '5px' }} /></span>
                    </a>
                    <a href="https://www.instagram.com/sonylivindia/?hl=en" target="_blank" style={{color: 'black'}}>
                        <span><FaInstagram style={{ width: '30px', height: '25px', marginTop: '5px' }} /></span>
                    </a>
                    <a href="https://www.facebook.com/SonyLIV/" target="_blank" style={{color: 'black'}}>
                        <span><FaFacebookF style={{ width: '30px', height: '25px', marginTop: '5px' }} /></span>
                    </a>
                    <a href="https://twitter.com/SonyLIV%20%20-%20twitter" target="_blank" style={{color: 'black'}}>
                        <span><FaTwitter style={{ width: '30px', height: '25px', marginTop: '5px' }} /></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;