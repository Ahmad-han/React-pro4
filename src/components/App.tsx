import { useDispatch, useSelector } from "react-redux";
import { Albums } from "./Albums";
import { Photos } from "./Photos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { loadAlbums } from "../redux/Albums/AlbumsSlice";
import { loadPhotos } from "../redux/Photos/PhotoSlice";
import { useTypedDispatch, useTypedSelector } from "../hooks/useTypedSelector";


export const App = () => {
const dispatch = useTypedDispatch()
const loadingAlbums = useTypedSelector((state) => state.albums.loadingAlbums)
const loadingPhotos = useTypedSelector((state) => state.photos.loadingPhotos)

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
