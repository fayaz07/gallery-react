import "./_.scss";

function AlbumComponent(props: {
  name: string;
  url: string;
  date: string;
  pages: number;
}) {
  const { name, url, date, pages } = props;
  return (
    <div className="shadow album">
      <p className="album-title">{name}</p>
      <p className="album-date">Created on: {date}</p>
      <p className="album-pages">Pages: {pages}</p>
      <a href={url}> View </a>
    </div>
  );
}

export default AlbumComponent;
