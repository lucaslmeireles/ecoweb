import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Post = {
    id : number,
    liked : boolean
}

type PostFetch = {
    likedposts : Post[]
}
interface LikedState {
    posts: Post[]
    addPost: (id: number) => void
    removePost: (id: number) => void
    isLiked: (id: number) => void
    fetch: (bearer: string) => void
  }
  


export const useStore = create<LikedState>()(
    persist((set,get) => ({
        posts: [], 
            addPost: (id) => set(() => ({posts : [...get().posts, {id, liked:true} as Post]})),
            removePost: (id) => set(() => ({ posts: get().posts.filter(post => post.id !== id) })),
            isLiked: (id) =>  get().posts,
            fetch: async (bearer) => {
                const res = await fetch('https://eco-api.vercel.app/users/myposts', { headers: {
                    "Authorization" : 'Bearer ' +  bearer,
                    "Content-Type": "application/json",
                }})
                if (res.status === 401) {
                    throw new Error('Unauthorized')
                }
                if (res.status === 500){
                    throw new Error('Internal Server Error')
                }
                const posts = await res.json() as PostFetch
                if (posts.likedposts.length === 0) {
                    return set(() => ({posts : []}))
                }
                if(posts.likedposts.length === get().posts.length){
                    return 'Igual'
                }
                set(() => ({posts : [...get().posts, ...posts.likedposts.map((post:Post) => ({id: post.id, liked: true}))]}))
                return get().posts
            }
    }), 
    {
        name: 'liked-storage',
        storage: createJSONStorage(() => sessionStorage)
    })
)

