import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col border border-gray-500 p-5 mb-5">
      <div className="border-b border-gray-500 mb-3 pb-2">
        <div className="flex flex-row gap-3 align-items-center">
          <FaInstagram size={20} />
          <FaFacebook size={20} />
          <FaTiktok size={20} />
          <FaXTwitter size={20} />
        </div>
        <p className="py-3">
          🙋💻 O código é a tela onde a imaginação encontra a lógica; cada linha
          que escreves tem o poder de criar, inovar e transformar. Continua a
          avançar, mesmo quando surgirem bugs — porque cada erro ultrapassado é
          um passo mais perto da maestria.
        </p>
        <p>— Continua a programar, continua a criar! 🚀</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <MdEmail />
        <div> okueca@gmail.com</div>
        <p>okueca&#169;2021</p>
      </div>
    </div>
  );
};

export default Footer;
