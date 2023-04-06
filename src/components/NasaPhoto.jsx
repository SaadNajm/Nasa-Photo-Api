import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function NasaPhoto() {
  // eslint-disable-next-line no-unused-vars
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=90wJcVXk4Yn1OG8Z7vey7x7t7f9dndlPf9T3egBl`
      );
      const data = await res.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);
  if (!photoData) {
    return <div></div>;
  }
  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}

        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </>
  );
}
