import IconDownArrow from "@/components/icons/IconDownArrow.jsx";
import {useEffect, useRef, useState} from "react";

const SelectComponentWithCheckbox = ({options, title, handleChange}) => {

    // data
    const [showOption, setShowOptions] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState(options)
    const [updated, setUpdated] = useState(false)
    const selectBox = useRef(null)

    // methods
    useEffect(() => {
        if (updated) {
            handleChange(selectedOptions)
        }
    }, [selectedOptions]);

    useEffect(() => {
        function handleClickOutside(event) {
            if(showOption && selectBox.current && !selectBox.current.contains(event.target)) {
                setShowOptions(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showOption]);

    const changeSelectedOptionHandler = (event) => {
        const {value, checked} = event.target;

        if (checked) {
            setSelectedOptions([...selectedOptions, value])
        } else {
            if (selectedOptions.length > 1) {
                setSelectedOptions(selectedOptions.filter(item => item !== value))
            } else {
                alert('You should at least select one of ' + title)
            }
        }
        setUpdated(true)
        setShowOptions(false)
    }

    const optionsList = options.map((option, index) => {
        return (
            <div key={option + index} className="flex items-center justify-between gap-2">
                <label className="cursor-pointer" htmlFor={option + index + title}>{option}</label>
                <input onChange={changeSelectedOptionHandler} id={option + index + title} value={option}
                       type={"checkbox"} checked={selectedOptions.includes(option)}/>
            </div>
        )
    })

    return (
        <div ref={selectBox} className="relative">
            <div onClick={() => setShowOptions(!showOption)}
                 className="flex items-center justify-between w-full lg:min-w-[170px] gap-2 bg-lowGray rounded-md px-3 py-1 text-title cursor-pointer">
                <span>{title ?? selectedOption}</span>
                <IconDownArrow extraClass={showOption && 'rotate-180'}/>
            </div>
            <div
                className={'absolute left-0 right-0 bg-lowGray z-20 rounded-md p-3 flex flex-col gap-2 max-h-[160px] overflow-y-auto transition-all' + (showOption ? ' opacity-100 visible top-11' : ' !opacity-0 invisible top-14')}>
                {optionsList}
            </div>
        </div>
    )
}
export default SelectComponentWithCheckbox