

interface PhotoProps {
    photo: {
        title : string
        thumbnailUrl: string
    }
}


export const Photo: React.FC<PhotoProps> = ({ photo }) => {

    return (
        <li>
            <div> {photo.title}</div>
            <img src={photo.thumbnailUrl} alt="" />
        </li>
    )
}