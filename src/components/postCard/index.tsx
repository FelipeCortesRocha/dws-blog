import { useNavigate } from 'react-router';
import type { Post } from '../../types';
import { dateFormatter } from '../../utils';
import { ContainerTitleContent, PostContainer } from './styles';

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  return (
    <PostContainer onClick={() => navigate(`/post/${post.id}`)}>
      <img src={post.thumbnail_url} alt="Post thumbnail"/>

      <div className='content-container'>
        
        <article className='post-meta-data'>{dateFormatter.format(new Date(post.createdAt))} <span>•</span> {post.author.name}</article>

        <ContainerTitleContent>
          <h3>{post.title}</h3>
          <p className='post-content'>{post.content}</p>
        </ContainerTitleContent>
        
        <div className='categories-container'>
          {post.categories.map(category => (
            <article key={category.id}>{category.name}</article>
          ))}
        </div>
      </div>
      
    </PostContainer>
  )
}

export default PostCard