import { useDispatch, useSelector } from "react-redux"
import { Photo } from "./Photo"
import { useParams } from "react-router-dom"
import { setFilteredText } from "../redux/Photos/PhotoSlice"
import style from "../styles/Photos.module.css"



export const Photos = () => {
const photos = useSelector((state) => state.photos.photos)
const filter = useSelector((state) => state.photos.filter)
const dispatch = useDispatch()

const id = parseInt(useParams().id);

const filteredPhotos = photos
    .filter((photo) => photo.albumId === id)
    .filter((photo) => photo.title.indexOf(filter) > -1)



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
                filteredPhotos.map((photo) => {
                    return <Photo photo={photo} key={photo.id}/>
                })
            }
           </ul>
        </div>
    )
}