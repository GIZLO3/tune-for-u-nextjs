import PostCreateForm from "./components/CreatePostForm";

export default function Home() {
  return (
    <div className="grid grid-cols-4 xl:mx-50 h-screen">
      <div>Menu</div>
      <div className="col-span-2 border-l border-r">
        <PostCreateForm />
      </div>
      <div>Sidebar</div>
    </div>
  );
}
