import axios from "axios";

const getNewsApiData = async () => {
    let posts = []
    return new Promise(async (resolve, reject) => {
        // get news api data
        await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9d4877323f9941109c59d5ea7db76375').then(res => {
            res.data.articles.map(article => {
                posts = [...posts, {
                    title: article?.title,
                    date: article?.publishedAt,
                    description: article?.description,
                    img: article?.urlToImage,
                    slug: article?.title?.toLowerCase().replaceAll(" ", "-"),
                    api: "News api"
                }]
            })
        }).catch(err => {
            reject('Error')
        })

        // get guardian data
        await axios.get('https://content.guardianapis.com/search?q=bitcoin&show-fields=thumbnail,trailText&api-key=3234f3e1-866c-4b97-bd9e-4805bf70bcc0').then(res => {
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
            reject('Error')
        })

        // get NewYorkTimes data
        await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bitcoin&api-key=G7SmXFSznQGGhMl1oZYyYaQsGv0QGlhZ').then(res => {
            res.data?.response?.docs.map(article => {
                posts = [...posts, {
                    title: article?.headline?.main,
                    date : article?.pub_date,
                    description : article?.lead_paragraph,
                    img : article?.multimedia[0] ? 'https://static01.nyt.com/' + article?.multimedia[0]?.url : '/images/not_found.jpg',
                    slug : article?.headline?.main?.toLowerCase().replaceAll(" ", "-"),
                    api : "NewYork Times"
                }]
            })
        }).catch(err => {
            reject('Error')
        })

        resolve(posts)

    });
}

export default getNewsApiData