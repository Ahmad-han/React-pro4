import { useDispatch, useSelector } from "react-redux"
import { selectId } from "../redux/action"



export const Album = ({ album }) => {
const selectedUserId = useSelector((state) => state.albums.selectedUserId) 
const dispatch = useDispatch()
const selectAlbumId = () => {
    dispatch(selectId(album.id))
}


    return (
        <li onClick={selectAlbumId} className={album.id === selectedUserId ? "selected" : "select"}>
            {album.title}
        </li>
    )
}