


export const Photo = ({ photo }) => {

    return (
        <li>
            <div> {photo.title}</div>
            <img src={photo.thumbnailUrl} alt="" />
        </li>
    )
}