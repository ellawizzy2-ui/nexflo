import { Btn, Card, SectionHeader, Toggle, Topbar } from './UI'
import styles from './Pages.module.css'

export default function Settings() {
  return (
    <div className={styles.page}>
      <Topbar title="Settings">
        <Btn primary>Save changes</Btn>
      </Topbar>
      <div className={styles.content}>
        <SectionHeader title="Instagram account" />
        <Card style={{ marginBottom: 20, overflow: 'visible' }}>
          <div className={styles.accountRow}>
            <div className={styles.accountAvatar}>C1</div>
            <div>
              <div className={styles.accountName}>crea8_1</div>
              <div className={styles.muted}>ID: 17841449618346877 · Connected</div>
            </div>
            <Btn>Reconnect</Btn>
          </div>
        </Card>

        <SectionHeader title="Notifications" />
        <Card>
          {[
            { label: 'New contact alerts',   desc: 'Get notified when someone subscribes', on: true },
            { label: 'DM delivery failures', desc: 'Alert when a DM fails to send',         on: true },
            { label: 'Weekly report',        desc: 'Summary email every Monday',             on: false },
          ].map((s, i) => (
            <div key={i} className={styles.settingsRow}>
              <div>
                <div className={styles.settingsLabel}>{s.label}</div>
                <div className={styles.muted}>{s.desc}</div>
              </div>
              <Toggle on={s.on} />
            </div>
          ))}
        </Card>

        <SectionHeader title="API tokens" />
        <Card>
          <div className={styles.settingsRow}>
            <div>
              <div className={styles.settingsLabel}>Instagram token</div>
              <div className={styles.muted}>IGAAc••••••••••••••••••••</div>
            </div>
            <Btn>Rotate</Btn>
          </div>
          <div className={styles.settingsRow}>
            <div>
              <div className={styles.settingsLabel}>Airtable base</div>
              <div className={styles.muted}>appEuUvJcz9E8BrMe · Connected</div>
            </div>
            <Btn>Edit</Btn>
          </div>
        </Card>
      </div>
    </div>
  )
}
