import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { React } from "react";
import "./login.css";
import api from "../../services/api";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Deve ser um e-mail")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  async function handleLogin(data) {
   
    try {
        const response = await api.post("/auth", data)
        console.log(response.data);
        navigate("/home"); 

    } catch (error) {
        console.error(error);
    }
  }

  return (
    <main>
      <div className="container">
        <div className="container-title">
          <h1>Login</h1>
        </div>
        <div className="container-input">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="email">
                <i className="fa-solid fa-user"></i>
              </label>
              <input
                type="email"
                placeholder="Digite o seu email..."
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor="password">
                <i className="fa-solid fa-key"></i>
              </label>
              <input
                autoComplete={false}
                type="password"
                placeholder="Digite sua senha..."
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="container-btn">
              <button type="submit" id="register-btn">
                Entrar
              </button>
              <div className="container-btnBack">
                <Link to="/home">Voltar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
