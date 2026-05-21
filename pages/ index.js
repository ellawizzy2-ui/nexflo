import { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import Dashboard from '../Components/Dashboard'
import Contacts from '../Components/Contacts'
import Flows from '../Components/Flows'
import Broadcast from '../Components/Broadcast'
import Billing from '../Components/Billing'
import Settings from '../Components/Settings'
import styles from './index.module.css'

const pages = { dashboard: Dashboard, contacts: Contacts, flows: Flows, broadcast: Broadcast, billing: Billing, settings: Settings }

export default function Home() {
  const [page, setPage] = useState('dashboard')
  const Page = pages[page]

  return (
    <>
      <Head>
        <title>NexFlow — Instagram Automation</title>
        <meta name="description" content="Instagram DM automation dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <Sidebar active={page} onNav={setPage} />
        <main className={styles.main}>
          <Page />
        </main>
      </div>
    </>
  )
}
