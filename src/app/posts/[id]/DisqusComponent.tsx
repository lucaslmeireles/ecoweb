import {DiscussionEmbed} from "disqus-react"

const DisqusComments = (post) => {
  console.log(post)
    const disqusShortname = "eco-7"
    const disqusConfig = {
      url: `https://eco-7.vercel.app/posts/${post.id}`,
      identifier: post.id,
      title: post.title,
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