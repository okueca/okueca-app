


const Main = () =>{
return(
    <div className="main-section ">
    <div className="flex flex-col border border-gray-500 p-5">
      <div className="border-b border-gray-500 mb-3 pb-2">
        <h6>Olá 👋</h6>
      </div>
      <p>
        🙋‍ Okwetcha significa DAR/DOAR , a ideia é criar uma comunidade
        que com auxilio da Engenharia ajude de algum modo países africanos
        ou comunidades africanas a resolverem alguns problemas. 🎮♟️💻🔌🦾
      </p>
    </div>

    <div className="flex-1 py-6  text-white">
      <h1 className="text-2xl s font-bold mb-4 leading-6 tracking-widest">
        Como Desenvolvemos os nossos Projectos.
      </h1>

      <div className=" flex flex-col gap-1">
        {/* Task Suggestions */}
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Planeamento e Arquitetura
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest">
            Planeamento e a Arquitetura de software são fases cruciais no
            desenvolvimento de sistemas complexos e consistem em definir
            como o software será estruturado, como os seus componentes
            interagem e de que forma ele atenderá aos requisitos
            funcionais e não funcionais. Estes conceitos vão muito além do
            código, pois englobam decisões estratégicas e estruturais que
            vão orientar toda a implementação, manutenção e evolução do
            sistema.
          </p>
        </div>
        {/* Connector */}
        <div className="border-l-2 border-gray-500 h-10 ml-16"></div>

        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Codificação colaborativa
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest">
            A codificação colaborativa é um aspecto vital do
            desenvolvimento de software, especialmente em equipes e
            projetos de grande escala. Esse processo envolve várias
            práticas, ferramentas e metodologias que facilitam o trabalho
            conjunto e a criação de um código consistente, eficiente e
            fácil de manter.
          </p>
        </div>
        {/* Connector */}
        <div className="border-l-2 border-gray-500 h-10 ml-16"></div>

        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Teste de Software
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest">
            O teste de software é um processo essencial no desenvolvimento
            de sistemas, utilizado para verificar se uma aplicação ou
            sistema está funcionando conforme o esperado e atende aos
            requisitos especificados. Esse processo ajuda a identificar
            erros, garantir a qualidade e aumentar a confiabilidade do
            software antes de ser lançado para os usuários finais. Vamos
            detalhar os principais tipos de testes de software, abordagens
            e boas práticas.
          </p>
        </div>
        {/* Connector */}
        <div className="border-l-2 border-gray-500 h-10 ml-16"></div>

        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Automação & CI/CD
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest">
            A automação e as práticas de CI/CD (Continuous
            Integration/Continuous Delivery) revolucionaram o
            desenvolvimento de software, melhorando a qualidade, a
            velocidade e a confiabilidade dos projetos. A ideia é criar um
            fluxo de trabalho contínuo, onde as mudanças no código são
            testadas, integradas e implantadas automaticamente, reduzindo
            o esforço manual e o tempo de entrega.
          </p>
        </div>
        {/* Connector */}
        <div className="border-l-2 border-gray-500 h-10 ml-16"></div>

        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Contenerização
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest ">
            A contenerização é uma tecnologia que permite empacotar uma
            aplicação e todas as suas dependências (bibliotecas,
            configurações, etc.) em um container isolado, que pode ser
            executado de maneira consistente em diferentes ambientes. Ela
            garante que o software funcione de forma previsível,
            independentemente de onde está sendo executado (como no
            ambiente de desenvolvimento, homologação, produção ou entre
            diferentes plataformas de nuvem).
          </p>
        </div>
        <div className="border-l-2 border-gray-500 h-10 ml-16"></div>

        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold leading-6 tracking-widest">
            Deployment
          </h2>
          <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-widest ">
            Processo de disponibilizar uma aplicação ou sistema em um
            ambiente específico, como produção, para que os usuários
            finais possam acessá-lo e utilizá-lo. Este processo envolve
            várias etapas, como configurar servidores, definir variáveis
            de ambiente, executar scripts de configuração e validar o
            funcionamento da aplicação após sua disponibilização.
          </p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Main