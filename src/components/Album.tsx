import { Link } from "react-router-dom"
import React from "react"
import style from "../styles/Albums.module.scss"

interface AlbumProps {
    album: {
        id: number
        title: string
    }
}



export const Album: React.FC<AlbumProps> = ({ album }) => {

    return (
        <li className={style.select}>
           <Link to={`/${album.id}`}>
                {album.title}
           </Link> 
        </li>
    )
}