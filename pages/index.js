import { Fragment } from 'react';
import getDatabase from '../components/Mongo/getDatabase';
import PostUpSection from '../components/shared/PostUpSection';

function HomePage({ posts, setTitle, currentPage, totalPages }) {
  setTitle('Home');

  return (
    <Fragment>
      <h4 className="mb-3">Recent Posts.</h4>
      <PostUpSection posts={posts} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <a
            key={i}
            href={`/?page=${i + 1}`}
            className={i + 1 === currentPage ? 'active' : ''}
          >
            {i + 1}
          </a>
        ))}
      </div>
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .pagination a {
          margin: 0 5px;
          padding: 8px 16px;
          text-decoration: none;
          color: #000;
          background-color: #ddd;
          border-radius: 4px;
        }
        .pagination a.active {
          background-color: #0070f3;
          color: white;
        }
      `}</style>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { db } = await getDatabase();
  
  const page = parseInt(context.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const [posts, totalPosts] = await Promise.all([
    db.collection('posts')
      .find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    db.collection('posts').countDocuments(),
  ]);

  return {
    props: {
      posts: posts.map((item) => ({
        title: item.title || '',
        description: item.description || '',
        image: item.image || null,
        url: item.url || '',
        id: item._id.toString(),
      })),
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
    },
  };
}

export default HomePage;

