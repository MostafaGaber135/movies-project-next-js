export interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview?: string;
  homepage?: string;
}
