import { Badge, Btn, MetricCard, Card, Topbar } from './UI'
import styles from './Pages.module.css'

const contacts = [
  { ig: '@john_doe', email: 'john@gmail.com',     subscribed: 'May 18, 2026', sent: 3,  status: 'green', label: 'Active' },
  { ig: '@sarah_k',  email: null,                  subscribed: 'May 17, 2026', sent: 1,  status: 'green', label: 'Active' },
  { ig: '@mike99',   email: 'mike99@yahoo.com',    subscribed: 'May 16, 2026', sent: 5,  status: 'green', label: 'Active' },
  { ig: '@tola_w',   email: null,                  subscribed: 'May 15, 2026', sent: 2,  status: 'amber', label: 'Paused' },
  { ig: '@ada_b',    email: 'ada.b@outlook.com',   subscribed: 'May 14, 2026', sent: 0,  status: 'red',   label: 'Unsubscribed' },
  { ig: '@kemi_x',   email: null,                  subscribed: 'May 12, 2026', sent: 7,  status: 'green', label: 'Active' },
]

export default function Contacts() {
  return (
    <div className={styles.page}>
      <Topbar title="Contacts">
        <Btn>Export CSV</Btn>
        <Btn primary>+ Add contact</Btn>
      </Topbar>
      <div className={styles.content}>
        <div className={styles.metrics3}>
          <MetricCard label="Total" value="1,284" />
          <MetricCard label="Active" value="1,190" />
          <MetricCard label="Unsubscribed" value="94" />
        </div>
        <Card>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{width:'18%'}}>Instagram</th>
                <th style={{width:'28%'}}>Email</th>
                <th style={{width:'20%'}}>Subscribed</th>
                <th style={{width:'16%'}}>Messages sent</th>
                <th style={{width:'18%'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={i}>
                  <td className={styles.igHandle}>{c.ig}</td>
                  <td>{c.email ? <span className={styles.email}>{c.email}</span> : <span className={styles.muted}>Not provided</span>}</td>
                  <td>{c.subscribed}</td>
                  <td>{c.sent}</td>
                  <td><Badge type={c.status}>{c.label}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
