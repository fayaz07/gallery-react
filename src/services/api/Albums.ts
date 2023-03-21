import Album from "../../data/model/Album";
import AlbumPage from "../../data/model/AlbumPage";
import axios from "./Axios";
import { getError } from "./Utils";

async function getAlbums(): Promise<{
  albums: Album[];
  failed: boolean;
  error: string;
}> {
  let albums = [] as Album[];
  let failed = false;
  let error = "";

  try {
    const response = await axios.get("/albums");
    if (response.status == 200) {
      albums = response.data.data;
    } else {
      failed = true;
    }
  } catch (e) {
    error = getError(e);
    failed = true;
  }
  return { albums, failed, error };
}

async function getPageOfAlbum(
  id: string,
  page: string
): Promise<{ albumPage: AlbumPage; failed: boolean; error: string }> {
  let albumPage = {} as AlbumPage;
  let failed = false;
  let error = "";

  try {
    const response = await axios.get(`/album/${id}?page=${page}`);
    if (response.status == 200) {
      albumPage = response.data;
    } else {
      failed = true;
    }
  } catch (e) {
    error = getError(e);
    failed = true;
  }
  return { albumPage, failed, error };
}

export { getAlbums, getPageOfAlbum };
