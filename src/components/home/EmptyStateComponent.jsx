import IconSearch from "@/components/icons/IconSearch.jsx";

const emptyStateComponent = () => {
    return (
        <div className="h-[350px] flex flex-col items-center justify-center gap-3">
            <IconSearch size={50} color={"#909090"} />
            <div className="text-description text-s16sm sm:text-s16">Nothing Found, Please try again!</div>
        </div>
    )
}
export default emptyStateComponent