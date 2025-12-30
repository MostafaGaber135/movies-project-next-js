import CardMovie from "../CardMovie/CardMovie";
import Pagination from "../Pagination/Pagination";
import { Movie } from "../../types/movie";

interface Props {
    movies: Movie[];
    getPage: (page: number) => void;
    pageCount: number;
}

export default function MoviesList({ movies, getPage, pageCount }: Props) {
    return (
        <div className="mt-3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.length ? (
                    movies.map((mov) => (
                        <CardMovie key={mov.id} mov={mov} />
                    ))
                ) : (
                    <h2 className="text-center p-5">لا يوجد أفلام...</h2>
                )}
            </div>

            {movies.length > 0 && (
                <div className="flex justify-center mt-6">
                    <Pagination getPage={getPage} pageCount={pageCount} />
                </div>
            )}
        </div>
    );
}
