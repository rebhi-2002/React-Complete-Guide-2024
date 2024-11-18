import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  // function fetchMoviesHandler() {
  //   // fetch("https://swapi.dev/api/films/", {
  //   //   method: 'GET',
  //   // });

  //   // fetch("https://swapi.dev/api/films/").then().catch();
  //   // response.headers // response.status // response.ok => utility ok field, which will be true if everything worked and false if we got some error.

  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       // setMovies(data.results);
  //       setMovies(transformedMovies);
  //     });
  // }

  // async function fetchMoviesHandler() {
  //   setIsLoading(true);
  //   setError(null);
  //   const response = await fetch("https://swapi.dev/api/films/");
  //   const data = await response.json();

  //   const transformedMovies = data.results.map((movieData) => {
  //     return {
  //       id: movieData.episode_id,
  //       title: movieData.title,
  //       openingText: movieData.opening_crawl,
  //       releaseDate: movieData.release_date,
  //     };
  //   });

  //   setMovies(transformedMovies);
  //   setIsLoading(false);
  // }

  /*
    if I try to send the request to swapi.dev/api/film instead of films.
    This is a invalid URL.
    It's a REST endpoint which is not supported by this REST API and hence, if we save this and we send the request, we don't get back data.
    It's stuck in the loading state, which of course, is a bad user experience.
    It would be better to show the user some error so that the user of this applications knows that things went wrong.

    Now, if we open the developer tools,
    we see an error here.
    We got back a 404 response.
    [Failed to load resource: the server responed with a status of 404 ()]

    Now, if we open the developer tools,
    we see an error here.
    We got back a 404 response.
    That's what I meant.
    Technically, it was a successful request.
    It left our machine,
    was sent to a server and we got back a response
    but the response has a 404 status code,
    indicating that something's wrong with the response.
    In this case, that we requested a resource the server
    was not prepared for.
    Now, as I said, we wanna handle such errors
    and therefore, we might wanna introduce a third state here.
    An error state with error and setError.
  */

  // Now, if we're not using async await, if we work with .then() and so on, then we would add .catch() to catch any errors.
  // Now, when working with async await, we instead use try{} catch(){}.

  // async function fetchMoviesHandler() {
  // const fetchMoviesHandler = useCallback(async function () {

  // /*
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-http-d0b46-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        // Teh response also has a "status" field which holds the concrete
        // response status code. You could also manually check that.
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(transformedMovies);
      // setIsLoading(false);
    } catch (error) {
      setError(error.message); // message: throw new Error("Something went wrong!");
      // setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // */

  async function addMovieHandler(movie) {
    // console.log(movie);
    const response = await fetch(
      "https://react-http-d0b46-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
  }

  /* headers: { "Content-Type": "application/json", } */
  // Technically this header is not required by Firebase,
  // it would be able to handle the request
  // even if that header is not set, but a lot of rest APIs
  // to which you might be sending requests later,
  // might require this extra header, which describes to content
  // that will be sent, and therefore setting it
  // is not a bad idea, and it will set it here even though
  // it's technically not required.
  // And with that, we'll send a POST request with that data, to this URL.

  let content = <p>Found no movies.</p>; // !isLoading && movies.length === 0 && !error

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/*
          <MoviesList movies={dummyMovies} />
        */}
        {/*
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
          {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        */}
      </section>
    </React.Fragment>
  );
}

export default App;

// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// ========================================================

/*
// Sol.1:
const addMovieHandler = (enteredMovie) => {
  setMovies((prevMovies) => {
    const updatedMovies = [...prevMovies];
    updatedMovies.unshift({
      id: Math.random().toString(),
      title: enteredMovie.title,
      openingText: enteredMovie.openingText,
      releaseDate: enteredMovie.releaseDate,
    });
    return updatedMovies;
  });
};
*/

/*
// Sol.2:
const addMovieHandler = (enteredMovie) => {
  setMovies((prevMovies) => [
    { id: Math.random().toString(), ...enteredMovie },
    ...prevMovies,
  ]);
};
*/

/*
// Sol.3:
const addMovieHandler = (enteredMovie) => {
  setMovies((prevMovies) => {
    // تحقق مما إذا كان الفيلم موجودًا بالفعل بناءً على كل الخصائص
    const movieExists = prevMovies.some(
      (movie) =>
        movie.title === enteredMovie.title &&
        movie.openingText === enteredMovie.openingText &&
        movie.releaseDate === enteredMovie.releaseDate
    );
    // إذا كان الفيلم موجودًا، لا تقم بإضافته مرة أخرى
    if (movieExists) {
      alert("This movie already exists!");
      return prevMovies;
    }
    // إذا لم يكن موجودًا، أضفه إلى القائمة
    return [{ id: Math.random().toString(), ...enteredMovie }, ...prevMovies];
  });
};
*/
