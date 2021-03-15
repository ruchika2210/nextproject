import React from "react";
import { useRouter } from "next/router";

// function getPostDataById(id) {
//   for (let i = 0; i < posts.length; i++) {
//     if (posts[i].id === parseInt(id)) {
//       return posts[i];
//     }
//   }
// }

export default function Post({ postData }) {
  // const postData = getPostDataById(id);
  const router = useRouter();

  //If the page is not yet generated ,this will be displayed
  //Initially untill getStaticprops() finishes running
  if (router.isFallback) {
    return <div>Loading Page Data</div>;
  }

  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}

// Post.getInitialProps = async ({ query }) => {
//   const { id } = query;

//   return { id };
// };

// export async function getServerSideProps({ query }) {
//   const { id } = query;
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts" + id);
//   const postData = await res.json();
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
