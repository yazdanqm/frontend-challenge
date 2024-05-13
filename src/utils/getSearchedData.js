const getSearchedData = (posts, {searchTerm = '', date, sources}) => {
    let searchedPosts = []

    return new Promise((resolve, reject) => {

        if (searchTerm?.trim()?.length > 0) {
            searchedPosts = posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            searchedPosts = [...posts]
        }

        if (date) {
            if (date === 'oldest') {
                searchedPosts.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                })
            } else {
                searchedPosts.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date)
                })
            }
        }

        searchedPosts = searchedPosts.filter(post => {
            if (sources.includes(post.api)) {
                return post
            }
        })

        console.log(searchedPosts)
        resolve(searchedPosts)
    })
}
export default getSearchedData