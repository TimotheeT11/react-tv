import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ tvShows, setSelectedShow }) {
  return (
    <nav className="shows">
      {tvShows.map((tvShow) => (
        <a className="show" key={tvShow.name} onClick={setSelectedShow(tvShow)}>
          {tvShow.name}
        </a>
      ))}
    </nav>
  );
}
