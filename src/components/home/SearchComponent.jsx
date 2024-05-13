import IconSearch from "@/components/icons/IconSearch.jsx";
import {useEffect, useRef, useState} from "react";

const SearchComponent = ({handleSearch}) => {

    // data
    const [searchTerm, setSearchTerm] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [selectedDateType, setSelectedDateType] = useState('')
    const [selectedSources, setSelectedResources] = useState(['News Api'])
    const modal = useRef(null)

    // methods
    const clickSearchHandler = () => {
        handleSearch(searchTerm, selectedDateType, selectedSources)
        setShowSearch(false)
    }

    const changeSourceOptionHandler = (e) => {
        const {value, checked} = e.target;

        if (checked) {
            setSelectedResources([...selectedSources, value])
        } else {
            if (selectedSources.length > 1) {
                setSelectedResources(selectedSources.filter(item => item !== value))
            } else {
                alert('You should at least select one of resources')
            }
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if(showSearch && modal.current && !modal.current.contains(event.target)) {
                setShowSearch(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSearch]);

    return (
        <>
            <div className="flex items-center gap-4">
                <button onClick={() => setShowSearch(true)}
                        className="button bg-purple hover:bg-purpleDarker">
                    <IconSearch color={"#fff"} size={16}/>
                    <span>Search</span>
                </button>
            </div>
            <div  className={'fixed inset-0 backdrop-blur bg-[#00000033] flex items-center justify-center p-5 lg:p-10 transition-all ' + (showSearch ? 'opacity-100 visible' : '!opacity-0 invisible')}>
                <div ref={modal} className={'w-[400px] bg-white rounded-[15px] lg:rounded-[25px] p-4 lg:p-8 transition-all duration-500 delay-300 ' + (showSearch ? 'scale-100 opacity-100' : 'scale-125 opacity-0')}>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <div>Search article</div>
                        <button onClick={() => setShowSearch(false)}
                                className="w-6 h-6 rounded-full bg-lowGray text-s12 text-description transition-all hover:!text-black">
                            X
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <input className="input-text" placeholder="Type something ..."
                               onInput={(e) => setSearchTerm(e.target.value)}/>
                        <div>
                            <div className="text-title text-s14sm sm:text-s14 mb-2">Source :</div>
                            <label className="label flex items-center gap-1.5 mb-2">
                                <input type="checkbox" value="News Api" checked={selectedSources.includes('News Api')}
                                       onChange={changeSourceOptionHandler}/>
                                News Api
                            </label>
                            <label className="label flex items-center gap-1.5 mb-2">
                                <input type="checkbox" value="Guardian" checked={selectedSources.includes('Guardian')}
                                       onChange={changeSourceOptionHandler}/>
                                Guardian
                            </label>
                            <label className="label flex items-center gap-1.5">
                                <input type="checkbox" value="NewYork Times"
                                       checked={selectedSources.includes('NewYork Times')}
                                       onChange={changeSourceOptionHandler}/>
                                NewYork Times
                            </label>
                        </div>
                        <div>
                            <div className="text-title text-s14sm sm:text-s14 mb-2">Date :</div>
                            <label className="label flex items-center gap-1.5 mb-2">
                                <input type="radio" onChange={(e) => setSelectedDateType('latest')}
                                       checked={selectedDateType === 'latest'} name="date" value="Latest"/>
                                Latest
                            </label>
                            <label className="label flex items-center gap-1.5 mb-2">
                                <input type="radio" onChange={(e) => setSelectedDateType('oldest')}
                                       checked={selectedDateType === 'oldest'} name="date" value="Oldest"/>
                                Oldest
                            </label>
                        </div>
                        <button onClick={clickSearchHandler}
                                className="bg-purple hover:bg-purpleDarker text-white text-s14sm sm:text-s14 text-center py-4 rounded-lg mt-4 transition-all">Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchComponent