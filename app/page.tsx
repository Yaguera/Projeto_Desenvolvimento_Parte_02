import Image from "next/image";
import Voluntarios from "../public/voluntarios.jpg"
import Voluntarios2 from "../public/voluntarios2.jpg"

export default function Home() {
  return (
    <div className="max-container w-full mt-[100px]">
        <section id="#sobre" className="h-[80vh] flex items-center">
            <div className="block px-5 sm:flex gap-9">
                <div className="flex flex-col justify-center items-start md:w-[60%]" >
                    <h2 className="text-3xl  md:text-5xl font-bold text-[#FF7F11]">Conectando Supermercados & Organizações</h2>
                    <p className="text-lg mt-4 md:text-2xl"> <span>facilitando</span> doações, <span>ajudando</span> famílias. </p>
                    <button className="w-full sm:w-auto my-7 py-4 px-9 bg-[#FF7F11] font-semibold rounded-full text-white">Faça a diferença</button>
                </div>
                    <div className="flex items-center">
                        <Image src={Voluntarios} width={0} height={0} alt="voluntarios"
                        className="rounded-lg w-full object-cover shadow-lg" />
                    </div>
            </div>
        </section>
        <section className="my-9 h-fit flex items-center">
            <div className="block px-5 sm:flex gap-9 order-1 sm:order-2 " >
                
                    <Image src={Voluntarios2} width={0} alt="voluntarios"
                    className="hidden rounded-lg sm:block object-cover shadow-lg w-[40%]"/>

                <div className="flex flex-col justify-center items-start md:w-[60%] order-2 sm:order-1" >
                    <h2 className="text-3xl  md:text-6xl font-bold text-[#FF7F11]">Projeto Mercado Solidário</h2>
                    <p className="mt-4 text-justify">A plataforma Mercado Solidário foi criada com o propósito de reduzir o desperdício alimentar,
                        facilitando a doação de produtos próximos do vencimento. Conectamos supermercados a organizações
                        beneficentes, garantindo que alimentos ainda bons para consumo cheguem a quem mais precisa. Nosso
                        objetivo é criar uma rede colaborativa onde supermercados, organizações e indivíduos possam contribuir
                        para um mundo mais sustentável e solidário.</p>
                    <button className="w-full sm:w-auto my-7 py-4 px-9 bg-[#FF7F11] font-semibold rounded-full text-white">Quero fazer parte!</button>
                    <Image src={Voluntarios2} width={0} alt="voluntarios"
                    className="block rounded-lg sm:hidden object-cover shadow-lg"/>
                </div>
            </div> 
        </section>
    </div>
  );
}
