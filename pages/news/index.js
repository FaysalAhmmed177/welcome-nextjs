import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link  href="news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
