import { createUser } from "../../../lib/appwrite"
import "./signup.css"




export default function Signup() {

    const submit = () => {
        createUser();
    }

  return (
    <div>
         <div id="page">
        <div id="card-registro">            
            <div className="col01">            
                <form id="formCadastro">
                    <fieldset>
                        <div className="formWrapper">
                            <legend>Cadastro</legend>
                            <div className="inputWrapper">
                                <label htmlFor="usernameInput">Seu nome </label>
                                <input type="text" className="usernameInput" placeholder="Nome e Sobrenome" required/>
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="emailInput">Email </label>
                                <input type="email" id="emailInput" required/>
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="passwordInput">Senha</label>
                                <input type="password" id="passwordInput" minLength="8" placeholder="Pelo menos 8 caracteres" required/>
                            </div>
                            <div className="inputWrapper">
                                <div className="radioWrapper">
                                    <input type="radio" name="role" id="supermercado"/>
                                    <label htmlFor="supermercado">Supermercado</label>
                               
                                    <input type="radio" name="role" id="ong"/>
                                    <label htmlFor="ong">Ong</label>
                                </div>
                            </div>
                            <button type="submit" onClick={submit}>Criar</button>
                        </div>
                    </fieldset>
                </form>
                <div className="login">
                    <p>
                        Você já tem uma conta? <a href="#" onClick={submit}>Fazer login</a>
                    </p>
                </div>
            </div>
            <div className="col02"></div>
        </div>
    </div>
    </div>
  )
}
