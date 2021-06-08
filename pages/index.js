import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          Hello <a href="https://nextjs.org">Rikkeisoft</a>
        </h1>

    </div>
  )
}

