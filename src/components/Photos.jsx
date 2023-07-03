import { useDispatch, useSelector } from "react-redux"
import { Photo } from "./Photo"
import { setFilteredText } from "../redux/action"
import { useParams } from "react-router-dom"

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
        <div className="not-active">
            <b>← Выберите альбом</b>
        </div>
    )
}

const handleChangeText = (event) => {
    dispatch(setFilteredText(event.target.value))
}


    return (
        <div className="photos">
            <div className="filter">
                <input 
                type="text" 
                placeholder="Поиск по тексту..."
                value={filter}
                onChange={handleChangeText}
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