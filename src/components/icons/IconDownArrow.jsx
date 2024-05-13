const IconDownArrow = ({color , extraClass}) => {
    return (
        <svg className={'transition-all ' + extraClass} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill={color} d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"/>
        </svg>
    )
}
export default IconDownArrow