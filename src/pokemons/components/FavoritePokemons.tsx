"use client";

import { useEffect, useRef, useState } from "react";

import { IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { SimplePokemon } from "../interfaces/simple-pokemons";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(
    Object.values(favoritePokemons)
  );
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if (
      isLoad.current === false &&
      Object.values(favoritePokemons).length !== 0
    ) {
      setPokemons(Object.values(favoritePokemons));
      isLoad.current = true;
    }
  }, [favoritePokemons]);

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No Favorites</span>
    </div>
  );
};
