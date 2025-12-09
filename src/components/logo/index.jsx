import Link from "next/link";
import Image from "next/image";


const Logo = () => {
    return(
        
        <Link href={"/"}>
        <Image className=" brightness-0 invert bg-transparent items-center"
            src="/suit.png"
            width={150}
            height={50}
            alt="Logo"/>
        </Link>
        
        
    )
}
export default Logo;