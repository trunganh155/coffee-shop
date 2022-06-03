import ModalDetail from "~/components/ModalDetail/ModalDetail";
import "../styles/Detail.scss";
import Main from "~/layouts/Main";

export default function Detail() {
  return (
    <>
      <Main>
        <div className="detail-page">
          <ModalDetail />

        </div>
      </Main>
    </>
  );
}
