import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



export const Album = ({ album }) => {
const selectedUserId = useSelector((state) => state.albums.selectedUserId) 

    return (
        <li  className={album.id === selectedUserId ? "selected" : "select"}>
           <Link to={`/${album.id}`}>
                {album.title}
           </Link> 
        </li>
    )
}