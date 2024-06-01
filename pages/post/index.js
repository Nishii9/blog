import { Fragment } from 'react';
import getDatabase from '../../components/Mongo/getDatabase';
import PostLong from '../../components/shared/PostLong';


function NewsPage({ posts, setTitle }) {
  setTitle('Home');

  return (
    <Fragment>
      <h4 className="mb-3">Posts to show</h4>
      <div className="row gy-3 gx-2">
        {posts.map((item) => (
          <PostLong key={item.id} post={item} />
        ))}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { client, db } = await getDatabase();
  const postsCollec = db.collection('posts');

  const posts = await postsCollec.find().sort({ _id: -1 }).toArray();
  client.close();

  return {
    props: {
      posts: posts.map((item) => ({
        title: item.title || '',
        description: item.description || '',
        image: item.image || null,
        url: item.url || '',
        id: item._id.toString(),
      })),
    },
  };
}

export default NewsPage;
