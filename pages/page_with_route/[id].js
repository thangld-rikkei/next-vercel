import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(100)

  return (
    <>
      <Head>
        <title>Post title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>demo page with id: {id}, state demo: {data}</p>
      <button onClick={() => { setData(data + 1) }}>increase state</button>
      <button onClick={() => {
        router.push("/")
      }}>Home (use command)</button>
      <ul>
        <li>
          <Link href="/">
            <a>{JSON.stringify(props)}</a>
          </Link>
        </li>
      </ul>
    </>
  )
}


export async function getServerSideProps({ params }) {
  console.log("get static props")
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()

  return { props: { data } }
}



export default Post