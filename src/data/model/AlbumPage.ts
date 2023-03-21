import Image from "./Image";

interface AlbumPage {
  id: string;
  page: string;
  data: Image[];
  totalPages: number;
}

export default AlbumPage;
