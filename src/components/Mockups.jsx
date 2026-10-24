// Illustrative product mockups for featured work — composed in HTML/CSS, no real product data.
function Window({ title, children, className = '' }) {
  return (
    <div className={`mock ${className}`} aria-hidden="true">
      <div className="mock__bar">
        <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
        <span className="mock__url">{title}</span>
      </div>
      <div className="mock__body">{children}</div>
    </div>
  )
}

function AgentMock() {
  const rows = [
    ['Cloud migration', 'On track', 'ok', 82],
    ['ERP rollout', 'At risk', 'warn', 54],
    ['Data platform', 'At risk', 'warn', 47],
    ['Store refresh', 'On track', 'ok', 91],
    ['Security uplift', 'Blocked', 'bad', 30],
  ]
  return (
    <Window title="portfolio / workspace" className="mock--agent">
      <div className="mock-agent">
        <div className="mock-agent__table">
          <div className="mock-agent__kpis">
            <span><b>24</b> projects</span><span><b>$4.2M</b> planned</span><span><b>3</b> at risk</span>
          </div>
          {rows.map(([n, s, k, p]) => (
            <div key={n} className="mock-agent__row">
              <span>{n}</span>
              <span className={`status status--${k}`}>{s}</span>
              <span className="mock-agent__bar"><i style={{ width: `${p}%` }} /></span>
            </div>
          ))}
        </div>
        <div className="mock-agent__chat">
          <div className="mock-agent__chat-head"><span className="spark-ico" /> AI Assistant</div>
          <p className="bubble bubble--user">Which projects are at risk this quarter?</p>
          <p className="bubble bubble--ai">3 projects flagged. ERP rollout is 12% over budget; two have blocked dependencies.</p>
          <p className="bubble bubble--ai bubble--chips"><span>Draft update</span><span>Rebalance</span></p>
          <p className="bubble bubble--ai bubble--typing"><i /><i /><i /></p>
        </div>
      </div>
    </Window>
  )
}

function DashboardMock() {
  return (
    <Window title="ui-framework / components" className="mock--dash">
      <div className="mock-dash">
        <div className="mock-dash__card mock-dash__chart">
          {[40, 64, 52, 80, 58, 92, 70].map((h, i) => <i key={i} style={{ height: `${h}%`, '--i': i }} />)}
        </div>
        <div className="mock-dash__card mock-dash__ring"><span>87%</span></div>
        <div className="mock-dash__card mock-dash__controls">
          <span className="ui-btn">Primary</span>
          <span className="ui-btn ui-btn--ghost">Secondary</span>
          <span className="ui-toggle" />
        </div>
        <div className="mock-dash__card mock-dash__list">
          {[1, 2, 3].map(i => <span key={i}><i /><b /></span>)}
        </div>
      </div>
    </Window>
  )
}

function TreeMock() {
  const nodes = [
    [0, 'Classification library'], [1, 'Mechanical parts'], [2, 'Fasteners'], [3, 'Bolts · M8'],
    [3, 'Washers'], [2, 'Bearings'], [1, 'Electrical'], [2, 'Connectors'],
  ]
  return (
    <Window title="classification / web-app" className="mock--tree">
      <div className="mock-tree">
        <ul>
          {nodes.map(([d, n], i) => (
            <li key={i} style={{ '--d': d, '--i': i }} className={i === 3 ? 'is-selected' : ''}>
              <span className="caret" />{n}
            </li>
          ))}
        </ul>
        <div className="mock-tree__panel">
          <b>Attributes</b>
          {['Thread', 'Length', 'Material', 'Standard'].map(a => <span key={a}><em>{a}</em><i /></span>)}
        </div>
      </div>
    </Window>
  )
}

export const mockups = { agent: AgentMock, dashboard: DashboardMock, tree: TreeMock }
