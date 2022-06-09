import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
        <Link href="/blog/123">
          <a>My Blog Post</a>
        </Link>
      </div>
    </div>
  );
}