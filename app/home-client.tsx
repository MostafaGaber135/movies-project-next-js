"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesList from "./components/MoviesList/MoviesList";
import { Movie } from "./types/movie";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); 

  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const url = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${query}&language=ar`
        : `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`;

      const res = await axios.get(url);
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  // Pagination
  const getPage = async (page: number) => {
    const base = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${query}&language=ar`
      : `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`;

    const res = await axios.get(`${base}&page=${page}`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  if (loading) {
    return (
      <div className="text-center p-10 text-gray-500">
        Loading movies...
      </div>
    );
  }

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
