import { useState } from 'react'
import { Badge, Btn, Card, SectionHeader, Topbar } from './UI'
import styles from './Pages.module.css'

const sentBroadcasts = [
  { name: 'May product update',      type: 'Email',        date: 'May 17, 2026', recipients: 412, opened: '74%', clicked: '31%', status: 'green', label: 'Sent' },
  { name: 'Flash sale announcement', type: 'Instagram DM', date: 'May 12, 2026', recipients: 890, opened: '81%', clicked: '—',   status: 'green', label: 'Sent' },
  { name: 'Welcome series — batch 3',type: 'Email',        date: 'May 8, 2026',  recipients: 210, opened: '61%', clicked: '22%', status: 'green', label: 'Sent' },
  { name: 'June promo — early access',type:'Email',        date: 'May 22, 2026', recipients: 530, opened: '—',   clicked: '—',   status: 'blue',  label: 'Scheduled' },
]

const audiences = [
  { label: 'All contacts',              count: '1,284' },
  { label: 'Contacts with email only',  count: '847' },
  { label: 'Active contacts only',      count: '1,190' },
]

export default function Broadcast() {
  const [view, setView] = useState('history')
  const [channel, setChannel] = useState('email')
  const [audienceIdx, setAudienceIdx] = useState(0)
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className={styles.page}>
      <Topbar title="Broadcast">
        {view === 'history' ? (
          <>
            <Btn>Drafts</Btn>
            <Btn primary onClick={() => setView('compose')}>+ New broadcast</Btn>
          </>
        ) : (
          <Btn onClick={() => setView('history')}>← Back</Btn>
        )}
      </Topbar>
      <div className={styles.content}>
        {view === 'history' ? (
          <>
            <div className={styles.metrics3}>
              <div className={styles.statMini}><div className={styles.statVal}>12</div><div className={styles.statLbl}>Total sent</div></div>
              <div className={styles.statMini}><div className={styles.statVal}>68%</div><div className={styles.statLbl}>Avg open rate</div></div>
              <div className={styles.statMini}><div className={styles.statVal}>847</div><div className={styles.statLbl}>Contacts reached</div></div>
            </div>
            <SectionHeader title="Sent broadcasts" />
            <Card>
              {sentBroadcasts.map((b, i) => (
                <div key={i} className={styles.broadcastRow}>
                  <div className={`${styles.broadcastIcon} ${b.type === 'Email' ? styles.broadcastEmail : styles.broadcastDm}`}>
                    {b.type === 'Email' ? '✉' : '◎'}
                  </div>
                  <div className={styles.broadcastInfo}>
                    <div className={styles.broadcastName}>{b.name}</div>
                    <div className={styles.muted}>{b.type} · {b.date} · {b.recipients.toLocaleString()} recipients</div>
                  </div>
                  <div className={styles.broadcastStats}>
                    <div className={styles.bstat}><strong>{b.opened}</strong><span>Opened</span></div>
                    <div className={styles.bstat}><strong>{b.clicked}</strong><span>Clicked</span></div>
                  </div>
                  <Badge type={b.status}>{b.label}</Badge>
                </div>
              ))}
            </Card>
          </>
        ) : (
          <div className={styles.broadcastLayout}>
            {/* Compose */}
            <div className={styles.composeBox}>
              <div>
                <div className={styles.fieldLabel}>Send via</div>
                <div className={styles.channelTabs}>
                  <button
                    className={`${styles.channelTab} ${channel === 'email' ? styles.channelSelected : ''}`}
                    onClick={() => setChannel('email')}
                  >✉ Bulk email</button>
                  <button
                    className={`${styles.channelTab} ${channel === 'dm' ? styles.channelSelected : ''}`}
                    onClick={() => setChannel('dm')}
                  >◎ Instagram DM</button>
                </div>
              </div>

              {channel === 'email' && (
                <div>
                  <div className={styles.fieldLabel}>Subject line</div>
                  <input
                    className={styles.fieldInput}
                    type="text"
                    placeholder="e.g. Big news for our community 🎉"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                </div>
              )}

              <div>
                <div className={styles.fieldLabel}>Message</div>
                <textarea
                  className={styles.fieldInput}
                  rows={5}
                  placeholder="Write your message here. Use {{first_name}} to personalise it."
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
              </div>

              <div>
                <div className={styles.fieldLabel}>Audience</div>
                {audiences.map((a, i) => (
                  <div
                    key={i}
                    className={`${styles.audienceOption} ${audienceIdx === i ? styles.audienceSelected : ''}`}
                    onClick={() => setAudienceIdx(i)}
                  >
                    <input type="radio" readOnly checked={audienceIdx === i} onChange={() => {}} />
                    <div>
                      <div className={styles.audienceLabel}>{a.label}</div>
                      <div className={styles.muted}>{a.count} people</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.composeActions}>
                <Btn>Save draft</Btn>
                <Btn primary>Send to {audiences[audienceIdx].count} contacts</Btn>
              </div>
            </div>

            {/* Preview */}
            <div className={styles.previewBox}>
              <div className={styles.previewTitle}>Preview</div>
              <div className={styles.emailPreview}>
                <div className={styles.emailHeader}>
                  <div className={styles.emailHeaderLogo}>◎</div>
                  <div className={styles.emailHeaderName}>crea8_1</div>
                </div>
                <div className={styles.emailBody}>
                  <div className={styles.emailSubject}>
                    {subject || 'Your subject line will appear here'}
                  </div>
                  <div className={styles.emailText}>
                    {body || 'Your message will appear here. Start typing to see the preview update.'}
                  </div>
                </div>
                <div className={styles.emailFooter}>
                  You&apos;re receiving this because you subscribed via Instagram · Unsubscribe
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
