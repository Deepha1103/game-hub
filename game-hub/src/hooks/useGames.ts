import useData from "./useData";
import { Genre } from "./useGeneres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform} [];
  metacritic: number;
}


const useGames = (selectedGenere: Genre | null) => 
useData<Game>('/games', {params: {genres: selectedGenere?.id}}, [selectedGenere?.id]);

export default useGames;
