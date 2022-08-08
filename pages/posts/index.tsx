import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';

interface Attributes {
  title: string
  description: string
  content: string
}
interface Post {
  attributes: Attributes
  id: number
}
interface PostsPageProps {
  posts: Post[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        {posts.map((post, index) => (
          <Link key={index} href={`/posts/${post.id}`}>
            <div
              style={{
                border: '1px solid gray',
                padding: '10px',
                margin: '10px 0',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <h3>{post.attributes.title}</h3>
              <p>{post.attributes.description}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Posts;

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:1337/api/posts');
  return {
    props: {
      posts: res.data.data
    }
  }
}

