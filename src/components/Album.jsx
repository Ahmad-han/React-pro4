import { useDispatch, useSelector } from "react-redux"
import { selectId } from "../redux/action"



export const Album = ({ album }) => {
const newClass = useSelector((state) => state.albums.setClass)
const dispatch = useDispatch()
const selectAlbumId = () => {
    dispatch(selectId(album.id))
}


    return (
        <li onClick={selectAlbumId}>
            {album.title}
        </li>
    )
}