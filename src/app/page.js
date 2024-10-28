"use client";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";
import { useState, useEffect } from "react";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaDocker,
  FaJenkins,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import {
  SiKubernetes,
  SiVisualstudiocode,
  SiPostman,
  SiNginx,
  SiGrafana,
  SiRubyonrails,
  SiTailwindcss,
} from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch("https://api.github.com/orgs/okueca/members", {
        headers: {
          Authorization: "Bearer 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",
        },
      });
      let data = await res.json();
      setData(data);
    }
    fetchPosts();
  }, []);

  return (
    <main className=" container mx-auto ">
      <section className=" flex-wrap border-b border-gray-500 p-5 mb-10">
        <div className="flex flex-row items-center gap-5 justify-between">
          <div className="flex flex-row items-center flex-wrap gap-5">
            <div>
              <Image
                src="/logo.jpeg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>

            <div className="flex flex-col justify-center align-items-center gap-4">
              <h6>OKWETCHA</h6>
              <p>
                Okueca is a non-profit African organization that aims to develop
                solutions with the help of technology in order to assist in some
                way.
              </p>
              <div className="flex flex-row align-items-center flex-wrap gap-5 ">
                <div className="flex flex-row items-center gap-2">
                  <BsFillPeopleFill />
                  <div> {data?.length} community</div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaLocationDot />
                  <div> Portugal/Angola/Cabo Verde</div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <MdEmail />
                  <div> okueca@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {window.innerWidth > "1024" && (
            <div className="">
              <Image
                src="/animationbrain.gif"
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-row gap-5   flex-wrap w-100">
        <div className="main-section ">
          <div className="flex flex-col border border-gray-500 p-5">
            <div className="border-b border-gray-500 mb-3 pb-2">
              <h6>Olá 👋</h6>
            </div>
            <p>
              🙋‍ Okwetcha significa DAR/DOAR , a ideia é criar uma comunidade
              que com auxilio da Engenharia ajude de algum modo países africanos
              ou comunidades africanas a resolverem alguns problemas. 🌈
            </p>
          </div>

          <div className="flex-1 py-6  text-white">
            <h1 className="text-2xl font-bold mb-4">
              Como Desenvolvemos os nossos Projectos.
            </h1>

            <div className=" flex flex-col gap-1">
              {/* Task Suggestions */}
              <div className="bg-gray-700 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">
                  Planeamento e Arquitetura
                </h2>
                <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-wide">
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
                <h2 className="text-lg font-semibold">
                  Codificação colaborativa
                </h2>
                <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-wide">
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
                <h2 className="text-lg font-semibold">Teste de Software</h2>
                <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-wide">
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
                <h2 className="text-lg font-semibold">Automação & CI/CD</h2>
                <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-wide">
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
                <h2 className="text-lg font-semibold">Contenerização</h2>
                <p className="text-gray-300 mt-1 text-wrap leading-6 tracking-wide ">
                  A contenerização é uma tecnologia que permite empacotar uma
                  aplicação e todas as suas dependências (bibliotecas,
                  configurações, etc.) em um "container" isolado, que pode ser
                  executado de maneira consistente em diferentes ambientes. Ela
                  garante que o software funcione de forma previsível,
                  independentemente de onde está sendo executado (como no
                  ambiente de desenvolvimento, homologação, produção ou entre
                  diferentes plataformas de nuvem).
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* side menu */}
        <div className="side-section">
          <div className="pl-4 py-4 border-b border-gray-700">
            <h2 className="text-sm uppercase mb-2 text-gray-400">
              Social Media
            </h2>
            <div className="flex flex-row gap-3 align-items-center">
              <FaInstagram size={35} />
              <FaFacebook size={35} />
              <FaTiktok size={35} />
              <FaXTwitter size={35} />
            </div>
          </div>

          <div className="p-4  border-b border-gray-700">
            <h2 className="text-sm uppercase mb-2 text-gray-400">
              Eventos
            </h2>
          </div>

          <div className="">
            <div className="p-4 flex-1  border-b border-gray-700">
              <h2 className="text-sm uppercase mb-2 text-gray-400">Projects</h2>
              <ul className="space-y-3">
                <div>
                  <li className="text-blue-500">
                    📁 video-player-publicita-me
                  </li>
                  <small className="text-gray-400 pl-6">
                    {" "}
                    Video player with quee to handle different requests
                  </small>
                  <div className="flex flex-row align-items-center pl-6  gap-1 w-100">
                    <div className="w-2 bg-blue-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">Python</li>
                    </div>
                  </div>
                </div>

                <div>
                  <li className="text-blue-500">📁 publicite-me</li>
                  <small className="text-gray-400 pl-6">
                    {" "}
                    Video player with quee to handle different requests
                  </small>

                  <div className="flex flex-row align-items-center pl-6  gap-2 w-100">
                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-yellow-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-700">Html</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <li className="text-blue-500">📁 Leaflet</li>
                  <small className="text-gray-400 pl-6">
                    {" "}
                    Video player with quee to handle different requests
                  </small>

                  <div className="flex flex-row align-items-center pl-6  gap-2 w-100">
                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-yellow-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-700">Html</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <li className="text-blue-500">📁 bravos</li>
                  <small className="text-gray-400 pl-6">
                    {" "}
                    Video player with quee to handle different requests
                  </small>

                  <div className="flex flex-row align-items-center pl-6  gap-2 w-100">
                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-yellow-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-700">Html</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <li className="text-blue-500">📁 demo-repository</li>
                  <small className="text-gray-400 pl-6">
                    {" "}
                    Video player with quee to handle different requests
                  </small>

                  <div className="flex flex-row align-items-center pl-6  gap-2 w-100">
                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-yellow-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-700">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-700">Html</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            <div className="">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-sm uppercase mb-2 text-gray-400">
                  Top Languages
                </h2>

                <ul className="flex space-x-3 flex-wrap">
                  <div className="flex flex-row align-items-center   gap-1 w-100">
                    <div className="w-2 bg-yellow-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">JavaScript</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-blue-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">Python</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-blue-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">Typescript</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">Ruby</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-700">Html</li>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="p-4 border-b border-gray-700 tool-max-with">
                <h2 className="text-sm uppercase mb-2 text-gray-400">
                  TOP TOOLS
                </h2>
                <div className="flex flex-row align-items-center flex-wrap  gap-4 w-100">
                  <div className="flex  flex-col ">
                    <SiKubernetes size={35} className="self-center" />
                    <small>Kubernetes</small>
                  </div>
                  <div className="flex  flex-col ">
                    <FaDocker size={35} className="self-center" />
                    <small>Docker</small>
                  </div>

                  <div className="flex  flex-col ">
                    <SiVisualstudiocode size={35} className="self-center" />
                    <small>Vs Code</small>
                  </div>

                  <div className="flex  flex-col ">
                    <FaJenkins size={35} className="self-center" />
                    <small>Jenkins</small>
                  </div>

                  <div className="flex  flex-col ">
                    <SiPostman size={35} className="self-center" />
                    <small>Postman</small>
                  </div>

                  <div className="flex  flex-col ">
                    <SiNginx size={35} className="self-center" />
                    <small>Nginx</small>
                  </div>

                  <div className="flex  flex-col ">
                    <SiGrafana size={35} className="self-center" />
                    <small>Grafana</small>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-700 tool-max-with">
                <h2 className="text-sm uppercase mb-2 text-gray-400">
                  TOP Frameworks
                </h2>
                <div className="flex flex-row items-center flex-wrap  gap-4 w-100">
                  <div className="flex  flex-col ">
                    <SiRubyonrails size={35} />

                    <small>Rails</small>
                  </div>
                  <div className="flex  flex-col ">
                    <FaReact size={35} className="self-center" />
                    <small>React</small>
                  </div>

                  <div className="flex  flex-col ">
                    <FaNodeJs size={35} className="self-center" />
                    <small>Nodejs</small>
                  </div>

                  <div className="flex  flex-col ">
                    <SiTailwindcss size={35} className="self-center" />
                    <small>Tailwind</small>
                  </div>

                  <div className="flex  flex-col ">
                    <FaBootstrap size={35} className="self-center" />
                    <small>BootStrap</small>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-sm uppercase mb-2 text-gray-400">
                  Desenvolvedores
                </h2>

                <div className="flex gap-2 flex-wrap">
                  {data?.map((d) => (
                    <Avatar.Root className="AvatarRoot" key={d.id}>
                      <Avatar.Image
                        className="AvatarImage"
                        src={d.avatar_url}
                        alt={d.login}
                      />
                      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        CT
                      </Avatar.Fallback>
                    </Avatar.Root>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col border border-gray-500 p-5 mb-5">
        <div className="border-b border-gray-500 mb-3 pb-2">
          <h6>Olá 👋</h6>
        </div>
        <p>
          🙋‍ Okwetcha significa DAR/DOAR , a ideia é criar uma comunidade que
          com auxilio da Engenharia ajude de algum modo países africanos ou
          comunidades africanas a resolverem alguns problemas. 🌈
        </p>
      </div>
    </main>
  );
}
