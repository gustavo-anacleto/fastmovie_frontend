import React from "react";
import styles from "./MovieCard.module.scss";
import movieExample from "@/assets/img-movie-1.webp";
import BuyTicketButton from "@/movie/atoms/buy_ticket_button";

const MovieCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles["movie-image"]}
        src={movieExample}
        alt="MoviePosterImage"
      />
      
      {/* <h1 className={styles.title}>Movie Title</h1> */}
      <BuyTicketButton/>
    </div>
  );
};

export default MovieCard;
