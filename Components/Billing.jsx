import { Badge, Btn, Card, SectionHeader, Topbar } from './UI'
import styles from './Pages.module.css'

const plans = [
  {
    name: 'Starter', price: '$0', period: '/ month',
    features: ['500 contacts', '1 Instagram account', '3 keyword flows'],
    missing: ['Analytics', 'Broadcast'],
    cta: 'Current plan', featured: false,
  },
  {
    name: 'Pro', price: '$29', period: '/ month',
    features: ['Unlimited contacts', '3 Instagram accounts', 'Unlimited flows', 'Full analytics', 'Broadcast (email + DM)'],
    missing: [],
    cta: 'Upgrade to Pro', featured: true,
  },
  {
    name: 'Agency', price: '$99', period: '/ month',
    features: ['Unlimited everything', '20 IG accounts', 'Team access', 'Priority support'],
    missing: [],
    cta: 'Upgrade', featured: false,
  },
]

const invoices = [
  { month: 'May 2026', plan: 'Pro plan', amount: '$29.00' },
  { month: 'Apr 2026', plan: 'Pro plan', amount: '$29.00' },
  { month: 'Mar 2026', plan: 'Pro plan', amount: '$29.00' },
]

export default function Billing() {
  return (
    <div className={styles.page}>
      <Topbar title="Billing & plans" />
      <div className={styles.content}>
        <div className={styles.planGrid}>
          {plans.map((p, i) => (
            <div key={i} className={`${styles.planCard} ${p.featured ? styles.planFeatured : ''}`}>
              {p.featured && <div style={{ marginBottom: 8 }}><Badge type="green">Most popular</Badge></div>}
              <div className={styles.planName}>{p.name}</div>
              <div className={styles.planPrice}>{p.price} <span>{p.period}</span></div>
              <div className={styles.planFeatures}>
                {p.features.map((f, j) => (
                  <div key={j} className={styles.planFeature}><span className={styles.checkIcon}>✓</span>{f}</div>
                ))}
                {p.missing.map((f, j) => (
                  <div key={j} className={`${styles.planFeature} ${styles.planMissing}`}><span>✕</span>{f}</div>
                ))}
              </div>
              <Btn primary={p.featured} full>{p.cta}</Btn>
            </div>
          ))}
        </div>

        <SectionHeader title="Invoice history" />
        <Card>
          {invoices.map((inv, i) => (
            <div key={i} className={styles.invoiceRow}>
              <div>{inv.month}</div>
              <div className={styles.muted}>{inv.plan}</div>
              <div className={styles.invoiceAmount}>{inv.amount}</div>
              <Badge type="green">Paid</Badge>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}
