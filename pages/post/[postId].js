import Link from 'next/link';
import {useRouter} from 'next/router'
import { Fragment } from 'react'
import getDatabase from "../../components/Mongo/getDatabase";



function DetailsPage({ post, setTitle }) {
  setTitle(post.title);

  return (
    <Fragment>
      <div className="fixed-height-main-sec">
        <img
          src={post.image}
          style={{ height: "380px", objectFit: "cover" }}
          className=" w-100 rounded rounded-lg"
        />
        <h6 className="mt-2 d-flex mb-2 bg-light pt-3 pb-3 ps-2 text-muted border-rounded">
          <Link href={"/post"}>
            <h6 className=" pe-auto cursor-pointer ">posts/</h6>
          </Link>
          <Link href={"/post/" + post.url}>
            <h6 className=" text-dark pe-auto cursor-pointer ">
              {post.title.replaceAll(" ", "-").toLowerCase()}
            </h6>
          </Link>
        </h6>
        <h2 className="mb-1 mt-3 ">{post.title}</h2>
        <p className=" mt-3 text-muted">{post.description}</p>
      </div>
    </Fragment>
  );
}


export async function getServerSideProps(context) {
  const blogId = context.params.postId;

   const { client, db } = await getDatabase();
   const postsCollec = db.collection("posts");

   const item = await postsCollec.findOne({ url: blogId });
   client.close();
   return {
     props: {
       post: {
         title: item.title,
         description: item.description,
         image: item.image || null,
         url: item.url,
         id: item._id.toString(),
       },
     },
   };
}
export default DetailsPage;
