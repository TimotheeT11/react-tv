import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";

/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const show = null;
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowDetails show={tvShows[0]} tvShows={tvShows} />
      </main>
    </>
  );
}
