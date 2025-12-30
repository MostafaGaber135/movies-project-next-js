import Link from "next/link";
import { Movie } from "../../types/movie";
import Image from "next/image";

interface Props {
    mov: Movie;
}

export default function CardMovie({ mov }: Props) {
    return (
        <div className="my-1">
            <Link href={`/movie/${mov.id}`}>
                <div className="relative h-[375px] cursor-pointer">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                        alt="movie"
                        fill
                        className="object-cover rounded"
                    />

                    <div className="absolute inset-0 opacity-0 hover:opacity-80 bg-[#393839] transition">
                        <div className="text-white text-center p-2 absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2">
                            <p>اسم الفيلم: {mov.original_title}</p>
                            <p>تاريخ الإصدار: {mov.release_date}</p>
                            <p>عدد المقيمين: {mov.vote_count}</p>
                            <p>التقييم: {mov.vote_average}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
