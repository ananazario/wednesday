import './style.css'
import { Link } from "react-router-dom";

export default function PaginaDeErro() {
    return (
        <section className='section-error'>
            <section>
                <p className='titulo-error'>Don't cry, it's just a</p>
                <h1 className='message-error'>404</h1>
                <Link to="/" className='link-error'>Back to homepage</Link>
            </section>
            <div>
                <img className='image-error' src="https://onlineseries.com.br/wp-content/uploads/2022/11/maozinha-Wandinha-ator.jpg" alt="" />
            </div>
        </section>
    )
}