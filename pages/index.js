import HeadInfo from "../components/HeadInfo"

export default function Home({posts}) {

  return (
    
    <div>
      <HeadInfo />
     <h1>Welcome to My Blog</h1>
     <ul>
       {posts.map(post=> (
         <li key={post.id}>{post.title}</li>
       ))}
     </ul>
    </div>
  )
}

// server side rendering
// export const getServerSideProps = async() => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//   const posts = await res.json()

//   return {
//     props: {
//       posts: posts
//     }
//   }
// }

// static side rendering
export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json()

  return {
    props: {
      posts: posts
    },
    revalidate: 20
  }
}