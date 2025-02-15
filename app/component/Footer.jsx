import {MdMarkEmailRead} from "react-icons/md";
import {IoIosCall} from "react-icons/io";
import {FaBehance, FaGit, FaInstagram} from "react-icons/fa";
import {TiSocialFacebookCircular} from "react-icons/ti";


const Footer = () => {
    return (
        <div className="mt-[150px] companyBG py-8">
            <div className="max-w-[1400px] mx-auto ">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold">Let’s GET IN <span className="hidden">TOUCE</span>
                    </h3>

                    <div className="flex justify-end gap-5 items-center ">
                        <div className="flex items-center gap-2">
                            <IoIosCall className="companyText" />
                            <h1>01722924089</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMarkEmailRead className="companyText" />
                            <h1>gazienamu1998@gmail.com</h1>
                        </div>
                    </div>
                </div>

                <div className="mt-3 gap-5 flex items-center justify-between">
                    <h3 className="text-3xl font-semibold">TOUCE  </h3>
                    <span className="block flex-shrink-1 w-full  border border-[#FBC76A] "></span>
                    <div className="py-2 flex items-center gap-4 justify-end">
                        <FaGit className="text-2xl" />
                        <FaBehance className="text-2xl" />
                        <TiSocialFacebookCircular className="text-2xl" />
                        <FaInstagram className="text-2xl" />
                    </div>
                </div>

            </div>
        </div>
);
};

export default Footer;