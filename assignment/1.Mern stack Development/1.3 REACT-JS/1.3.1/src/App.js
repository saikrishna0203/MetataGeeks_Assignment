import './App.css'
import BlogPostList from './components/BlogPostList'
// These are the lists used in the application. You can move them to any component needed.
const posts = [
  {id: 1, title: 'Post 1', author: 'Author 1', content: 'Content of Post 1'},
  {id: 2, title: 'Post 2', author: 'Author 2', content: 'Content of Post 2'},
  {id: 3, title: 'Post 3', author: 'Author 3', content: 'Content of Post 3'},
]

// Replace your code here
const App = () => <BlogPostList posts={posts} />

export default App
