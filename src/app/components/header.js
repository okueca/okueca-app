import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = ({ data, screen }) => {
  return (
    <section className=" flex-wrap border-b border-gray-500 p-5 mb-10">
      <div className="flex flex-row items-center gap-5 justify-between">
        <div className="flex flex-row items-center flex-wrap-mobile gap-5">
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
            <p className="text-wra">
              Okueca é uma organização africana sem fins lucrativos que pretende
              desenvolver soluções com a ajuda da tecnologia para auxiliar de
              alguma forma.
            </p>
            <div className="flex flex-row align-items-center flex-wrap gap-5 ">
              <div className="flex flex-row items-center gap-2">
                <BsFillPeopleFill />
                <div> {data?.length} community</div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <FaLocationDot />
                <div> 🇵🇹 Portugal/🇦🇴Angola/🇨🇻Cabo Verde</div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <MdEmail />
                <div> geral@okueca.com</div>
              </div>
            </div>
          </div>
        </div>

        {screen > "1024" && (
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
  );
};

export default Header;
