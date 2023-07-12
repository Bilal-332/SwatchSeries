import './Swacth.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook, FaYoutube, FaTwitter, FaGooglePlus, FaPhoneAlt, FaTelegramPlane, FaSearch, FaFacebookMessenger, FaBell, FaAward, FaCar, FaCarSide, FaTruck, FaClock, FaTrophy, FaNewspaper, FaRegNewspaper, FaSignInAlt, FaPause, FaPlay, FaInstagram, FaLinkedin, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Swacth() {
    return (
        <div className='header' >
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.joblo.com/wp-content/uploads/2023/03/to-catch-a-killer-poster-featured.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='name'> To Catch A Killer</h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Action, Crime, Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.hdqwalls.com/wallpapers/the-batman-2022-movie-poster-art-cy.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className='name'> The Batman 2023</h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Action, Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hindi.startupfounder.in/wp-content/uploads/2023/01/Tractor-Trolley-Grant-Scheme-2023-22.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className='name'> PATHAAN 2023</h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Crime, Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.geekgirlauthority.com/wp-content/uploads/2019/04/AE-Poster-Posse-1-1200x640.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className='name'> Avengers Endgame 2021</h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Action,Crime,Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.hdqwalls.com/wallpapers/bthumb/the-flash-movie-fanart-3v.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className='name'> The Flash 2023 </h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Action,Crime,Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Wallpapers-Free-Download.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className='name'> Howard Pots 07 </h1>
                        <div className='movie-desc'>
                            <h5><span>H D </span></h5><h5>Duration : 1100 mins</h5>  <h5>MDB : 6.97 </h5>
                            <h5>Genre : Action,Crime,Thriller</h5>
                        </div>
                        <MDBBtn outline rounded color='success' className='watch-btn'>
                            <FaPlay />  Watch Now
                        </MDBBtn>
                        <div className='links'>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <FaFacebook /> Facebook
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <FaTwitter /> Twitter
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <FaGooglePlus /> Google
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <FaInstagram /> Instagram
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <FaLinkedin /> Linkedin
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                <FaPinterest /> Pinterest
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <FaYoutube/> Youtube
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <FaWhatsapp/> Whatsapp
                            </MDBBtn>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Navbar expand="lg" className='navbar'>
                <Container fluid>
                    <Navbar.Brand href="#" className=''><img src='https://play-lh.googleusercontent.com/nF1UURJrNHVXlmBp3FxJQKCcRZKC8RcQrQUrR21LcKV4UcgYxDytQhE_bW9e9ez8xA=s500-rw' className='brand-name' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" my-2 my-lg-0 nav-links"
                            navbarScroll
                        >
                            <a><Nav.Link href="#!">Genre</Nav.Link></a>
                            <a><Nav.Link href="#!">Home</Nav.Link></a>
                            <a><Nav.Link href="#!">Blog</Nav.Link></a>
                            <a><Nav.Link href="#!">Country</Nav.Link></a>
                            <a><Nav.Link href="#!"> Movies</Nav.Link></a>
                            <a><Nav.Link href="#!">Android</Nav.Link></a>
                            <a><Nav.Link href="#!">TVShows</Nav.Link></a>

                        </Nav>

                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <FaSearch className='search' />
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className=""
                            aria-label="Search"
                        />
                    </Form>
                </Container>
                <FaSignInAlt className='login' />
            </Navbar>
        </div>
    );
}
