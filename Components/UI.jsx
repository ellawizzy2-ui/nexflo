import styles from './UI.module.css'

export function Badge({ children, type = 'green' }) {
  return <span className={`${styles.badge} ${styles['badge_' + type]}`}>{children}</span>
}

export function Btn({ children, primary, danger, onClick, style, full }) {
  return (
    <button
      className={`${styles.btn} ${primary ? styles.btnPrimary : ''} ${danger ? styles.btnDanger : ''} ${full ? styles.btnFull : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

export function MetricCard({ label, value, change, changeType }) {
  return (
    <div className={styles.metricCard}>
      <div className={styles.metricLabel}>{label}</div>
      <div className={styles.metricValue}>{value}</div>
      {change && <div className={`${styles.metricChange} ${styles['change_' + changeType]}`}>{change}</div>}
    </div>
  )
}

export function Card({ children, style }) {
  return <div className={styles.card} style={style}>{children}</div>
}

export function SectionHeader({ title, action }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionTitle}>{title}</div>
      {action}
    </div>
  )
}

export function Topbar({ title, children }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.pageTitle}>{title}</div>
      <div className={styles.topbarActions}>{children}</div>
    </div>
  )
}

export function Toggle({ on = true }) {
  return <div className={`${styles.toggle} ${on ? '' : styles.toggleOff}`} />
}
