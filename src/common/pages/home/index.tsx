
import Navbar from "@/common/templates/navbar";
import NewMoviesList from "@/movie/templates/new_movies_list";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <NewMoviesList />
    </>
  );
};

export default Home;
