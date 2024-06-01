import Link from "next/link"
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter()
    const isEqual = (route) =>{
        if(route == router.pathname) return true
        return false
    }

    return (
      <div>
        <h3 className="h3 mt-3">India</h3>
        <ul className="navbar-nav mt-5  ">
          <li className={isEqual("/") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/">Home</Link>
          </li>
          <li className={isEqual("/meet") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/post">Posts</Link>
          </li>

          <li className={isEqual("/post/add") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/post/add">Add a post</Link>
          </li>
        </ul>
      </div>
    );
}

export default Navbar