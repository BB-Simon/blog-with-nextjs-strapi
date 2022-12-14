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
interface HomePgeProps {
  posts: Post[];
}

const Home: NextPage<HomePgeProps> = ({ posts }) => {


  return (
    <div>
      <header>
        <h1>Simon Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </header>
      <main>
        <h3>Latest Posts</h3>
        {posts.slice(0, 5).map((post, index) => (
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

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:1337/api/posts');



  return {
    props: {
      posts: res.data.data
    }
  }
}
