import IconCustomize from "@/components/icons/IconCustomize.jsx";
import SelectComponentWithCheckbox from "@/components/base/SelectComponentWithCheckbox.jsx";
import {useState} from "react";

const CustomizeComponent = ({categories, sources, handleCategoriesChange, handleSourcesChange}) => {

    // data
    const [showCustomize , setShowCustomize] = useState(false)
    // methods
    const selectedCategoriesChangeHandler = (category) => {
        handleCategoriesChange(category)
        setShowCustomize(false)
    }
    const selectedSourcesChangeHandler = (source) => {
        handleSourcesChange(source)
        setShowCustomize(false)
    }

    return (
        <>
            <div onClick={(e) => {setShowCustomize(false)}} className={'fixed inset-0 backdrop-blur bg-[#00000033] flex items-center justify-center p-10 lg:!hidden transition-all ' + (showCustomize ? '' : '!hidden')}></div>
            <button onClick={() => setShowCustomize(true)} className="button bg-purple hover:bg-purpleDarker lg:hidden">
                <IconCustomize color="#fff" size={16} />
                Cusomize
            </button>
            <div
                className={'flex max-lg:fixed max-lg:w-[280px] max-lg:bg-white max-lg:inset-y-0 max-lg:flex-col lg:items-center gap-4 max-lg:p-6 transition-all ' + (showCustomize ? 'max-lg:left-0 max-lg:opacity-100 max-lg:visible' : 'max-lg:left-[-300px] max-lg:opacity-0 max-lg:invisible')}>
                <div className="flex items-center gap-2">
                    <IconCustomize color="#845dda" size={24}/>
                    <div className="text-title text-s16sm sm:text-s16 lg:hidden">
                        Customize
                    </div>
                </div>
                <SelectComponentWithCheckbox options={categories} title="Categories"
                                             handleChange={selectedCategoriesChangeHandler}/>
                <SelectComponentWithCheckbox options={sources} title="Sources"
                                             handleChange={selectedSourcesChangeHandler}/>
            </div>
        </>
    )
}
export default CustomizeComponent