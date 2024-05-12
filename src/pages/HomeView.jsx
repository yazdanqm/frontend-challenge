import MainLayout from "../components/layout/MainLayout";
import NewsCardComponent from "@/components/home/NewsCardComponent.jsx";
import {useEffect, useState} from "react";
import getNewsApiData from "@/utils/getNewsApiData.js";
import LoadingComponent from "@/components/base/LoadingComponent.jsx";

const HomeView = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const fakePosts = posts.map((post, i) => {
        return <NewsCardComponent post={post} key={i}/>
    })

    useEffect(() => {

        // news api
        getNewsApiData().then(res => {
            setPosts(res)
        }).catch(err => {

        }).finally(() => {
            setLoading(false)
        })
    }, []);


    return (
        <MainLayout>
            {loading && <LoadingComponent/>}
            <div className="grid grid-cols-5 gap-6">
                {fakePosts}
            </div>
        </MainLayout>
    );
};
export default HomeView;