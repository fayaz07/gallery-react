import { useEffect, useState } from "react";
import { getAlbums } from "../../../services/api/Albums";
import "./_.scss";
import AlbumComponent from "../../../components/album/AlbumComponent";
import Album from "../../../data/model/Album";
import LoaderComponent from "../../../components/loader/LoaderComponent";
import { toast } from "react-toastify";

function albumsContainer(albums: Album[]) {
  const list = albums.map((e, i) => {
    return (
      <AlbumComponent
        name={e.name}
        url={`album/${e.id}`}
        date={e.date}
        pages={e.pages}
      />
    );
  });
  return <div className="albList-list">{list}</div>;
}

function AlbumsList() {
  const [albums, setAlbums] = useState([] as Album[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await getAlbums();
      if (!response.failed) {
        setAlbums(response.albums);
      } else {
        toast.error(response.error);
      }
      setLoading(false);
    };

    fetchAlbums();

    return () => {};
  }, []);

  if (loading) {
    return <LoaderComponent />;
  } else {
    return albumsContainer(albums);
  }
}

export default AlbumsList;
