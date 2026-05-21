import { Badge, Btn, MetricCard, Card, SectionHeader, Topbar } from './UI'
import styles from './Pages.module.css'

const recentActivity = [
  { user: '@john_doe', trigger: 'INFO',  flow: 'Info flow',    time: '2m ago',  status: 'green', label: 'Delivered' },
  { user: '@sarah_k',  trigger: 'PRICE', flow: 'Pricing flow', time: '8m ago',  status: 'green', label: 'Delivered' },
  { user: '@mike99',   trigger: 'HELP',  flow: 'Support flow', time: '14m ago', status: 'amber', label: 'Pending' },
  { user: '@tola_w',   trigger: 'INFO',  flow: 'Info flow',    time: '21m ago', status: 'green', label: 'Delivered' },
]

const bars = [40, 55, 48, 70, 62, 35, 50]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const maxBar = Math.max(...bars)

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <Topbar title="Dashboard">
        <Badge type="green">● Live</Badge>
        <Btn primary>Get tips</Btn>
      </Topbar>
      <div className={styles.content}>
        <div className={styles.metrics4}>
          <MetricCard label="Total contacts" value="1,284" change="↑ +48 this week" changeType="up" />
          <MetricCard label="DMs sent (7d)" value="3,920" change="↑ +12%" changeType="up" />
          <MetricCard label="Open rate" value="78%" change="↓ -2% vs last week" changeType="down" />
          <MetricCard label="Active flows" value="6" change="2 paused" changeType="neutral" />
        </div>

        <SectionHeader title="DMs sent — last 7 days" />
        <Card style={{ padding: '16px 20px 12px' }}>
          <div className={styles.chartWrap}>
            {bars.map((h, i) => (
              <div key={i} className={styles.barCol}>
                <div
                  className={styles.bar}
                  style={{
                    height: `${(h / maxBar) * 72}px`,
                    background: h === maxBar ? 'var(--accent)' : 'var(--accent-light)',
                  }}
                />
                <div className={styles.barLabel}>{days[i]}</div>
              </div>
            ))}
          </div>
        </Card>

        <SectionHeader title="Recent activity" />
        <Card>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th><th>Trigger</th><th>Flow</th><th>Time</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((r, i) => (
                <tr key={i}>
                  <td>{r.user}</td>
                  <td><code className={styles.code}>{r.trigger}</code></td>
                  <td>{r.flow}</td>
                  <td className={styles.muted}>{r.time}</td>
                  <td><Badge type={r.status}>{r.label}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
