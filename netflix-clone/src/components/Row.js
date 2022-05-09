import React, { useEffect } from 'react';
import { getMovies } from '../api';

export default function Row({ title, path}) {
const [movies, setMovies] = React.useState([]);

const fetchMovies = async (_path) => {
    try {
        const data = await getMovies(_path);
        console.log("data ", data);
        setMovies(data?.results);
    } catch(error) {
        console.log("fetchMovies errors ", error);
    }
};

useEffect(() => {
  fetchMovies(path);
}, [path]);

  return (
    <div>Row</div>
  )
}
