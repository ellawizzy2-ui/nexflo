import { Badge, Btn, Card, SectionHeader, Topbar } from './UI'
import styles from './Pages.module.css'

const flows = [
  { name: 'Info flow',    keyword: 'INFO',  desc: 'Sends welcome DM + product info', sent: 892, status: 'green', label: 'Active' },
  { name: 'Pricing flow', keyword: 'PRICE', desc: 'Sends pricing details + CTA',      sent: 431, status: 'green', label: 'Active' },
  { name: 'Support flow', keyword: 'HELP',  desc: 'Routes to support message',         sent: 210, status: 'amber', label: 'Paused' },
]

const keywords = [
  { kw: 'INFO',  flow: 'Info flow',    status: 'green', label: 'Active' },
  { kw: 'PRICE', flow: 'Pricing flow', status: 'green', label: 'Active' },
  { kw: 'HELP',  flow: 'Support flow', status: 'amber', label: 'Paused' },
  { kw: 'DEAL',  flow: 'Promo flow',   status: 'green', label: 'Active' },
]

export default function Flows() {
  return (
    <div className={styles.page}>
      <Topbar title="Flows">
        <Btn primary>+ New flow</Btn>
      </Topbar>
      <div className={styles.content}>
        <div className={styles.flowGrid}>
          {flows.map((f, i) => (
            <div key={i} className={styles.flowCard}>
              <div className={styles.flowCardTop}>
                <div className={styles.flowName}>{f.name}</div>
                <Badge type={f.status}>{f.label}</Badge>
              </div>
              <div className={styles.flowMeta}>Keyword: <code className={styles.code}>{f.keyword}</code></div>
              <div className={styles.flowDesc}>{f.desc}</div>
              <div className={styles.flowFooter}>
                <span className={styles.muted}>{f.sent.toLocaleString()} sent</span>
                <Btn>Edit</Btn>
              </div>
            </div>
          ))}
          <div className={`${styles.flowCard} ${styles.flowCardNew}`}>
            <div className={styles.newFlowIcon}>+</div>
            <div className={styles.muted}>Create new flow</div>
          </div>
        </div>

        <div className={styles.subsectionHeader}>
          <span>Keywords</span>
          <Btn>+ Add keyword</Btn>
        </div>
        <Card>
          {keywords.map((k, i) => (
            <div key={i} className={styles.keywordRow}>
              <span className={styles.keywordTag}>{k.kw}</span>
              <span className={styles.keywordAction}>→ Triggers {k.flow} · DM sent immediately</span>
              <Badge type={k.status}>{k.label}</Badge>
              <Btn>Edit</Btn>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}
