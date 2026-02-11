import PostCard from '../../components/postCard';
import type { Post } from '../../types';
import { useGetPostsQuery } from '../../services/dws-service';
import { useMemo } from 'react';
import { AuthorCard, Divider, PostContainer } from './styles';
import { useLocation, useNavigate } from 'react-router';
import Button from '../../components/button';
import { ArrowLeft } from 'lucide-react';
import { dateFormatter } from '../../utils';

function PostPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: posts, error, isLoading } = useGetPostsQuery();

  const selectedPostId = location.pathname.split('/post/')[1];

  const selectedPost = useMemo(() => {
    if (!selectedPostId || !posts?.length) return null;

    return posts.find((post: Post) => post.id === selectedPostId);
  }, [posts, selectedPostId]);

  const latestPost = useMemo(() => {
    if (!posts?.length) return null;

    const sortedPosts = [...posts].sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return sortedPosts.slice(0, 3);
  }, [posts]);

  return (
    <PostContainer>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching posts</div>}
      {(!posts || !selectedPost) && <div>No data</div>}

      {posts && posts.length > 0 && (
        <>
          <Button type="secondary" onClick={() => navigate('/')} IconLeft={ArrowLeft}>
            Back
          </Button>
          <h1>{selectedPost?.title}</h1>

          <AuthorCard>
            <img src={selectedPost?.author.profilePicture} alt={selectedPost?.author.name} width={40} height={40} style={{ borderRadius: '50%' }} />

            <div>
              <p className="written-by">
                Written by: <b>{selectedPost?.author.name}</b>
              </p>
              <article className="created-date">{dateFormatter.format(new Date(selectedPost?.createdAt || ''))}</article>
            </div>
          </AuthorCard>

          <img className="cover-img" src={selectedPost?.thumbnail_url} alt={selectedPost?.title} />
          <p>{selectedPost?.content}</p>

          <Divider />
          <h2>Last articles</h2>
          <div className="last-articles">
            {latestPost?.map((post: Post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </>
      )}
    </PostContainer>
  );
}

export default PostPage;
