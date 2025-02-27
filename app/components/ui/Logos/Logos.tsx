import Image from "next/image";

const Logos = ({ homeLogo, visitorLogo }) => {
    
	return (
        <>
        {/* {homeLogo && <Image src={homeLogo} width={50} height={50} alt="" />} */}
        <Image src={homeLogo} width={50} height={50} alt="" />
        </>
		
	);
};

export default Logos;
