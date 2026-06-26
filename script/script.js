(function () {
  const el = document.createElement('style');
  el.textContent = "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg: #080808;\r\n  --bg-panel: #111111;\r\n  --bg-row: #181818;\r\n  --bg-input: #1c1c1c;\r\n  --border: #2c2c2c;\r\n  --border-light: #3a3a3a;\r\n  --text: #ffffff;\r\n  --text-muted: #7a7a7a;\r\n  --text-dim: #4a4a4a;\r\n  --active-bg: #ffffff;\r\n  --active-text: #080808;\r\n  --radius: 4px;\r\n  --radius-icon: 5px;\r\n  --font: 'Space Grotesk', system-ui, sans-serif;\r\n  --font-display: 'Bebas Neue', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: var(--font);\r\n  background: var(--bg);\r\n  color: var(--text);\r\n  line-height: 1.6;\r\n  overflow-x: hidden;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.grid-bg {\r\n  position: fixed;\r\n  inset: 0;\r\n  pointer-events: none;\r\n  z-index: 0;\r\n  background-image:\r\n    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),\r\n    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);\r\n  background-size: 48px 48px;\r\n  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 80%);\r\n}\r\n\r\n.noise {\r\n  position: fixed;\r\n  inset: 0;\r\n  pointer-events: none;\r\n  z-index: 9999;\r\n  opacity: 0.025;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");\r\n}\r\n\r\nmain,\r\n.header,\r\n.footer {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.icon-box {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 42px;\r\n  height: 42px;\r\n  background: var(--bg-input);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-icon);\r\n  color: var(--text);\r\n}\r\n\r\n.icon-box svg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.icon-box--sm {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.icon-box--sm svg {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.icon-box--xs {\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n\r\n.icon-box--xs svg {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\n.icon-box--btn {\r\n  width: 28px;\r\n  height: 28px;\r\n  background: var(--active-text);\r\n  border-color: transparent;\r\n  color: var(--active-bg);\r\n}\r\n\r\n.icon-box--btn svg {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\n.icon-box--ghost {\r\n  background: transparent;\r\n  border-color: var(--border-light);\r\n  color: var(--text-muted);\r\n}\r\n\r\n.icon-box--invert {\r\n  background: var(--text);\r\n  border-color: var(--text);\r\n  color: var(--bg);\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 2.5rem;\r\n  background: rgba(8, 8, 8, 0.9);\r\n  backdrop-filter: blur(16px);\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n.logo {\r\n  display: inline-flex;\r\n  text-decoration: none;\r\n  line-height: 0;\r\n}\r\n\r\n.logo img {\r\n  height: 28px;\r\n  width: auto;\r\n  display: block;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.nav a {\r\n  color: var(--text-muted);\r\n  text-decoration: none;\r\n  font-size: 0.72rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.12em;\r\n  padding: 0.5rem 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: var(--radius);\r\n  transition: all 0.2s;\r\n}\r\n\r\n.nav a:hover {\r\n  color: var(--text);\r\n  border-color: var(--border);\r\n  background: var(--bg-row);\r\n}\r\n\r\n.btn-discord {\r\n  padding: 0.55rem 1.1rem;\r\n  background: var(--text);\r\n  color: var(--bg);\r\n  text-decoration: none;\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  border-radius: var(--radius);\r\n  transition: opacity 0.2s;\r\n}\r\n\r\n.btn-discord:hover {\r\n  opacity: 0.88;\r\n}\r\n\r\n.hero {\r\n  min-height: 100vh;\r\n  padding: 7rem 2.5rem 4rem;\r\n  max-width: 1180px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.hero-inner {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 4rem;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.hero-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.65rem;\r\n  font-size: 0.68rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.18em;\r\n  color: var(--text-muted);\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.75rem;\r\n}\r\n\r\n.hero h1 {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(3.2rem, 6.5vw, 5.5rem);\r\n  line-height: 0.92;\r\n  letter-spacing: 0.04em;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.hero h1 .outline {\r\n  color: transparent;\r\n  -webkit-text-stroke: 1.5px var(--text);\r\n}\r\n\r\n.hero-desc {\r\n  max-width: 440px;\r\n  color: var(--text-muted);\r\n  font-size: 0.95rem;\r\n  margin-bottom: 2rem;\r\n  line-height: 1.75;\r\n}\r\n\r\n.hero-actions {\r\n  display: flex;\r\n  gap: 0.75rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.65rem;\r\n  padding: 0.75rem 1.35rem;\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  text-decoration: none;\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  font-family: var(--font);\r\n}\r\n\r\n.btn-primary {\r\n  background: var(--text);\r\n  color: var(--bg);\r\n}\r\n\r\n.btn-primary:hover {\r\n  opacity: 0.88;\r\n}\r\n\r\n.btn-ghost {\r\n  background: var(--bg-row);\r\n  color: var(--text);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.btn-ghost:hover {\r\n  border-color: var(--border-light);\r\n  background: var(--bg-input);\r\n}\r\n\r\n.hero-visual {\r\n  position: relative;\r\n}\r\n\r\n.hero-watermark {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: clamp(180px, 40vw, 320px);\r\n  height: auto;\r\n  opacity: 0.06;\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.stats-panel {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background: var(--bg-panel);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  padding: 0.75rem;\r\n}\r\n\r\n.stat-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.1rem;\r\n  background: var(--bg-row);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  transition: border-color 0.2s;\r\n}\r\n\r\n.stat-item:hover {\r\n  border-color: var(--border-light);\r\n}\r\n\r\n.stat-item > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1rem;\r\n}\r\n\r\n.stat-value {\r\n  font-family: var(--font-display);\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.08em;\r\n  line-height: 1;\r\n}\r\n\r\n.stat-label {\r\n  font-size: 0.68rem;\r\n  color: var(--text-muted);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.08em;\r\n  font-weight: 500;\r\n}\r\n\r\n.section {\r\n  padding: 4rem 2.5rem;\r\n  max-width: 1180px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.panel-block {\r\n  position: relative;\r\n  background: var(--bg-panel);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  padding: 3rem 2.5rem 2.5rem;\r\n}\r\n\r\n.panel-tab {\r\n  position: absolute;\r\n  top: -1px;\r\n  left: 2rem;\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n  border-bottom: none;\r\n  border-radius: var(--radius) var(--radius) 0 0;\r\n  padding: 0.45rem 1rem;\r\n  font-size: 0.65rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.panel-body--intro h2 {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2rem, 4vw, 3rem);\r\n  letter-spacing: 0.04em;\r\n  line-height: 1.05;\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n.panel-body--intro p {\r\n  color: var(--text-muted);\r\n  font-size: 0.95rem;\r\n  max-width: 480px;\r\n}\r\n\r\n.feature-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.feature-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.25rem;\r\n  padding: 1.35rem 1.5rem;\r\n  background: var(--bg-panel);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  transition: all 0.2s;\r\n}\r\n\r\n.feature-row:hover {\r\n  border-color: var(--border-light);\r\n  background: var(--bg-row);\r\n}\r\n\r\n.feature-row:hover .icon-box {\r\n  border-color: var(--text-muted);\r\n}\r\n\r\n.feature-row__content {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.feature-row__content h3 {\r\n  font-size: 0.95rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.06em;\r\n  margin-bottom: 0.3rem;\r\n}\r\n\r\n.feature-row__content p {\r\n  font-size: 0.82rem;\r\n  color: var(--text-muted);\r\n  line-height: 1.6;\r\n}\r\n\r\n.feature-row__tag {\r\n  font-size: 0.6rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  color: var(--text-dim);\r\n  padding: 0.35rem 0.65rem;\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  background: var(--bg);\r\n  white-space: nowrap;\r\n}\r\n\r\n.feature-row--link {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\n.feature-row--link:hover .feature-row__tag {\r\n  color: var(--text);\r\n  border-color: var(--border-light);\r\n}\r\n\r\n.nav a.nav-active {\r\n  color: var(--text);\r\n  border-color: var(--border);\r\n  background: var(--bg-row);\r\n}\r\n\r\n.section-label {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.65rem;\r\n  font-size: 0.68rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  text-transform: uppercase;\r\n  color: var(--text-muted);\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.feature-row__content code {\r\n  font-size: 0.75rem;\r\n  color: var(--text);\r\n  background: var(--bg-input);\r\n  padding: 0.1rem 0.35rem;\r\n  border-radius: 2px;\r\n}\r\n\r\n.tool-section {\r\n  padding-top: 2rem;\r\n}\r\n\r\n.tool-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.tool-panel {\r\n  width: 100%;\r\n  max-width: 640px;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n.tool-panel--wide {\r\n  max-width: 720px;\r\n}\r\n\r\n.tool-intro {\r\n  margin-bottom: 1.25rem;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n.tool-intro p {\r\n  font-size: 0.82rem;\r\n  color: var(--text-muted);\r\n  line-height: 1.65;\r\n}\r\n\r\n.tool-intro strong,\r\n.tool-usage strong {\r\n  color: var(--text);\r\n}\r\n\r\n.config-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.65rem;\r\n  margin-bottom: 1.25rem;\r\n}\r\n\r\n.config-item {\r\n  padding: 1rem 1.1rem;\r\n  background: var(--bg-row);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n}\r\n\r\n.config-item--compact {\r\n  padding: 0.85rem 1rem;\r\n}\r\n\r\n.config-item__head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n.config-item__head code {\r\n  font-size: 0.68rem;\r\n  font-weight: 600;\r\n  color: var(--text);\r\n  letter-spacing: 0.02em;\r\n  word-break: break-all;\r\n}\r\n\r\n.config-value {\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  color: var(--text-muted);\r\n  font-variant-numeric: tabular-nums;\r\n  white-space: nowrap;\r\n}\r\n\r\n.config-desc {\r\n  font-size: 0.72rem;\r\n  color: var(--text-dim);\r\n  line-height: 1.55;\r\n  margin-bottom: 0.65rem;\r\n}\r\n\r\n.config-desc strong {\r\n  color: var(--text-muted);\r\n}\r\n\r\n.config-range {\r\n  width: 100%;\r\n  height: 4px;\r\n  appearance: none;\r\n  background: var(--border);\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.config-range::-webkit-slider-thumb {\r\n  appearance: none;\r\n  width: 14px;\r\n  height: 14px;\r\n  background: var(--text);\r\n  border-radius: var(--radius-icon);\r\n  cursor: pointer;\r\n}\r\n\r\n.config-bools {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.config-bools .sala-row {\r\n  padding: 0.5rem 0.75rem;\r\n  background: var(--bg-row);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n}\r\n\r\n.tool-usage {\r\n  margin-bottom: 1rem;\r\n  padding: 1rem 1.1rem;\r\n  background: var(--bg-input);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n}\r\n\r\n.tool-usage__title {\r\n  display: block;\r\n  font-size: 0.62rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  text-transform: uppercase;\r\n  color: var(--text-muted);\r\n  margin-bottom: 0.65rem;\r\n}\r\n\r\n.tool-usage ol {\r\n  margin-left: 1.1rem;\r\n  font-size: 0.75rem;\r\n  color: var(--text-muted);\r\n  line-height: 1.8;\r\n}\r\n\r\n.tool-usage code {\r\n  font-size: 0.68rem;\r\n  color: var(--text);\r\n  background: var(--bg);\r\n  padding: 0.1rem 0.35rem;\r\n  border-radius: 2px;\r\n}\r\n\r\n.tool-output {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.tool-output textarea {\r\n  width: 100%;\r\n  background: var(--bg-input);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  color: var(--text-muted);\r\n  font-family: ui-monospace, monospace;\r\n  font-size: 0.68rem;\r\n  line-height: 1.6;\r\n  padding: 0.85rem 1rem;\r\n  resize: none;\r\n  outline: none;\r\n  overflow-y: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--border-light) var(--bg-input);\r\n}\r\n\r\n.tool-output textarea::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.tool-output textarea::-webkit-scrollbar-track {\r\n  background: var(--bg-input);\r\n}\r\n\r\n.tool-output textarea::-webkit-scrollbar-thumb {\r\n  background: var(--border-light);\r\n  border-radius: 2px;\r\n}\r\n\r\n.tool-output textarea::-webkit-scrollbar-button {\r\n  display: none;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.tool-output textarea:focus {\r\n  border-color: var(--border-light);\r\n}\r\n\r\n.sala-section {\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.sala-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.sala-panel {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 640px;\r\n  background: var(--bg-panel);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  padding: 2.75rem 1.75rem 0;\r\n}\r\n\r\n.sala-tab {\r\n  position: absolute;\r\n  top: -1px;\r\n  left: 1.75rem;\r\n  background: var(--bg);\r\n  color: var(--text);\r\n  font-size: 0.62rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  padding: 0.45rem 0.9rem;\r\n  border: 1px solid var(--border);\r\n  border-bottom: none;\r\n  border-radius: var(--radius) var(--radius) 0 0;\r\n}\r\n\r\n.sala-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 1.75rem;\r\n}\r\n\r\n.sala-logo img {\r\n  height: 36px;\r\n  width: auto;\r\n}\r\n\r\n.server-logo {\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n.server-logo img {\r\n  height: 40px;\r\n  width: auto;\r\n}\r\n\r\n.sala-row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 0.6rem 0;\r\n  border-top: 1px solid var(--border);\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.sala-row.teams {\r\n  border-top: none;\r\n  gap: 0.6rem;\r\n  padding-bottom: 0.4rem;\r\n}\r\n\r\n.team-input {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.55rem;\r\n  background: var(--bg-input);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  padding: 0.5rem 0.7rem;\r\n  min-width: 0;\r\n}\r\n\r\n.team-input input {\r\n  flex: 1;\r\n  background: none;\r\n  border: none;\r\n  color: var(--text);\r\n  font-family: var(--font);\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.06em;\r\n  outline: none;\r\n  min-width: 0;\r\n}\r\n\r\n.team-input input::placeholder {\r\n  color: var(--text-muted);\r\n}\r\n\r\n.row-label {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.55rem;\r\n  font-size: 0.68rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.1em;\r\n  white-space: nowrap;\r\n  min-width: 120px;\r\n}\r\n\r\n.toggle-group {\r\n  display: flex;\r\n  gap: 0.3rem;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n  flex: 1;\r\n}\r\n\r\n.toggle {\r\n  padding: 0.4rem 0.75rem;\r\n  background: var(--bg-input);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  color: var(--text-muted);\r\n  font-family: var(--font);\r\n  font-size: 0.65rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.06em;\r\n  cursor: pointer;\r\n  transition: all 0.15s;\r\n  white-space: nowrap;\r\n}\r\n\r\n.toggle:hover:not(.active) {\r\n  color: var(--text);\r\n  border-color: var(--border-light);\r\n}\r\n\r\n.toggle.active {\r\n  background: var(--active-bg);\r\n  color: var(--active-text);\r\n  border-color: var(--active-bg);\r\n}\r\n\r\n.sala-footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin-top: 1rem;\r\n  border-top: 1px solid var(--border);\r\n}\r\n\r\n.sala-action {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  background: var(--bg-input);\r\n  border: none;\r\n  border-right: 1px solid var(--border);\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.sala-action:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.sala-action:hover {\r\n  background: var(--bg-row);\r\n}\r\n\r\n.sala-action--confirm:hover .icon-box--invert {\r\n  opacity: 0.85;\r\n}\r\n\r\n.panel-block--server {\r\n  padding-top: 3rem;\r\n}\r\n\r\n.server-layout {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2.5rem;\r\n  align-items: start;\r\n}\r\n\r\n.server-info p {\r\n  color: var(--text-muted);\r\n  font-size: 0.9rem;\r\n  margin-bottom: 1.75rem;\r\n  max-width: 380px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.btn-connect {\r\n  width: 100%;\r\n  justify-content: center;\r\n  padding: 0.9rem;\r\n}\r\n\r\n.server-status {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.status-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.1rem;\r\n  background: var(--bg-row);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n}\r\n\r\n.status-item > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.15rem;\r\n}\r\n\r\n.status-label {\r\n  font-size: 0.62rem;\r\n  color: var(--text-dim);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 600;\r\n}\r\n\r\n.status-value {\r\n  font-size: 0.88rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.04em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.status-value.online {\r\n  color: var(--text);\r\n}\r\n\r\n.status-value.offline {\r\n  color: var(--text-muted);\r\n}\r\n\r\n#player-count,\r\n#hero-players {\r\n  font-variant-numeric: tabular-nums;\r\n  letter-spacing: 0.06em;\r\n  text-transform: none;\r\n}\r\n\r\n.status-value--mono {\r\n  font-family: ui-monospace, 'Cascadia Code', 'Consolas', monospace;\r\n  font-size: 0.78rem;\r\n  text-transform: none;\r\n  letter-spacing: 0.02em;\r\n  word-break: break-all;\r\n}\r\n\r\n.ranking-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 1.25rem;\r\n}\r\n\r\n.ranking-grid > * {\r\n  min-width: 0;\r\n}\r\n\r\n.panel-block--ranking-wide {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.panel-block--ranking {\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n.panel-body--ranking {\r\n  padding: 0;\r\n}\r\n\r\n.ranking-table-wrap {\r\n  overflow-x: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.ranking-table {\r\n  width: 100%;\r\n  min-width: 280px;\r\n  border-collapse: collapse;\r\n  font-size: 0.82rem;\r\n}\r\n\r\n.panel-block--ranking-wide .ranking-table {\r\n  min-width: 520px;\r\n}\r\n\r\n.ranking-table th,\r\n.ranking-table td {\r\n  padding: 0.65rem 0.75rem;\r\n  text-align: left;\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n.ranking-table .ranking-player {\r\n  word-break: break-word;\r\n}\r\n\r\n.ranking-table th {\r\n  font-size: 0.62rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  color: var(--text-dim);\r\n  font-weight: 600;\r\n  background: var(--bg-row);\r\n}\r\n\r\n.ranking-table tbody tr:hover {\r\n  background: var(--bg-row);\r\n}\r\n\r\n.ranking-table tbody tr:last-child td {\r\n  border-bottom: none;\r\n}\r\n\r\n.ranking-pos {\r\n  width: 2.25rem;\r\n  font-weight: 700;\r\n  color: var(--text-dim);\r\n  font-variant-numeric: tabular-nums;\r\n}\r\n\r\n.ranking-table th:nth-child(3),\r\n.ranking-table th:nth-child(4),\r\n.ranking-table th:nth-child(5),\r\n.ranking-table th:nth-child(6),\r\n.ranking-table td:nth-child(3),\r\n.ranking-table td:nth-child(4),\r\n.ranking-table td:nth-child(5),\r\n.ranking-table td:nth-child(6) {\r\n  text-align: center;\r\n  white-space: nowrap;\r\n}\r\n\r\n.ranking-player {\r\n  font-weight: 600;\r\n}\r\n\r\n.ranking-id {\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  color: var(--text-dim);\r\n  font-size: 0.72rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.ranking-empty {\r\n  text-align: center;\r\n  color: var(--text-muted);\r\n  padding: 2rem 1rem !important;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.ranking-updated {\r\n  margin-top: 1rem;\r\n  font-size: 0.72rem;\r\n  color: var(--text-dim);\r\n  text-align: right;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .ranking-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .panel-block--ranking-wide {\r\n    grid-column: auto;\r\n  }\r\n}\r\n\r\n.footer {\r\n  border-top: 1px solid var(--border);\r\n  padding: 2rem 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  max-width: 1180px;\r\n  margin: 0 auto 2rem;\r\n}\r\n\r\n.footer p {\r\n  font-size: 0.75rem;\r\n  color: var(--text-dim);\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\n.toast {\r\n  position: fixed;\r\n  bottom: 2rem;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(100px);\r\n  background: var(--text);\r\n  color: var(--bg);\r\n  padding: 0.8rem 1.4rem;\r\n  border-radius: var(--radius);\r\n  font-size: 0.78rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.04em;\r\n  text-transform: uppercase;\r\n  opacity: 0;\r\n  transition: all 0.3s ease;\r\n  z-index: 1000;\r\n  pointer-events: none;\r\n}\r\n\r\n.toast.show {\r\n  opacity: 1;\r\n  transform: translateX(-50%) translateY(0);\r\n}\r\n\r\n.rules-page main {\r\n  min-height: calc(100vh - 140px);\r\n}\r\n\r\n.rules-main {\r\n  padding: 7rem 2.5rem 4rem;\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.rules-panel {\r\n  padding-top: 3rem;\r\n}\r\n\r\n.rules-header {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 1.25rem;\r\n  margin-bottom: 2rem;\r\n  padding-bottom: 2rem;\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n.rules-header h1 {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(1.8rem, 4vw, 2.4rem);\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n  line-height: 1.1;\r\n}\r\n\r\n.rules-header p {\r\n  color: var(--text-muted);\r\n  font-size: 0.9rem;\r\n  line-height: 1.65;\r\n}\r\n\r\n.rules-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.rules-item {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 0.85rem;\r\n  padding: 1rem 1.1rem;\r\n  background: var(--bg-row);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n}\r\n\r\n.rules-item p {\r\n  font-size: 0.88rem;\r\n  color: var(--text-muted);\r\n  line-height: 1.65;\r\n  padding-top: 0.15rem;\r\n}\r\n\r\n.rules-item a {\r\n  color: var(--text);\r\n  text-decoration: underline;\r\n  text-underline-offset: 3px;\r\n}\r\n\r\n.rules-item a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.rules-bullet {\r\n  margin-top: 0.1rem;\r\n  background: var(--bg);\r\n}\r\n\r\n.rules-note {\r\n  margin: 0 0 1.5rem;\r\n  padding: 1.1rem 1.25rem;\r\n  border-left: 2px solid var(--text);\r\n  background: var(--bg-row);\r\n  border-radius: 0 var(--radius) var(--radius) 0;\r\n  font-size: 0.85rem;\r\n  color: var(--text-muted);\r\n  font-style: italic;\r\n  line-height: 1.65;\r\n}\r\n\r\n.rules-sign {\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n  color: var(--text-dim);\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.rules-back {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .header {\r\n    padding: 0.85rem 1.25rem;\r\n  }\r\n\r\n  .nav {\r\n    display: none;\r\n  }\r\n\r\n  .hero {\r\n    padding: 6rem 1.25rem 3rem;\r\n  }\r\n\r\n  .hero-inner {\r\n    grid-template-columns: 1fr;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .hero-visual {\r\n    order: -1;\r\n  }\r\n\r\n  .hero-watermark {\r\n    display: none;\r\n  }\r\n\r\n  .section {\r\n    padding: 3rem 1.25rem;\r\n  }\r\n\r\n  .panel-block {\r\n    padding: 2.5rem 1.25rem 1.75rem;\r\n  }\r\n\r\n  .feature-row {\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .feature-row__tag {\r\n    margin-left: calc(42px + 1.25rem);\r\n  }\r\n\r\n  .server-layout {\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5rem;\r\n  }\r\n\r\n  .sala-panel {\r\n    padding: 2.5rem 1.1rem 0;\r\n  }\r\n\r\n  .sala-row {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .toggle-group {\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .rules-main {\r\n    padding: 6rem 1.25rem 3rem;\r\n  }\r\n\r\n  .rules-header {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .footer {\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n    text-align: center;\r\n    padding: 1.75rem 1.25rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .sala-row.teams {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .team-input {\r\n    width: 100%;\r\n  }\r\n\r\n  .feature-row__tag {\r\n    margin-left: 0;\r\n  }\r\n}\r\n";
  document.head.appendChild(el);
})();

const DISCORD_URL = 'https://discord.gg/noirgg';

const conexao = {
  SERVER_IP: '178.132.198.165:30120',
  JOIN_URL: 'https://cfx.re/join/98yjgee',
  JOIN_CODE: '98yjgee',
  DISPLAY_IP: 'connect noir.rpfivem.online',
};

const FIVEM_CONNECT = `fivem://connect/cfx.re/join/${conexao.JOIN_CODE}`;

const REFRESH_MS = 60_000;
const RANKING_REFRESH_MS = 5 * 60_000;

const IS_HTTP = window.location.protocol === 'http:' || window.location.protocol === 'https:';

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function setPlayerDisplay(players, slots, online, displayIp) {
  const el = document.getElementById('player-count');
  const statusEl = document.getElementById('server-status');
  const heroEl = document.getElementById('hero-players');
  const ipEl = document.getElementById('server-ip');

  const playersText = online ? `${players}/${slots}` : '—';

  if (el) {
    el.textContent = playersText;
    el.classList.toggle('offline', !online);
  }

  if (heroEl) {
    heroEl.textContent = playersText;
  }

  if (statusEl) {
    statusEl.textContent = online ? 'Online' : 'Offline';
    statusEl.classList.toggle('online', online);
    statusEl.classList.toggle('offline', !online);
  }

  if (ipEl) {
    ipEl.textContent = displayIp || conexao.DISPLAY_IP;
  }
}

async function fetchFromApi() {
  if (!IS_HTTP) return null;

  const res = await fetch('/api/status');
  if (!res.ok) throw new Error('API indisponível');
  const data = await res.json();
  return {
    players: data.players ?? 0,
    slots: data.maxPlayers ?? 32,
    online: Boolean(data.online),
    displayIp: data.displayIp || conexao.DISPLAY_IP,
  };
}

async function fetchFromCfx() {
  const res = await fetch(
    `https://servers-frontend.fivem.net/api/servers/single/${conexao.JOIN_CODE}`
  );

  if (!res.ok) throw new Error('Servidor não encontrado na lista Cfx');

  const json = await res.json();
  const data = json.Data;

  if (!data) throw new Error('Resposta inválida da API Cfx');

  const players = data.clients ?? 0;
  const slots =
    data.svMaxclients ||
    data.sv_maxclients ||
    Number(data.vars?.sv_maxClients) ||
    Number(data.vars?.sv_maxclients) ||
    32;

  return { players, slots, online: true, displayIp: conexao.DISPLAY_IP };
}

async function updateServerStatus() {
  try {
    const fromApi = await fetchFromApi();
    if (fromApi) {
      setPlayerDisplay(fromApi.players, fromApi.slots, fromApi.online, fromApi.displayIp);
      return;
    }
  } catch {
  }

  try {
    const status = await fetchFromCfx();
    setPlayerDisplay(status.players, status.slots, status.online, status.displayIp);
  } catch {
    setPlayerDisplay(0, 32, false, conexao.DISPLAY_IP);
  }
}

function renderRankingRows(tbody, rows, emptyMessage, { showWins = false } = {}) {
  const colCount = showWins ? 6 : 5;
  if (!tbody) return;

  if (!rows?.length) {
    tbody.innerHTML = `<tr><td colspan="${colCount}" class="ranking-empty">${emptyMessage}</td></tr>`;
    return;
  }

  tbody.innerHTML = rows
    .map(
      (row) => `
    <tr>
      <td class="ranking-pos">${row.rank}</td>
      <td class="ranking-player">
        <span class="ranking-id">#${row.userId}</span>
        ${escapeHtml(row.name)}
      </td>
      ${showWins ? `<td>${row.wins ?? 0}</td>` : ''}
      <td>${row.kills}</td>
      <td>${row.deaths}</td>
      <td>${escapeHtml(row.playtime)}</td>
    </tr>`
    )
    .join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function updateRanking() {
  const ffaBody = document.getElementById('ranking-ffa');
  const actionBody = document.getElementById('ranking-action');
  const queueBody = document.getElementById('ranking-queue');
  const updatedEl = document.getElementById('ranking-updated');

  if (!ffaBody && !actionBody && !queueBody) return;

  const emptyMsg = 'Nenhum jogador no ranking ainda.';

  if (!IS_HTTP) {
    const msg = 'Ranking disponível ao rodar o servidor do site.';
    renderRankingRows(ffaBody, [], msg);
    renderRankingRows(actionBody, [], msg);
    renderRankingRows(queueBody, [], msg, { showWins: true });
    if (updatedEl) updatedEl.textContent = '';
    return;
  }

  try {
    const res = await fetch('/api/ranking');
    const data = await res.json();

    if (!res.ok && res.status === 503) {
      const msg = 'Configure o banco no arquivo .env para exibir o ranking.';
      renderRankingRows(ffaBody, [], msg);
      renderRankingRows(actionBody, [], msg);
      renderRankingRows(queueBody, [], msg, { showWins: true });
      if (updatedEl) updatedEl.textContent = '';
      return;
    }

    renderRankingRows(ffaBody, data.ffa, emptyMsg);
    renderRankingRows(actionBody, data.action, emptyMsg);
    renderRankingRows(queueBody, data.queue, emptyMsg, { showWins: true });

    if (updatedEl && data.updatedAt) {
      const date = new Date(data.updatedAt);
      updatedEl.textContent = `Atualizado em ${date.toLocaleString('pt-BR')}`;
    }
  } catch {
    const msg = 'Não foi possível carregar o ranking.';
    renderRankingRows(ffaBody, [], msg);
    renderRankingRows(actionBody, [], msg);
    renderRankingRows(queueBody, [], msg, { showWins: true });
    if (updatedEl) updatedEl.textContent = '';
  }
}

const btnConnect = document.getElementById('btn-connect');

document.querySelectorAll('#btn-discord-header, #btn-discord-hero').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(DISCORD_URL, '_blank');
  });
});

if (btnConnect) {
  btnConnect.addEventListener('click', () => {
    window.location.href = FIVEM_CONNECT;
    showToast('Abrindo FiveM...');
  });
}

if (document.getElementById('player-count')) {
  updateServerStatus();
  setInterval(updateServerStatus, REFRESH_MS);
}

if (document.getElementById('ranking-ffa')) {
  updateRanking();
  setInterval(updateRanking, RANKING_REFRESH_MS);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.feature-row, .sala-panel, .panel-block, .stat-item, .tool-panel').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  observer.observe(el);
});
