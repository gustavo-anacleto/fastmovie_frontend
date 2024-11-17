import React from "react";
import styles from "./NewMoviesList.module.scss";
import MovieCard from "@/movie/organisms/movie_card";

const NewMoviesList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Movies</h1>
      <div className={styles["cards-container"]}>
        <MovieCard />
        <MovieCard />
        <MovieCard />

      </div>
    </div>
  );
};

export default NewMoviesList;
