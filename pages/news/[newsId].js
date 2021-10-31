import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return (
    <div>
      <h1>The detail page</h1>
    </div>
  );
};

export default DetailPage;
