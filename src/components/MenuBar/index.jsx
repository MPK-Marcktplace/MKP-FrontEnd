import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import "./menuBar.css";

const Menubar = () => {

    const [departments, setDepartments] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() =>{
        api.get("/departments")
            .then((response) => {
                setDepartments(response.data.departments);                
            })
            .catch((err) => {
                console.log(err);
            })

        api.get("/partners")
            .then((response) => {
                setPartners(response.data.partners);                
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const settings = [
        "Sua conta",
        "Pedidos",
        "Comprar Novamente",
        "Sair",
    ];
    
    return(
        <div className="bar">
            <label htmlFor="menu"><i className="fa-solid fa-bars"></i></label>
            <input type="checkbox" id="menu"/>
            <nav id="nav-menu">
                <ul>
                    <li>
                        <div className="navbar-header">
                            <div className="user-data">
                                <i class="fa-solid fa-user"></i>
                                Olá, Júlio
                            </div>
                            <label id="btn-x" htmlFor="menu"><i class="fa-solid fa-x"></i></label>
                        </div>
                    </li>
                    <li>
                        <div className="navbar-title">Departamentos</div>
                    </li>
                        {departments.map((department) =>(
                            <li><Link key={department.id}>{department.name}</Link></li>
                        ))}
                    <li>
                       <div className="navbar-title">Parceiros</div>
                   </li>
                        {partners.map((partner) =>(
                            <li><Link key={partner.id}>{partner.company}</Link></li>
                        ))}
                    <li>
                        <div className="navbar-title">Ajuda e Configurações</div>
                    </li>
                        {settings.map((setting) =>(
                            <li><Link key={setting}>{setting}</Link></li>
                        ))}
                </ul>
            </nav>
        </div>
    )
};

export default Menubar;