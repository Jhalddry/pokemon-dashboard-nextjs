import { FavoritePokemons, PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "A simple pokemon list",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 font-bold">
        Favorite Pokemons <small className="text-slate-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}

