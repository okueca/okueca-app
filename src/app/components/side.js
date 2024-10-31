import * as Avatar from "@radix-ui/react-avatar";

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
import { FaXTwitter } from "react-icons/fa6";
import {
  SiKubernetes,
  SiVisualstudiocode,
  SiPostman,
  SiNginx,
  SiGrafana,
  SiRubyonrails,
  SiTailwindcss,
  SiAnsible,
} from "react-icons/si";


const Side = ({data})=>{
    return(
        <div className="side-section w-100">
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
            <h2 className="text-sm uppercase mb-2 text-gray-400">Eventos</h2>
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
                      <li className="text-gray-200">Python</li>
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
                        <li className="text-gray-200">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-200">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-200">Html</li>
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
                        <li className="text-gray-200">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-200">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-200">Html</li>
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
                        <li className="text-gray-200">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-200">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-200">Html</li>
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
                        <li className="text-gray-200">JavaScript</li>
                      </div>
                    </div>

                    <div className="flex flex-row align-items-center  gap-1 w-100">
                      <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                      <div>
                        <li className="text-gray-200">Ruby</li>
                      </div>

                      <div className="flex flex-row align-items-center  gap-1 w-100">
                        <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                        <div>
                          <li className="text-gray-200">Html</li>
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
                      <li className="text-gray-200">JavaScript</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-blue-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-200">Python</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-blue-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-200">Typescript</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-red-400 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-200">Ruby</li>
                    </div>
                  </div>

                  <div className="flex flex-row align-items-center  gap-1 w-100">
                    <div className="w-2 bg-red-800 h-2 rounded self-center"></div>
                    <div>
                      <li className="text-gray-200">Html</li>
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
                    <SiAnsible size={35} className="self-center" />
                    <small>Ansible</small>
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
    )
}

export default Side