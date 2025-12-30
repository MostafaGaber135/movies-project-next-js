"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesList from "./components/MoviesList/MoviesList";
import { Movie } from "./types/movie";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = "";

      if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${query}&language=ar`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`;
      }

      const res = await axios.get(url);
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    };

    fetchMovies();
  }, [query]);

  const getPage = async (page: number) => {
    const base = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${query}&language=ar`
      : `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`;

    const res = await axios.get(`${base}&page=${page}`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  return (
    <main className="container mx-auto px-4">
      <MoviesList
        movies={movies}
        getPage={getPage}
        pageCount={pageCount}
      />
    </main>
  );
}
