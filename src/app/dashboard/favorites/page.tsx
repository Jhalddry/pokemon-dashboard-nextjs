import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorite Pokemons <small className="text-slate-600">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
