import { getPosts } from "../actions";

interface Post {
  id: number;
  content: string;
  createdAt: Date;
}

export default async function PostsPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
