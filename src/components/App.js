import { useDispatch, useSelector } from "react-redux";
import { Albums } from "./Albums";
import { Photos } from "./Photos";
import { useEffect } from "react";
import { loadAlbums, loadPhotos } from "../redux/action";
import { Route, Routes } from "react-router-dom";


export const App = () => {
const dispatch = useDispatch()
const loadingAlbums = useSelector((state) => state.albums.loadingAlbums)
const loadingPhotos = useSelector((state) => state.photos.loadingPhotos)

useEffect(() => {
  dispatch(loadAlbums())
  dispatch(loadPhotos())
}, [])

if (loadingAlbums || loadingPhotos === true) {
  return (
    <div>
      <h3>Идет загрузка данных...</h3>
    </div>
  )
}


  return (
    <div className="container">
      <Albums />

      <Routes>
        <Route path="/:id?" element={ <Photos />}/>
      </Routes>
    </div>
  );
}

