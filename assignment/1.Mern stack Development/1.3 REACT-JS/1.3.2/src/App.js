import {Component} from 'react'
import './App.css'
import BlogPostList from './components/BlogPostList'

class App extends Component {
  state = {
    loading: true,
    posts: [],
  }

  componentDidMount() {
    setTimeout(() => {
      const fetchedPosts = [
        {
          id: 1,
          title: 'Post 1',
          author: 'Author 1',
          content: 'Content of Post 1',
        },
        {
          id: 2,
          title: 'Post 2',
          author: 'Author 2',
          content: 'Content of Post 2',
        },
        {
          id: 3,
          title: 'Post 3',
          author: 'Author 3',
          content: 'Content of Post 3',
        },
      ]

      this.setState({
        loading: false,
        posts: fetchedPosts,
      })
    }, 5000)
  }

  render() {
    const {loading, posts} = this.state

    return (
      <div>
        <h1>My Blog</h1>
        {loading ? <p>Loading...</p> : <BlogPostList posts={posts} />}
      </div>
    )
  }
}

export default App
