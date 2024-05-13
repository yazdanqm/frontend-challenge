import MainLayout from "../components/layout/MainLayout";
import NewsCardComponent from "@/components/home/NewsCardComponent.jsx";
import {useEffect, useState} from "react";
import getNewsData from "@/utils/getNewsData.js";
import LoadingComponent from "@/components/base/LoadingComponent.jsx";
import CustomizeComponent from "@/components/home/CustomizeComponent.jsx";
import getSearchedData from "@/utils/getSearchedData.js";
import SearchComponent from "@/components/home/SearchComponent.jsx";
import IconCancel from "@/components/icons/IconCancel.jsx";
import EmptyStateComponent from "@/components/home/EmptyStateComponent.jsx";
import {useNavigate} from "react-router-dom";

const HomeView = () => {

    // route data
    const navigate = useNavigate()

    // data
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState(['bitcoin', 'cars', 'health', 'food'])
    const [sources, setSources] = useState(['News Api', 'Guardian', 'NewYork Times'])
    const [selectedCategories, setSelectedCategories] = useState(categories)
    const [selectedSources, setSelectedSources] = useState(sources)
    const [searchMode, setSearchMode] = useState(false)
    const [searchedPosts, setSearchedPosts] = useState([])

    // methods
    const news = posts.map((post, i) => {
        return <NewsCardComponent post={post} key={i}/>
    })

    const searchedNews = searchedPosts.map((post, i) => {
        return <NewsCardComponent post={post} key={i}/>
    })

    const selectedCategoriesChangeHandler = (category) => {
        setSelectedCategories(category)
    }
    const selectedSourcesChangeHandler = (source) => {
        setSelectedSources(source)
    }

    const searchHandler = async (searchTerm, date, sources) => {
        setSearchMode(true)
        setLoading(true)
        await getSearchedData(posts, {searchTerm, date, sources}).then((res) => {
            setSearchedPosts(res)
            setLoading(false)
        })
    }

    const removeSearchFiltersHandler = () => {
        setSearchMode(false)
        setSearchedPosts([])
    }

    // effects
    useEffect(() => {

        // news data
        setLoading(true)
        getNewsData(selectedCategories, selectedSources, categories).then(res => {
            setPosts(res)
        }).catch(err => {
            navigate('/error')
        }).finally(() => {
            setLoading(false)
        })

    }, [selectedSources, selectedCategories]);


    return (
        <MainLayout>
            {loading && <LoadingComponent/>}
            <div>
                <div className="flex items-center gap-4 lg:gap-8">
                    <CustomizeComponent categories={categories} sources={sources}
                                        handleCategoriesChange={selectedCategoriesChangeHandler}
                                        handleSourcesChange={selectedSourcesChangeHandler}/>
                    <div className="h-[25px] w-[1px] bg-lowGray"></div>
                    <div className="flex items-center gap-2">
                        <SearchComponent handleSearch={searchHandler}/>
                        {searchMode &&
                            <button onClick={removeSearchFiltersHandler} className="button bg-red-500 hover:bg-red-600">
                                <IconCancel color={"#fff"} size={16}/>
                                Remove search filters
                            </button>}
                    </div>
                </div>
                <div
                    className={'mt-8 ' + ((searchMode && searchedPosts.length > 0) || (!searchMode && posts.length > 0) ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6' : '')}>
                    {searchMode ? searchedPosts.length > 0 ? searchedNews : <EmptyStateComponent/> :
                     posts.length > 0 ? news : <EmptyStateComponent/>}
                </div>
            </div>
        </MainLayout>
    );
};
export default HomeView;