import Link from "next/link";

function PostLong({ post }) {
  return (
    <div className="col-4">
      <div class="card ">
        <img
          src={post.image}
          style={{ height: "150px", objectFit: "cover" }}
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <Link href={"post/" + post.url}>
            <h6 className="card-title stretched-link pe-auto cursor-pointer ">
              {post.title.substring(0, 30)}
            </h6>
          </Link>
          <small class="card-text text-muted">
            {post.description.substring(0, 70)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default PostLong;