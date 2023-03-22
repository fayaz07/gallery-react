import React, { useEffect, useState } from "react";
import ImageComponent from "../../../components/image/ImageComponent";
import AppPagination from "../../../components/pagination/Pagination";
import AlbumPage from "../../../data/model/AlbumPage";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../../components/loader/LoaderComponent";
import { getPageOfAlbum } from "../../../services/api/Albums";
import { toast } from "react-toastify";

function AlbumDetail(
  albumId: string,
  albumPage: AlbumPage,
  currentPage: number,
  pages: number,
  onPageChange: (arg0: number) => void
) {
  const list = albumPage.data.map((e, i) => {
    return <ImageComponent key={`${i}-image`} image={e} albumId={albumId} />;
  });
  return (
    <div className="page">
      <div className="page-images">{list}</div>
      <div className="appPagination">
        <AppPagination
          current={currentPage}
          max={pages}
          onPageChange={(d) => onPageChange(d)}
        />
      </div>
    </div>
  );
}

function AlbumDetailPage() {
  const params = useParams();
  const { id } = params;

  const [page, setPage] = useState(1);
  const onPageChange = (clickedPage: number) => {
    setPage(clickedPage);
    console.log(clickedPage);
  };

  const [pageData, setPageData] = useState({} as AlbumPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      const response = await getPageOfAlbum(id || "1", `${page}`);
      if (!response.failed) {
        setPageData(response.albumPage);
      } else {
        toast.error(response.error);
      }
      setLoading(false);
    };

    fetchAlbums();

    return () => {};
  }, [page]);

  if (loading) {
    return LoaderComponent();
  } else {
    return AlbumDetail(
      id || "",
      pageData,
      page,
      pageData.totalPages,
      onPageChange
    );
  }
}

export default AlbumDetailPage;
