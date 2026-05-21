import styles from './Sidebar.module.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
  { id: 'contacts',  label: 'Contacts',  icon: '◎' },
  { id: 'flows',     label: 'Flows',     icon: '⑂' },
  { id: 'broadcast', label: 'Broadcast', icon: '⊳' },
]

const accountItems = [
  { id: 'billing',  label: 'Billing',  icon: '◈' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
]

export default function Sidebar({ active, onNav }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="3"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
          </svg>
        </div>
        NexFlow
      </div>

      <div className={styles.navSection}>Main</div>
      {navItems.map(item => (
        <button
          key={item.id}
          className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
          onClick={() => onNav(item.id)}
        >
          <span className={styles.navIcon}>{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div className={styles.navSection}>Account</div>
      {accountItems.map(item => (
        <button
          key={item.id}
          className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
          onClick={() => onNav(item.id)}
        >
          <span className={styles.navIcon}>{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div className={styles.bottom}>
        <div className={styles.userRow}>
          <div className={styles.avatar}>C1</div>
          <div>
            <div className={styles.userName}>crea8_1</div>
            <div className={styles.userPlan}>Pro plan</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
