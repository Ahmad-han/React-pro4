import { useSelector } from "react-redux"
import { Album } from "./Album"
import style from "../styles/Albums.module.css"


export const Albums = () => {
const albums = useSelector((state) => state.albums.albums)

    return (
        <div className={style.albums}>
           <ul className={style.list}>
            {
                 albums.map((album) => {
                     return <Album album={album} key={album.id}/>
                    })
             }
           </ul>
        </div>
    )
}