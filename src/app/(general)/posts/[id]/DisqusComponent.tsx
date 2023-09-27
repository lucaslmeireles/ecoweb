'use client'
import {DiscussionEmbed} from "disqus-react"
type DisqusType = {
  id: string | number,
  title: string
}

const DisqusComments = ({id, title}: DisqusType) => {
    const disqusShortname = "eco-7"
    return (
      <div>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={
            {
                url: 'https://localhost:3000/',
                identifier: id,
                title: title,
            }
        }
        />
      </div>
    )
  }
export default DisqusComments;