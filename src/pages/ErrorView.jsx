import {Link} from "react-router-dom";
import IconWarn from "@/components/icons/IconWarn.jsx";

const ErrorView = () => {
    return <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-2">
        <IconWarn color="#909090" size={50} />
        <div className="text-s16sm sm:text-s16 text-description">Something went wrong!</div>
        <Link to={'/'} className="button bg-purple hover:bg-purpleDarker" >Go home</Link>
    </div>
}
export default ErrorView