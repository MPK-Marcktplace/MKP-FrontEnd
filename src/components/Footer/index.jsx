import { Link } from "react-router-dom";
import "./style.css";

const Footer = () =>{
    return(
        <footer>
            <div className="social-networks">
                <div>
                    <a href="https://pt-br.facebook.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>  
            <div className="credit-container">
                <span className="credit"> Criado pelo grupo 4 - MPK - 2022 direitos reservados</span>
            </div>
        </footer>
    );
};

export default Footer;
