import BadgeComponent from "@/components/base/BadgeComponent.jsx";

const NewsCardComponent = ({post}) => {
    return (
        <div>
            <div className="aspect-[16/10] mb-6">
                <img src={post.img ?? '/images/not_found.jpg'} className="w-full h-full object-cover" alt="title" loading="lazy"/>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="text-purple text-s12sm sm:text-s12">Category</span>
                <h2 className="text-title text-s18sm sm:text-s18 font-semibold">{post.title}</h2>
                <p className="text-description text-s12sm sm:text-s12">
                    {post.description}
                </p>
                <BadgeComponent badge={post.api} />
            </div>
        </div>
    )
}
export default NewsCardComponent