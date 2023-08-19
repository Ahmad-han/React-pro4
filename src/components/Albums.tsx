import { Album } from "./Album"
import style from "../styles/Albums.module.scss"
import { useTypedSelector } from "../hooks/useTypedSelector"


export const Albums: React.FC = () => {
const albums = useTypedSelector((state) => state.albums.albums)

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