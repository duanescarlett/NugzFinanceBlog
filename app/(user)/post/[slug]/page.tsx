import Image from "next/image"
import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import { Post } from "../../../../typings"

type Props = {
  params: {
    slug: string;
  }
}

const Post = async ({params: {slug}}: Props) => {
  const query = groq`*[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }`

  const post: Post = await client.fetch(query, { slug })
  console.log(post)
  return (
    // <div>Post: {slug}</div>
    <article>
      <section>
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image 
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              // alt={post.author}
              alt='holder'
              fill
            />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Post
