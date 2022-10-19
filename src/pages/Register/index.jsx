import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./register.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .email("Deve ser um e-mail")
//       .required("Email é obrigatório"),
//     password: yup.string().required("Senha é obrigatória"),
//   })
//   .required();

const Register = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  async function handleRegisterUser(data) {
    console.log(data);

    try {
      await api.post("/users", data);
      
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main>
      <section class="modal-section">
        <div class="modal-window">
          <div>
            <h1>Criar cadastro</h1>
          </div>
          <div class="container-inputs">
            <form onSubmit={handleSubmit(handleRegisterUser)}>
              <div>
                <input
                  type="text"
                  class="long"
                  id="name"
                  placeholder="Digite seu nome completo"
                  {...register("name")}
                />
              </div>
              <div>
                <input
                  type="email"
                  class="long"
                  id="email"
                  placeholder="Digite seu e-mail"
                  {...register("email")}
                />
              </div>
              <div>
                <select {...register("gender")} class="short" id="sexyOptions">
                  <option disabled="disabled" selected="selected">
                    Selecione o sexo
                  </option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  class="short"
                  onfocus="(this.type='date')"
                  id="birthday"
                  placeholder="Data de Nascimento"
                  {...register("birthday")}
                />
              </div>
              <div>
                <input
                  type="tel"
                  class="short"
                  id="cellphone"
                  placeholder="Digite o Telefone"
                  {...register("cellphone")}
                />
              </div>
              <div>
                <input
                  type="password"
                  class="short"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
              </div>
              <div>
                <input
                  type="password"
                  class="short"
                  id="passwordConfirm"
                  placeholder="Confirme sua senha"
                  {...register("passwordConfirm")}
                />
              </div>
              <div>
                <select
                  name="customerOptions"
                  class="short"
                  id="customerOptions"
                  {...register("customerOptions")}
                >
                  <option disabled="disabled" selected="selected">
                    Tipo de usuário
                  </option>
                  <option value="partner">Parceiro</option>
                  <option value="sales">Vendedor</option>
                  <option value="customer">Cliente</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  class="short"
                  id="numberid"
                  placeholder="Digite seu CPF/CNPJ"
                  {...register("numberid")}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="long"
                  id="company"
                  placeholder="Nome da Empresa"
                  {...register("company")}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="short"
                  id="zipcode"
                  placeholder="Digite o CEP"
                  {...register("zipcode")}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="short"
                  id="city"
                  placeholder="Digite sua cidade"
                  {...register("city")}
                />
              </div>
              <div>
                <select class="short" {...register("ufOptions")} id="ufOptions">
                  <option disabled="disabled" selected="selected">
                    Selecione o UF
                  </option>
                  <option value="acre">AC - Acre</option>
                  <option value="alagoas">AL - Alagoas</option>
                  <option value="amapa">AP - Amapá</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  class="long"
                  id="address"
                  placeholder="Digite seu endereço"
                  {...register("address")}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="long"
                  id="neighborhood"
                  placeholder="Nome do bairro"
                  {...register("neighborhood")}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="long"
                  id="complement"
                  placeholder="Ex: bloco, apto, casa 1, 2, 3..."
                  {...register("complement")} 
                />
              </div>
              <div class="container-btn">
                <button type="submit" id="register-btn">
                  Enviar cadastro
                </button>
                <button type="reset" id="reset-btn">
                  limpar campos
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
