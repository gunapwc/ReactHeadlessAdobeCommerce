import React from "react";
import {
  BlogBanner1,
  BlogBanner2,
  BlogBanner3,
  BlogBanner4,
  BlogBanner5,
} from "../../utils/images";
import "./BlogBanner.scss";
import { Link } from "react-router-dom";
import Blogs from "../../gql/query_blog.graphql";
import { useQuery, gql } from "@apollo/client";

function BlogBanner() {
  const { data: blog } = useQuery(Blogs, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: { id: 0 },
  });

  const [bloglists, setbloglist] = React.useState([]);

  React.useEffect(() => {
    console.log(blog);

    if (blog?.getBlogDatas) {
      setbloglist(blog?.getBlogDatas);
    }
  }, [blog]);

  return (
    <div className="blog container ">
      {bloglists?.map((value, i) => {
        if (i === 0) {
          return (
            <div className="blog_main">
              <Link to={"/blog/" + value.blog_id}>
                <img src={value.thumb_image_full_path} alt="" />
                <div className="blog_text">
                  <p>{value.blog_title}</p>
                  <h>{value.category_name}</h>
                  <button>KEEP READING</button>
                </div>
              </Link>
            </div>
          );
        }
      })}

      <div className="blog_sub">
        {bloglists?.map((value, i) => {
          if (i > 0 && i <= 4) {
            return (
              <div className="blog_sub_card">
                <Link to={"/blog/" + value.blog_id}>
                  <img src={value.thumb_image_full_path} alt="" />
                  <div className="blog_text">
                    <h5>{value.category_name}</h5>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

function BlogCard() {
  const { data: blog } = useQuery(Blogs, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: { id: 0 },
  });

  const [bloglists, setbloglist] = React.useState([]);

  React.useEffect(() => {
    console.log(blog);

    if (blog?.getBlogDatas) {
      setbloglist(blog?.getBlogDatas);
    }
  }, [blog]);

  return bloglists?.map((value, i) => {
    return (
      i > 0 && (
        <div className="Category_card">
          <Link to={"/blog/" + value.blog_id}>
            <div className="Category_card_img">
              <img src={value.thumb_image_full_path} alt="" />
            </div>
            <div className="Category_card_header">
              <div className="Category_card_inner">
                <button>{value.category_name}</button>
                <p className="Category_card_inner_date">{value?.created_at}</p>
              </div>
              <h1 className="Category_card_prod_title">{value?.blog_title}</h1>

              <p className="Category_card_ditails">
                {value.blog_description.substring(0, 30)}
              </p>
              <div className="Category_card_fav">
                <img src="" alt="" />
              </div>
            </div>
          </Link>
        </div>
      )
    );
  });
}

// export default BlogBanner

export { BlogBanner, BlogCard };
