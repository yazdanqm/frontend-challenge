import IconLoading from "@/components/icons/IconLoading.jsx";

const LoadingComponent = () => {
    return (
        <div className="bg-white fixed inset-0 z-10 flex flex-col gap-2 items-center justify-center">
            <IconLoading color="#845dda" />
            <span>Loading</span>
        </div>
    )
}

export default LoadingComponent