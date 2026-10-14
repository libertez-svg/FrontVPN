document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');
    const FLAGS = {
        de: `<svg viewBox="0 0 36 24"><rect width="36" height="8" fill="#1a1a1a"/><rect y="8" width="36" height="8" fill="#DD0000"/><rect y="16" width="36" height="8" fill="#FFCE00"/></svg>`,
        nl: `<svg viewBox="0 0 36 24"><rect width="36" height="8" fill="#AE1C28"/><rect y="8" width="36" height="8" fill="#FFF"/><rect y="16" width="36" height="8" fill="#21468B"/></svg>`,
        us: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#B22234"/><rect y="1.84" width="36" height="1.85" fill="#FFF"/><rect y="5.54" width="36" height="1.85" fill="#FFF"/><rect y="9.23" width="36" height="1.85" fill="#FFF"/><rect y="12.92" width="36" height="1.85" fill="#FFF"/><rect y="16.62" width="36" height="1.85" fill="#FFF"/><rect y="20.31" width="36" height="1.85" fill="#FFF"/><rect width="14.4" height="12.92" fill="#3C3B6E"/><g fill="#FFF" font-size="2"><circle cx="2.4" cy="1.6" r="0.7"/><circle cx="4.8" cy="1.6" r="0.7"/><circle cx="7.2" cy="1.6" r="0.7"/><circle cx="9.6" cy="1.6" r="0.7"/><circle cx="12" cy="1.6" r="0.7"/><circle cx="3.6" cy="3.2" r="0.7"/><circle cx="6" cy="3.2" r="0.7"/><circle cx="8.4" cy="3.2" r="0.7"/><circle cx="10.8" cy="3.2" r="0.7"/><circle cx="2.4" cy="4.8" r="0.7"/><circle cx="4.8" cy="4.8" r="0.7"/><circle cx="7.2" cy="4.8" r="0.7"/><circle cx="9.6" cy="4.8" r="0.7"/><circle cx="12" cy="4.8" r="0.7"/><circle cx="3.6" cy="6.4" r="0.7"/><circle cx="6" cy="6.4" r="0.7"/><circle cx="8.4" cy="6.4" r="0.7"/><circle cx="10.8" cy="6.4" r="0.7"/><circle cx="2.4" cy="8" r="0.7"/><circle cx="4.8" cy="8" r="0.7"/><circle cx="7.2" cy="8" r="0.7"/><circle cx="9.6" cy="8" r="0.7"/><circle cx="12" cy="8" r="0.7"/><circle cx="3.6" cy="9.6" r="0.7"/><circle cx="6" cy="9.6" r="0.7"/><circle cx="8.4" cy="9.6" r="0.7"/><circle cx="10.8" cy="9.6" r="0.7"/><circle cx="2.4" cy="11.2" r="0.7"/><circle cx="4.8" cy="11.2" r="0.7"/><circle cx="7.2" cy="11.2" r="0.7"/><circle cx="9.6" cy="11.2" r="0.7"/><circle cx="12" cy="11.2" r="0.7"/></g></svg>`,
        gb: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#012169"/><path d="M0 0L36 24M36 0L0 24" stroke="#FFF" stroke-width="4"/><path d="M0 0L36 24M36 0L0 24" stroke="#C8102E" stroke-width="2.5"/><path d="M18 0v24M0 12h36" stroke="#FFF" stroke-width="6"/><path d="M18 0v24M0 12h36" stroke="#C8102E" stroke-width="3.5"/></svg>`,
        fr: `<svg viewBox="0 0 36 24"><rect width="12" height="24" fill="#002395"/><rect x="12" width="12" height="24" fill="#FFF"/><rect x="24" width="12" height="24" fill="#ED2939"/></svg>`,
        jp: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#FFF"/><circle cx="18" cy="12" r="7" fill="#BC002D"/></svg>`,
        sg: `<svg viewBox="0 0 36 24"><rect width="36" height="12" fill="#EF3340"/><rect y="12" width="36" height="12" fill="#FFF"/><path d="M8.5 3.5a4 4 0 103.5 6.5 3.2 3.2 0 01-3.5-6.5z" fill="#FFF"/><g fill="#FFF"><polygon points="11.5,4 11.7,4.6 12.3,4.6 11.8,5 12,5.6 11.5,5.2 11,5.6 11.2,5 10.7,4.6 11.3,4.6"/><polygon points="13,5.5 13.2,6.1 13.8,6.1 13.3,6.5 13.5,7.1 13,6.7 12.5,7.1 12.7,6.5 12.2,6.1 12.8,6.1"/><polygon points="12.5,8 12.7,8.6 13.3,8.6 12.8,9 13,9.6 12.5,9.2 12,9.6 12.2,9 11.7,8.6 12.3,8.6"/><polygon points="10.5,9 10.7,9.6 11.3,9.6 10.8,10 11,10.6 10.5,10.2 10,10.6 10.2,10 9.7,9.6 10.3,9.6"/><polygon points="8.5,8 8.7,8.6 9.3,8.6 8.8,9 9,9.6 8.5,9.2 8,9.6 8.2,9 7.7,8.6 8.3,8.6"/></g></svg>`,
        ca: `<svg viewBox="0 0 36 24"><rect width="9" height="24" fill="#FF0000"/><rect x="9" width="18" height="24" fill="#FFF"/><rect x="27" width="9" height="24" fill="#FF0000"/><path d="M18 5l1 3h-1l1.5 2-0.5-1h1l-2 3 0.5-1.5h-1l0.5 2h-2l0.5-2h-1l0.5 1.5-2-3h1l-0.5 1L16 8h-1l1-3" fill="#FF0000"/></svg>`,
        au: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#00008B"/><g stroke="#FFF" stroke-width="0.8"><path d="M0 0L18 12M18 0L0 12" stroke-width="1.5"/><path d="M9 0v12M0 6h18" stroke-width="2.5"/></g><g stroke="#C8102E"><path d="M0 0L18 12M18 0L0 12" stroke-width="0.8"/><path d="M9 0v12M0 6h18" stroke-width="1.5"/></g><g fill="#FFF"><polygon points="26,16 26.4,17.2 27.6,17.2 26.6,17.9 27,19.1 26,18.4 25,19.1 25.4,17.9 24.4,17.2 25.6,17.2"/><polygon points="30,8 30.3,8.9 31.2,8.9 30.5,9.5 30.7,10.4 30,9.8 29.3,10.4 29.5,9.5 28.8,8.9 29.7,8.9"/><polygon points="32,4 32.3,4.9 33.2,4.9 32.5,5.5 32.7,6.4 32,5.8 31.3,6.4 31.5,5.5 30.8,4.9 31.7,4.9"/><polygon points="32,14 32.3,14.9 33.2,14.9 32.5,15.5 32.7,16.4 32,15.8 31.3,16.4 31.5,15.5 30.8,14.9 31.7,14.9"/><polygon points="28,3 28.3,3.9 29.2,3.9 28.5,4.5 28.7,5.4 28,4.8 27.3,5.4 27.5,4.5 26.8,3.9 27.7,3.9"/></g><polygon points="22,12 22.6,13.8 24.5,13.8 23,14.8 23.5,16.7 22,15.5 20.5,16.7 21,14.8 19.5,13.8 21.4,13.8" fill="#FFF"/></svg>`,
        ch: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#D52B1E"/><rect x="15" y="6" width="6" height="12" fill="#FFF"/><rect x="12" y="9" width="12" height="6" fill="#FFF"/></svg>`,
        se: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#006AA7"/><rect x="10.8" width="4.8" height="24" fill="#FECC00"/><rect y="9.6" width="36" height="4.8" fill="#FECC00"/></svg>`,
        fi: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#FFF"/><rect x="10.8" width="4.8" height="24" fill="#003580"/><rect y="9.6" width="36" height="4.8" fill="#003580"/></svg>`,
        kr: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#FFF"/><circle cx="18" cy="12" r="6" fill="#C60C30"/><path d="M18 6a6 6 0 010 12 3 3 0 000-6 3 3 0 010-6z" fill="#003478"/></svg>`,
        br: `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#009C3B"/><polygon points="18,3 33,12 18,21 3,12" fill="#FFDF00"/><circle cx="18" cy="12" r="5" fill="#002776"/><path d="M13 13.5 Q18 11 23 13.5" stroke="#FFF" stroke-width="0.8" fill="none"/></svg>`,
        ind: `<svg viewBox="0 0 36 24"><rect width="36" height="8" fill="#FF9933"/><rect y="8" width="36" height="8" fill="#FFF"/><rect y="16" width="36" height="8" fill="#138808"/><circle cx="18" cy="12" r="2.5" fill="none" stroke="#000080" stroke-width="0.5"/></svg>`,
        pl: `<svg viewBox="0 0 36 24"><rect width="36" height="12" fill="#FFF"/><rect y="12" width="36" height="12" fill="#DC143C"/></svg>`,
        es: `<svg viewBox="0 0 36 24"><rect width="36" height="6" fill="#AA151B"/><rect y="6" width="36" height="12" fill="#F1BF00"/><rect y="18" width="36" height="6" fill="#AA151B"/></svg>`,
    };
    function flagSVG(code) {
        return FLAGS[code] || `<svg viewBox="0 0 36 24"><rect width="36" height="24" fill="#2a2d3a" rx="2"/><text x="18" y="14" text-anchor="middle" font-size="8" fill="#666">?</text></svg>`;
    }
    const state = {
        connected: false,
        connecting: false,
        timerInterval: null,
        timerSeconds: 0,
        speedInterval: null,
        selectedServer: null,
    };
    const servers = [
        { id: 'de-frankfurt', code: 'de', name: 'Германия', city: 'Франкфурт', ping: 28, load: 32, fav: true },
        { id: 'de-berlin', code: 'de', name: 'Германия', city: 'Берлин', ping: 35, load: 45, fav: false },
        { id: 'nl-amsterdam', code: 'nl', name: 'Нидерланды', city: 'Амстердам', ping: 22, load: 18, fav: true },
        { id: 'us-newyork', code: 'us', name: 'США', city: 'Нью-Йорк', ping: 95, load: 55, fav: false },
        { id: 'us-losangeles', code: 'us', name: 'США', city: 'Лос-Анджелес', ping: 120, load: 42, fav: false },
        { id: 'us-miami', code: 'us', name: 'США', city: 'Майами', ping: 108, load: 38, fav: false },
        { id: 'gb-london', code: 'gb', name: 'Великобритания', city: 'Лондон', ping: 40, load: 60, fav: true },
        { id: 'fr-paris', code: 'fr', name: 'Франция', city: 'Париж', ping: 32, load: 28, fav: false },
        { id: 'jp-tokyo', code: 'jp', name: 'Япония', city: 'Токио', ping: 165, load: 72, fav: false },
        { id: 'sg-singapore', code: 'sg', name: 'Сингапур', city: 'Сингапур', ping: 180, load: 50, fav: false },
        { id: 'ca-toronto', code: 'ca', name: 'Канада', city: 'Торонто', ping: 88, load: 25, fav: false },
        { id: 'au-sydney', code: 'au', name: 'Австралия', city: 'Сидней', ping: 210, load: 35, fav: false },
        { id: 'ch-zurich', code: 'ch', name: 'Швейцария', city: 'Цюрих', ping: 30, load: 22, fav: true },
        { id: 'se-stockholm', code: 'se', name: 'Швеция', city: 'Стокгольм', ping: 45, load: 15, fav: false },
        { id: 'fi-helsinki', code: 'fi', name: 'Финляндия', city: 'Хельсинки', ping: 52, load: 12, fav: false },
        { id: 'kr-seoul', code: 'kr', name: 'Южная Корея', city: 'Сеул', ping: 155, load: 65, fav: false },
        { id: 'br-saopaulo', code: 'br', name: 'Бразилия', city: 'Сан-Паулу', ping: 195, load: 40, fav: false },
        { id: 'in-mumbai', code: 'ind', name: 'Индия', city: 'Мумбаи', ping: 145, load: 58, fav: false },
        { id: 'pl-warsaw', code: 'pl', name: 'Польша', city: 'Варшава', ping: 38, load: 20, fav: false },
        { id: 'es-madrid', code: 'es', name: 'Испания', city: 'Мадрид', ping: 42, load: 30, fav: false },
    ];
    state.selectedServer = servers[0];
    updateSelectedDisplay();
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewId = item.dataset.view;
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            views.forEach(v => {
                v.classList.remove('active');
                v.style.animation = 'none';
                void v.offsetHeight;
                v.style.animation = '';
            });
            document.getElementById(`view-${viewId}`)?.classList.add('active');
        });
    });
    document.getElementById('server-select-btn')?.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        document.querySelector('[data-view="servers"]')?.classList.add('active');
        views.forEach(v => v.classList.remove('active'));
        document.getElementById('view-servers')?.classList.add('active');
    });
    document.querySelectorAll('.period-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            opt.parentElement.querySelectorAll('.period-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });
    const connectBtn = document.getElementById('connect-btn');
    const connHint = document.getElementById('conn-hint');
    const connTimer = document.getElementById('conn-timer');
    const timerDisplay = connTimer?.querySelector('.timer-display');
    const ipValue = document.getElementById('ip-value');
    const ipLabel = document.getElementById('ip-label');
    const upSpeed = document.getElementById('upload-speed');
    const downSpeed = document.getElementById('download-speed');
    function fmtTime(s) {
        const h = String(Math.floor(s / 3600)).padStart(2, '0');
        const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
        const sec = String(s % 60).padStart(2, '0');
        return `${h}:${m}:${sec}`;
    }
    function randIP() {
        return `${10 + Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }
    function startTimer() {
        state.timerSeconds = 0;
        if (timerDisplay) timerDisplay.textContent = '00:00:00';
        state.timerInterval = setInterval(() => {
            state.timerSeconds++;
            if (timerDisplay) timerDisplay.textContent = fmtTime(state.timerSeconds);
        }, 1000);
    }
    function stopTimer() {
        clearInterval(state.timerInterval);
        state.timerSeconds = 0;
        if (timerDisplay) timerDisplay.textContent = '00:00:00';
    }
    function startSpeed() {
        if (upSpeed) upSpeed.textContent = (10 + Math.random() * 30).toFixed(1);
        if (downSpeed) downSpeed.textContent = (30 + Math.random() * 100).toFixed(1);
        state.speedInterval = setInterval(() => {
            if (!state.connected) return;
            animateValue(upSpeed, parseFloat(upSpeed.textContent), 10 + Math.random() * 40, 800);
            animateValue(downSpeed, parseFloat(downSpeed.textContent), 30 + Math.random() * 120, 800);
        }, 3000);
    }
    function stopSpeed() {
        clearInterval(state.speedInterval);
        animateValue(upSpeed, parseFloat(upSpeed?.textContent || '0'), 0, 400);
        animateValue(downSpeed, parseFloat(downSpeed?.textContent || '0'), 0, 400);
    }
    function animateValue(el, from, to, duration) {
        if (!el) return;
        const start = performance.now();
        function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (from + (to - from) * eased).toFixed(1);
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }
    function doConnect() {
        if (state.connecting) return;
        state.connecting = true;
        app.classList.remove('connected');
        app.classList.add('connecting');
        const statusLabel = document.querySelector('.status-label');
        if (statusLabel) statusLabel.textContent = 'Подключение...';
        if (connHint) connHint.textContent = `${state.selectedServer.name}, ${state.selectedServer.city}...`;
        setTimeout(() => {
            state.connecting = false;
            state.connected = true;
            app.classList.remove('connecting');
            app.classList.add('connected');
            if (statusLabel) statusLabel.textContent = 'Подключено';
            if (connHint) connHint.textContent = 'Нажмите для отключения';
            if (ipValue) ipValue.textContent = randIP();
            if (ipLabel) ipLabel.textContent = 'IP скрыт • Защищено';
            startTimer();
            startSpeed();
            renderServers();
        }, 1200 + Math.random() * 800);
    }
    function doDisconnect() {
        state.connecting = false;
        state.connected = false;
        app.classList.remove('connected', 'connecting');
        const statusLabel = document.querySelector('.status-label');
        if (statusLabel) statusLabel.textContent = 'Отключено';
        if (connHint) connHint.textContent = 'Нажмите для подключения';
        if (ipValue) ipValue.textContent = '192.168.1.***';
        if (ipLabel) ipLabel.textContent = 'Ваш IP виден';
        stopTimer();
        stopSpeed();
        renderServers();
    }
    connectBtn?.addEventListener('click', () => {
        if (state.connected) doDisconnect();
        else if (!state.connecting) doConnect();
    });
    function updateSelectedDisplay() {
        const s = state.selectedServer;
        if (!s) return;
        const flagEl = document.getElementById('selected-flag');
        const nameEl = document.getElementById('selected-name');
        const pingEl = document.getElementById('selected-ping');
        if (flagEl) flagEl.innerHTML = flagSVG(s.code);
        if (nameEl) nameEl.textContent = `${s.name}, ${s.city}`;
        if (pingEl) pingEl.textContent = `${s.ping} мс`;
    }
    const serverListEl = document.getElementById('server-list');
    const serverSearch = document.getElementById('server-search');
    let currentFilter = 'all';
    function loadClass(l) {
        if (l < 40) return 'low';
        if (l < 70) return 'med';
        return 'high';
    }
    function renderServers(search = '') {
        if (!serverListEl) return;
        let list = [...servers];
        if (currentFilter === 'favorites') list = list.filter(s => s.fav);
        else if (currentFilter === 'fastest') list = list.sort((a, b) => a.ping - b.ping).slice(0, 10);
        else if (currentFilter === 'recent') list = list.slice(0, 5);
        if (search) {
            const q = search.toLowerCase();
            list = list.filter(s => s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q));
        }
        serverListEl.innerHTML = list.map(s => `
            <div class="server-row ${s.id === state.selectedServer?.id ? 'active' : ''}" data-sid="${s.id}">
                <div class="srv-flag">${flagSVG(s.code)}</div>
                <div class="srv-info">
                    <span class="srv-name">${s.name}</span>
                    <span class="srv-city">${s.city}</span>
                </div>
                <div class="srv-meta">
                    <div class="srv-load">
                        <div class="load-track"><div class="load-bar ${loadClass(s.load)}" style="width:${s.load}%"></div></div>
                        <span class="srv-load-pct">${s.load}%</span>
                    </div>
                    <span class="srv-ping">${s.ping} мс</span>
                    <button class="srv-fav ${s.fav ? 'on' : ''}" data-fid="${s.id}">
                        <svg viewBox="0 0 16 16" fill="${s.fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.2"><path d="M8 1.5l2 4 4.5.7-3.2 3.2.7 4.6L8 12l-4 2 .7-4.6L1.5 6.2l4.5-.7 2-4z"/></svg>
                    </button>
                    <button class="srv-connect" data-cid="${s.id}">
                        ${state.connected && s.id === state.selectedServer?.id ? 'Подключено' : 'Подключить'}
                    </button>
                </div>
            </div>
        `).join('');
        serverListEl.querySelectorAll('.server-row').forEach(row => {
            row.addEventListener('click', e => {
                if (e.target.closest('.srv-fav') || e.target.closest('.srv-connect')) return;
                selectServer(row.dataset.sid);
            });
        });
        serverListEl.querySelectorAll('.srv-fav').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const s = servers.find(x => x.id === btn.dataset.fid);
                if (s) { s.fav = !s.fav; renderServers(serverSearch?.value || ''); }
            });
        });
        serverListEl.querySelectorAll('.srv-connect').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const sid = btn.dataset.cid;
                selectServer(sid);
                if (!state.connected) doConnect();
                else if (sid !== state.selectedServer?.id) {
                    doDisconnect();
                    setTimeout(doConnect, 300);
                }
            });
        });
    }
    function selectServer(sid) {
        const s = servers.find(x => x.id === sid);
        if (!s) return;
        state.selectedServer = s;
        updateSelectedDisplay();
        renderServers(serverSearch?.value || '');
    }
    serverSearch?.addEventListener('input', () => renderServers(serverSearch.value));
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderServers(serverSearch?.value || '');
        });
    });
    renderServers();
    document.querySelectorAll('.bar').forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.boxShadow = '0 0 20px rgba(124, 107, 240, 0.2)';
        });
        bar.addEventListener('mouseleave', () => {
            bar.style.boxShadow = 'none';
        });
    });
});
