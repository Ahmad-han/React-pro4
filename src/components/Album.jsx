import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import style from "../styles/Albums.module.css"



export const Album = ({ album }) => {
const selectedUserId = useSelector((state) => state.albums.selectedUserId) 

    return (
        <li  className={album.id === selectedUserId ? style.selected : style.select}>
           <Link to={`/${album.id}`}>
                {album.title}
           </Link> 
        </li>
    )
}