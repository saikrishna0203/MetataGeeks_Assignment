import './index.css'

const BlogPostList = ({posts}) => (
  <div className="blog-post-list">
    <h1>Blog Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h1>{post.title}</h1>
          <p>Author: {post.author}</p>
          <button type="button">View Full Post</button>
        </li>
      ))}
    </ul>
  </div>
)

export default BlogPostList
