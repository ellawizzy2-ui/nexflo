import { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Contacts from '../components/Contacts'
import Flows from '../components/Flows'
import Broadcast from '../components/Broadcast'
import Billing from '../components/Billing'
import Settings from '../components/Settings'
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
