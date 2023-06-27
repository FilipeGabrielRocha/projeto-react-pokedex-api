import { Link } from "react-router-dom"

import "./index.css"

export const Contato = () => {
    return (
        <section>
            <h1>Formas de entrar em contato comigo:</h1>
            <div>
                <Link to={"/"}>Voltar a página principal</Link>
            </div>
        </section>
    )
}