import { Photo } from "./Photo"
import { useParams } from "react-router-dom"
import { setFilteredText } from "../redux/Photos/PhotoSlice"
import style from "../styles/Photos.module.scss"
import { useTypedDispatch, useTypedSelector } from "../hooks/useTypedSelector"

interface PhotosProps {
    albumId: number
    id: number
    title: string
    thumbnailUrl: string
}



export const Photos: React.FC = () => {
const photos = useTypedSelector((state) => state.photos.photos)
const filter = useTypedSelector((state) => state.photos.filter)
const dispatch = useTypedDispatch()

const id: string | undefined = useParams().id
let filteredPhotos;
if (typeof id === "string") {
      filteredPhotos = photos
    .filter((photo: PhotosProps) => photo.albumId === parseInt(id))
    .filter((photo: PhotosProps) => photo.title.indexOf(filter) > -1)
}
  



if (!id) {
    return (
        <div className={style.not_active}>
            <b>← Выберите альбом</b>
        </div>
    )
}

    return (
        <div className={style.photos}>
            <div className={style.filter}>
                <input 
                type="text" 
                placeholder="Поиск по тексту..."
                value={filter}
                onChange={(event) => dispatch(setFilteredText({text: event.target.value}))}
                />
            </div>
           <ul>
            {
             filteredPhotos !== undefined ? filteredPhotos.map((photo: PhotosProps) => {
                    return <Photo photo={photo} key={photo.id}/>
                }) : null
            }
           </ul>
        </div>
    )
}