import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Post = {
    id : number,
    liked : boolean
}

interface LikedState {
    posts: Post[]
    addPost: (id: number) => void
    removePost: (id: number) => void
    isLiked: (id: number) => void
  }
  


export const useStore = create<LikedState>()(
    persist((set,get) => ({
        posts: [], 
            addPost: (id) => set(() => ({posts : [...get().posts, {id, liked:true} as Post]})),
            removePost: (id) => set(() => ({ posts: get().posts.filter(post => post.id !== id) })),
            isLiked: (id) =>  useStore.getState().posts.find((post:Post) => post.id === id)?.liked,
    }), 
    {
        name: 'liked-storage',
        storage: createJSONStorage(() => sessionStorage)
    })
)

