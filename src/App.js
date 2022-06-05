import './App.css';
import PostList from './features/post/PostList';
import AddPostForm from './features/post/AddPostForm';


const App = () => {
  return (
   <main>
     <PostList />
     <AddPostForm />
   </main>
  );
}

export default App;
