"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  homepage: string;
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
      );
      setMovie(res.data);
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (!movie) return null;

  return (
    <div className="w-full">
      <div className="flex justify-center mt-4">
        <div className="h-[370px] rounded-[20px] bg-[#f8f8f8] flex items-center w-full max-w-5xl px-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie"
            width={300}
            height={450}
            className="h-[360px] p-[10px] rounded-[20px] w-[30%] object-cover"
          />

          <div className="flex flex-col justify-center text-center mx-auto space-y-2">
            <p className="text-[28px] font-bold border-b">
              اسم الفيلم: {movie.title}
            </p>
            <p className="text-[28px] font-bold border-b">
              تاريخ الفيلم: {movie.release_date}
            </p>
            <p className="text-[28px] font-bold border-b">
              عدد المقيمين: {movie.vote_count}
            </p>
            <p className="text-[28px] font-bold border-b">
              التقييم: {movie.vote_average}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="h-[300px] rounded-[20px] bg-[#f8f8f8] w-full max-w-5xl p-4">
          <p className="text-[36px] font-bold border-b mb-2">القصة:</p>
          <p className="text-[18px]">{movie.overview}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4 gap-4">
        <a href={movie.homepage} target="_blank">
          <button className="bg-[#b45b35] text-white px-4 py-2 rounded-md">
            مشاهدة الفيلم
          </button>
        </a>

        <Link href="/">
          <button className="bg-[#b45b35] text-white px-4 py-2 rounded-md">
            عودة للرئيسية
          </button>
        </Link>
      </div>
    </div>
  );
}
