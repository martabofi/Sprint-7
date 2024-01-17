import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: string | number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  image: string;
}

interface StarshipContextProps {
  starships: Starship[];
  fetchStarships: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
}

export const StarshipContext = createContext<StarshipContextProps>({
  starships: [],
  fetchStarships: () => { },
  isLoggedIn: false,
  setIsLoggedIn: function (isLoggedIn: boolean): void {
    throw new Error("Function not implemented.");
  },
  isUserLoggedIn: false,
  setIsUserLoggedIn: function (isUserLoggedIn: boolean): void {
    throw new Error("Function not implemented.");
  }
});

export const useElements: () => StarshipContextProps = (): StarshipContextProps => {
  const context = useContext(StarshipContext)
  if (context == null) {
    throw new Error('useElements must be used within a ContextProvider')
  }
  return context
}

interface StarshipsProviderProps {
  children: ReactNode;
}

export const useStarshipContext = () => {
  return useContext(StarshipContext);
};

export const StarshipProvider: React.FC<StarshipsProviderProps> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const fetchStarships = async () => {

    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    const data = await response.json();

    setStarships([...starships, ...data.results]);
    setPage(page + 1);
  };

  return (
    <StarshipContext.Provider
      value={{
        starships,
        isLoggedIn,
        setIsLoggedIn,
        isUserLoggedIn,
        setIsUserLoggedIn,
        fetchStarships,
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
};


