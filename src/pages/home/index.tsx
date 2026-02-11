import PostCard from '../../components/postCard'
import type { Author, Category, Post } from '../../types'
import { HomeContainer } from './styles'
import Filters from '../../components/filters'
import { useGetPostsQuery } from '../../services/dws-service'
import { setCategories, store, type RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

function Home() {
  const sort = useSelector((state: RootState) => state.global.sort)
  const searchTerm = useSelector((state: RootState) => state.global.searchTerm.toLowerCase())
  const selectedCategories = useSelector((state: RootState) => state.global.selectedCategories)
  const selectedAuthors = useSelector((state: RootState) => state.global.selectedAuthors)

  const { data: posts, error, isLoading } = useGetPostsQuery();

  const categories = useMemo(() => {
    const categoriesArr = [] as Category[]

    if (!posts?.length) return []

    posts.forEach(((post: Post) => {
      categoriesArr.push(...post.categories)
    }))

    const uniqueCategories: Category[] = [...new Map<string, Category>(categoriesArr.map((item: Category) => [item.id, item])).values()];

    setTimeout(() => store.dispatch(setCategories(uniqueCategories)), 100)
    return uniqueCategories
  }, [posts])

  const authors = useMemo(() => {
    const authorsArr = [] as Author[]

    if (!posts?.length) return []

    posts.forEach(((post: Post) => {
      authorsArr.push(post.author)
    }))

    const uniqueCategories: Author[] = [...new Map<string, Author>(authorsArr.map((item: Author) => [item.id, item])).values()];

    return uniqueCategories
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (!posts?.length) return []

    const filteredList = posts.filter((post: Post) => {
      if (selectedAuthors.length && !selectedAuthors.includes(post.authorId)) return false
      if (selectedCategories.length) {
        const postCategories = post.categories.map((category: Category) => category.id)
        
        if (!postCategories.some((category => selectedCategories.includes(category)))) return false
      }
  
      if (
        searchTerm && 
        !post.title.toLowerCase().includes(searchTerm) && 
        !post.categories.some((category: Category) => category.name.toLowerCase().includes(searchTerm)) &&
        !post.author.name.toLowerCase().includes(searchTerm)
      ) return false
  
      return true
    })

    if (sort === "newest") {
      return filteredList.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
    
    return filteredList.sort((a: Post, b: Post) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    
  }, [posts, selectedAuthors, selectedCategories, searchTerm, sort])

  return (
    <HomeContainer>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error fetching posts</div>}
        {!posts && <div>No data</div>}

        {posts && posts.length > 0 && (
          <>
            <Filters categories={categories} authors={authors} />
            
            {filteredPosts.map((post: Post) => (
              <PostCard post={post} key={post.id}/>
            ))}
          </>
        )}
    </HomeContainer>
  )
}

export default Home
