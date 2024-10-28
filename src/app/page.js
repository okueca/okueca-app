"use client";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import {
  SiKubernetes,
  SiVisualstudiocode,
  SiPostman,
  SiNginx,
  SiGrafana,
} from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
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
                  <div> 5 community</div>
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

{
  window.innerWidth > "768" &&
 <div className="">
 <Image
   src="/animationbrain.gif"
   width={150}
   height={150}
   alt="Picture of the author"
 />
</div>

}
         
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
                <p className="text-gray-400 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              {/* Connector */}
              <div className="border-l-2 border-gray-500 h-10 ml-14"></div>

              <div className="bg-gray-700 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Collaborative coding</h2>
                <p className="text-gray-400 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              {/* Connector */}
              <div className="border-l-2 border-gray-500 h-10 ml-14"></div>

              <div className="bg-gray-700 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Automation and CI/CD</h2>
                <p className="text-gray-400 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              {/* Connector */}
              <div className="border-l-2 border-gray-500 h-10 ml-14"></div>
              <div className="bg-gray-700 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Contenerização</h2>
                <p className="text-gray-400 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
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
              Discussions
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

              <div className="p-4">
                <h2 className="text-sm uppercase mb-2 text-gray-400">
                  Desenvolvedores
                </h2>
                <div className="flex gap-2">
                  <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                      className="AvatarImage"
                      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                      alt="Colm Tuite"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                      CT
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                      className="AvatarImage"
                      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                      alt="Pedro Duarte"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                      JD
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Avatar.Root className="AvatarRoot">
                    <Avatar.Fallback className="AvatarFallback">
                      PD
                    </Avatar.Fallback>
                  </Avatar.Root>
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
