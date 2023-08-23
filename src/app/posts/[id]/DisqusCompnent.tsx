import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
    const disqusShortname = "eco-7"
    const disqusConfig = {
      url: `https://ecoweb-sigma.vercel.app/posts/${post.id}`,
      identifier: post.id, // Single post id
      title: post.title // Single post title
    }
    return (
      <div>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
  export default DisqusComments;