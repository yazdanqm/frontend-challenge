import axios from "axios";

const getNewsData = async (categories, sources , allCategories) => {
    let posts = []
    const query = encodeURIComponent(categories.join(" OR "))
    return new Promise(async (resolve, reject) => {

        // get news api data
        if (sources.includes('News Api')) {
            await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=9d4877323f9941109c59d5ea7db76375`).then(res => {
                res.data.articles.map(article => {
                    posts = [...posts, {
                        title: article?.title,
                        date: article?.publishedAt,
                        description: article?.description,
                        img: article?.urlToImage,
                        slug: article?.title?.toLowerCase().replaceAll(" ", "-"),
                        api: "News Api"
                    }]
                })
            }).catch(err => {
                reject(err)
            })
        }

        // get guardian data
        if (sources.includes('Guardian')) {
            await axios.get(`https://content.guardianapis.com/search?q=${query}&page-size=20&show-fields=thumbnail,trailText&api-key=3234f3e1-866c-4b97-bd9e-4805bf70bcc0`).then(res => {
                res.data?.response?.results?.map(article => {
                    posts = [...posts, {
                        title: article?.webTitle,
                        date: article?.webPublicationDate,
                        description: article?.fields?.trailText,
                        img: article?.fields?.thumbnail,
                        slug: article?.webTitle?.toLowerCase().replaceAll(" ", "-"),
                        api: "Guardian"
                    }]
                })
            }).catch(err => {
                reject(err)
            })
        }

        // get NewYorkTimes data , two times because api does not have page size parameter
        const getNewYorkTimesData = async (page) => {
            await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&sort=newest&api-key=G7SmXFSznQGGhMl1oZYyYaQsGv0QGlhZ`).then(res => {
                res.data?.response?.docs.map(article => {
                    posts = [...posts, {
                        title: article?.headline?.main,
                        date: article?.pub_date?.replace("+0000", "Z"),
                        description: article?.lead_paragraph,
                        img: article?.multimedia[0] ? 'https://static01.nyt.com/' + article?.multimedia[0]?.url : '/images/not_found.jpg',
                        slug: article?.headline?.main?.toLowerCase().replaceAll(" ", "-"),
                        api: "NewYork Times"
                    }]
                })
            }).catch(err => {
                reject(err)
            })
        }

        if (sources.includes('NewYork Times')) {
            await getNewYorkTimesData(1)
            await getNewYorkTimesData(2)
        }

        resolve(posts)

    });
}

export default getNewsData