import { Link } from "react-router-dom";
import Menubar from "../../components/MenuBar";
import "./style.css";

const Header = () =>{

    function sendSearch(){

    };

    return(
        <header>
            <Menubar/>
            <div className="icon-container">
                <img id="icon-header" src="../image/logo-dark-oficial.png" alt="logo da MPK"/>
            </div>
            <div className="user-container">
                <nav className="menu-user">
                    <ul>
                        <li>
                            <Link to="/login" id="login-btn">Login</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/register" id="modalRegister-btn">Criar Conta</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="search-container">
                <form onSubmit={sendSearch}>
                    <label htmlFor="search-field">
                        <input type="text" id="search-field" placeholder="Pesquisar..."/>
                        <button type="submit" id="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </label>
                </form>        
            </div>
        </header>
    );
}

export default Header; 
