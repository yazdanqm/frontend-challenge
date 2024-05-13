import IconDownArrow from "@/components/icons/IconDownArrow.jsx";
import {useState} from "react";

const selectComponent = ({options , title}) => {

    // data
    const [showOption, setShowOptions] = useState(false)
    const [selectedOption , setSelectedOption] = useState(options[0])

    // methods
    const changeSelectedOptionHandler = (option) => {
        setSelectedOption(option)
        setShowOptions(false)
    }

    const optionsList = options.map((option , index) => {
        return (
            <div onClick={() => changeSelectedOptionHandler(option)} className={option === selectedOption ? 'text-purple' : ''} key={option + index}>{option}</div>
        )
    })

    return (
        <div className="relative">
            <div onClick={() => setShowOptions(!showOption)}
                 className="flex items-center justify-between min-w-[120px] gap-2 bg-lowGray rounded-md px-3 py-1 text-title cursor-pointer">
                <span>{title ?? selectedOption}</span>
                <IconDownArrow extraClass={showOption && 'rotate-180'} />
            </div>
            <div className={'absolute left-0 right-0 bg-lowGray rounded-md p-3 flex flex-col gap-1 max-h-[160px] overflow-y-auto transition-all' + (showOption ? ' opacity-100 top-11' : ' !opacity-0 top-14')}>
                {optionsList}
            </div>
        </div>
    )
}
export default selectComponent