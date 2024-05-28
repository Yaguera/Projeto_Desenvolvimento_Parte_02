import  './home.css'
import voluntarios from '../../assets/images/voluntarios.jpg';
import voluntarios2 from '../../assets/images/voluntarios2.jpg';


export default function Home() {
return (
<>
        <main className="section desktop">
            <div className="box box1" >
                <h1 className="box-content">Conectando Supermercados e Organizações</h1>
                <p className="box-content">Nosso projeto tem como objetivo facilitar a doação eficiente de produtos próximos do vencimento,
                conectando supermercados a organizações beneficentes.</p>
                <button>Quero fazer a diferença</button>
            </div>
            <div className="box box2">
                <img src={voluntarios} alt="Imagem de Doação"/>
            </div>
        </main>
        <section id="sobre" className="section desktop">
            <div className="box box1">
                <img src={voluntarios2} alt="Imagem de Doação"/>
            </div>
            <div className="box box2" >
                <h2 className="box-content">Projeto Mercado Solidário</h2>
                <p className="box-content">A plataforma Mercado Solidário foi criada com o propósito de reduzir o desperdício alimentar, 
                    facilitando a doação de produtos próximos do vencimento. Conectamos supermercados a organizações
                    beneficentes, garantindo que alimentos ainda bons para consumo cheguem a quem mais precisa. Nosso 
                    objetivo é criar uma rede colaborativa onde supermercados, organizações e indivíduos possam contribuir
                    para um mundo mais sustentável e solidário.</p>
                    <button>Quero fazer parte do Mercado Solidário</button>
            </div>   
        </section>

        
        <main className="section moveis">
            <div className="box box2">
                <img src={voluntarios2} alt="Imagem de Doação"/>
            </div>
            <div className="box box1" >
                <h1 className="box-content">Conectando Supermercados e Organizações</h1>
                <p className="box-content">Nosso projeto tem como objetivo facilitar a doação eficiente de produtos próximos do vencimento,
                conectando supermercados a organizações beneficentes.</p>
                <button>Quero fazer a diferença</button>
            </div>
        </main>
        <section id="sobre" className="section moveis">
            <div className="box box1">
                <img src="" alt="Imagem de Doação"/>
            </div>
            <div className="box box2" >
                <h2 className="box-content">Projeto Mercado Solidário</h2>
                <p className="box-content">A plataforma Mercado Solidário foi criada com o propósito de reduzir o desperdício alimentar, 
                    facilitando a doação de produtos próximos do vencimento. Conectamos supermercados a organizações
                    beneficentes, garantindo que alimentos ainda bons para consumo cheguem a quem mais precisa. Nosso 
                    objetivo é criar uma rede colaborativa onde supermercados, organizações e indivíduos possam contribuir
                    para um mundo mais sustentável e solidário.</p>
                    <button>Quero fazer parte do Mercado Solidário</button>
            </div>
        </section>
        <footer>
            <p>Todos os direitos reservados.</p>
        </footer>
</>
)
}
