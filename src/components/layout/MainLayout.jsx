import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col gap-20 container mx-auto px-6 py-10">
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    )
}
export default MainLayout