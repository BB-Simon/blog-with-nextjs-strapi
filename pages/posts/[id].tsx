import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import Markdownit from 'markdown-it';

interface Params {
  id: string
}

interface StaticProps {
  params: Params
}

interface Attributes {
  title: string
  description: string
  content: string
}
interface Post {
  attributes: Attributes
  id: number
}

interface PostPageProps {
  post: Post
}

const Post: NextPage<PostPageProps> = ({ post }) => {
  const md = new Markdownit();
  const htmlContent = md.render(post.attributes.content);

  return (
    <article className="article">
      <header>
        <h1>{post.attributes.title}</h1>
        <h3>{post.attributes.description}</h3>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  )
}

export default Post;

export const getStaticProps = async ({ params }: StaticProps) => {
  const res = await axios.get(`http://localhost:1337/api/posts/${params.id}`);

  return {
    props: {
      post: res.data.data
    }
  }
}

export const getStaticPaths = async () => {
  const res = await axios.get('http://localhost:1337/api/posts');
  const paths = res.data.data.map((post: Post) => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}
