import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {      
    return(
        <main>
            <section className="cards-section">
                <div className="card card-1" id="card-departments">
                    <div className="card-header">
                        <img src="../image/departments.jpg" className="card-img" alt="Imagem do estoque da empresa"/>
                    </div>
                    <div className="card-footer">
                        <Link to="/departments">Departamentos</Link>
                    </div>
                </div>
                <div className="card card-2" id="card-establishment">
                    <div className="card-header">
                        <img src="../image/gps-car.jpg" className="card-img" alt="Foto de pessoas dando as mãos"/>
                    </div>
                    <div className="card-footer">
                        <Link to="/establishment">Estabelecimentos</Link>
                    </div>
                </div>
                <div className="card card-3" id="card-profile">
                    <div className="card-header">
                        <img src="../image/buying.jpg" className="card-img" alt="Foto de pessoas dando as mãos"/>
                    </div>
                    <div className="card-footer">
                        <Link to="/profile">Minhas compras</Link>
                    </div>
                </div>
                <div className="card card-4" id="card-partners">
                    <div className="card-header">
                        <img src="../image/partners.jpg" className="card-img" alt="Foto de pessoas dando as mãos"/>
                    </div>
                    <div className="card-footer">
                        <Link to="/partners">Parceiros</Link>
                    </div>
                </div>  
                <div className="card card-5" id="card-sales">
                    <div className="card-header">
                        <img src="../image/sales.jpg" className="card-img" alt="Foto de pessoas dando as mãos"/>
                    </div>
                    <div className="card-footer">
                        <Link to="/sales">Venda na MPK</Link>
                    </div>
                </div>                         
            </section>
        </main>
    );
};

export default Home;
