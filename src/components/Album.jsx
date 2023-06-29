import { useDispatch } from "react-redux"
import { selectId } from "../redux/action"



export const Album = ({ album }) => {
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