const IconCustomize = ({color , size = 24}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill={color}
                  d="M3 3h8v8H3zm2 2v4zm8-2h8v8h-8zm2 2v4zM3 13h8v8H3zm2 2v4zm11-2h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-1-8v4h4V5zM5 5v4h4V5zm0 10v4h4v-4z"/>
        </svg>
    )
}
export default IconCustomize