/* ==========================================================================
   WONG CONSOLE CYBERNETIC INTERACTION SHEET (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Drawer Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileDrawer.classList.toggle('active');
        });
    }

    // Close mobile drawer on link clicks
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuToggle && mobileDrawer) {
                mobileMenuToggle.classList.remove('active');
                mobileDrawer.classList.remove('active');
            }
        });
    });

    // 2. Sticky Glassmorphic Header Transitions
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.style.padding = '12px 0';
                mainHeader.style.background = 'rgba(5, 5, 7, 0.85)';
            } else {
                mainHeader.style.padding = '18px 0';
                mainHeader.style.background = 'rgba(7, 7, 9, 0.7)';
            }
        });
    }

    // 3. Fluctuating Active System Metrics
    const metricValLatency = document.getElementById('metricValLatency');
    if (metricValLatency) {
        setInterval(() => {
            const rawLatency = (Math.random() * (0.78 - 0.58) + 0.58).toFixed(2);
            metricValLatency.textContent = `${rawLatency}ms`;
        }, 3000);
    }

    // 4. Interactive Terminal Simulator
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalBody = document.getElementById('terminalBody');

    // System details mock database
    const systemSpecs = {
        coreVersion: "v4.0.2.0",
        sqliteSize: "75.7 KB",
        compiler: "Polymorphic C# 8.0 / .NET Framework CLR",
        architect: "Nabin Wong",
        ledgerStatus: "SECURE [100% Operational]"
    };

    const terminalCommands = {
        help: "Display list of available system instructions.<br>Usage: help",
        status: "Check real-time emulated core engine variables.<br>Usage: status",
        bypass: "Inject emulated manifest sectors for a specific Steam AppID.<br>Usage: bypass &lt;AppID&gt; (e.g. bypass 1240440)",
        about: "Dump WONG Console architecture specifications.<br>Usage: about",
        developer: "View Lead Systems Architect credentials.<br>Usage: developer",
        clear: "Flush current terminal output buffer.<br>Usage: clear"
    };

    if (terminalInput && terminalOutput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const rawVal = terminalInput.value.trim();
                terminalInput.value = '';

                if (rawVal === '') return;

                // Log the input
                appendLine(`wong@cyber-kernel-node:~$ ${rawVal}`, 'terminal-prompt');

                // Process command
                processCommand(rawVal);
            }
        });
    }

    function appendLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.innerHTML = text;
        terminalOutput.appendChild(line);
        // Scroll terminal to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function processCommand(rawInput) {
        const parts = rawInput.split(' ');
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(' ');

        switch (cmd) {
            case 'help':
                let helpText = "<br>Available Cybernetic Commands:<br>-------------------------------------------<br>";
                for (const [key, desc] of Object.entries(terminalCommands)) {
                    helpText += `<span class="text-crimson font-bold">${key.padEnd(10)}</span> — ${desc}<br>`;
                }
                helpText += "-------------------------------------------<br>";
                appendLine(helpText);
                break;

            case 'status':
                appendLine("<br>[CORE DIAGNOSTICS STATS]");
                appendLine(`- Core Version:         ${systemSpecs.coreVersion}`);
                appendLine(`- Database Ledger:      ${systemSpecs.ledgerStatus}`);
                appendLine(`- SQLite Memory Cache:  ${systemSpecs.sqliteSize}`);
                appendLine(`- Ingest Pipelines:     Active (Neural Ingestion Stream)`);
                appendLine(`- Latency Profile:      O(1) Memory Array Suspension<br>`);
                break;

            case 'about':
                appendLine("<br>[WONG ARCHITECTURAL BLUEPRINT]");
                appendLine("WONG Console acts as a custom client-transparent game bypass orchestrator.");
                appendLine("It emulates cryptographic-valid Steam manifests (.lua & .acf configs) and drops them");
                appendLine("locally into the host Steam system. Under the hood, it intercepts client threads");
                appendLine("via deep Win32 API hooks to force immediate database syncing. Fully integrated");
                appendLine("with SQLite ledgers, Steamless DRM decoupling, and SAM achievement managers.<br>");
                break;

            case 'developer':
                appendLine("<br>[CYBERNETIC ARCHITECT PROFILE]");
                appendLine(`- Lead Architect:  ${systemSpecs.architect}`);
                appendLine("- Academic matrix: B.Tech in Artificial Intelligence & Advanced Data Science (Semester 2)");
                appendLine("- Thesis Spec:     Polymorphic Desktop Graphic Compositing & O(1) Memory Array Hooking");
                appendLine("- Portfolio focus: low-level system scheduling, memory containerization, graphics engines.<br>");
                break;

            case 'clear':
                terminalOutput.innerHTML = '';
                break;

            case 'bypass':
                if (!arg) {
                    appendLine("<span class='text-crimson'>[ERROR] AppID target parameter missing. Usage: bypass &lt;AppID&gt;</span>");
                } else if (isNaN(arg)) {
                    appendLine(`<span class='text-crimson'>[ERROR] "${arg}" is not a valid numerical AppID.</span>`);
                } else {
                    simulateBypass(arg);
                }
                break;

            default:
                appendLine(`<span class='text-crimson'>[ERROR] Command "${cmd}" not recognized. Type <span class="font-bold">help</span> for systems inventory.</span>`);
        }
    }

    function simulateBypass(appId) {
        appendLine(`<br>[SYS] Locating Steam installation parameters in Registry key HKCU\\SOFTWARE\\Valve\\Steam...`);
        
        setTimeout(() => {
            appendLine(`[SYS] Registry key verified! Path mapping -> C:\\Program Files (x86)\\Steam`);
            appendLine(`[SYS] Compiling sub-sector emulated manifest vectors for AppID ${appId}...`);
        }, 400);

        setTimeout(() => {
            appendLine(`[SYS] Bypassing target DRM structures... Dropped stplug-in/${appId}.lua config.`);
            appendLine(`[SYS] Dropped librarycache/${appId}/library_600x900.jpg sector mapping successfully.`);
        }, 900);

        setTimeout(() => {
            appendLine(`[DB] Hydrating SQLite b-tree index ledger for AppID ${appId}...`);
            appendLine(`[DB] Caching metrics completed. AppName: emulated_package_${appId}`);
        }, 1400);

        setTimeout(() => {
            appendLine(`[SYS] Halting steam.exe client main-thread suspension blocks...`);
            appendLine(`[SYS] Thread injection complete. Restarting Steam client environment silently...`);
            appendLine(`<span class='text-green font-bold'>[OK] Emulated licensing verified! AppID ${appId} is unlocked and ready to execute.</span><br>`);
        }, 2000);
    }



    // 6. Luxury Card Mouse Move Hover 3D Tilt & Glow Effects
    const tiltCards = document.querySelectorAll('.bento-card, .story-info-card, .app-ui-mockup, .getapp-card, .tester-hero-card, .reasons-card, .faq-card, .specialty-card');
    tiltCards.forEach(card => {
        let rect = null;

        card.addEventListener('mouseenter', () => {
            // Cache the bounding rectangle when the card is in its neutral, untilted state.
            // This prevents layout thrashing during mousemove and completely eliminates 
            // 3D transformation jitter feedback loops on wide/long elements.
            rect = card.getBoundingClientRect();
        });

        card.addEventListener('mousemove', (e) => {
            if (!rect) {
                rect = card.getBoundingClientRect();
            }

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update custom variables on card to track mouse coords for CSS glows
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // 3D Tilt calculation (max 8 degrees, scaled down for wide cards to avoid visual stretching)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Adjust tilt strength based on width to keep it perfectly proportional
            const maxTilt = rect.width > 500 ? 4 : 8; 
            
            const rotateX = ((centerY - y) / centerY) * maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            card.style.transition = 'transform 0.1s ease-out, border-color 0.4s ease, box-shadow 0.4s ease';
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
        });

        card.addEventListener('mouseleave', () => {
            rect = null;
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease';
            card.style.transform = '';
            card.style.setProperty('--mouse-x', `0px`);
            card.style.setProperty('--mouse-y', `0px`);
        });
    });

    // Ambient floating particles builder
    const particlesContainer = document.getElementById('particlesContainer');
    if (particlesContainer) {
        const particleCount = 25;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.className = 'cyber-particle';
            
            p.style.left = `${Math.random() * 100}vw`;
            p.style.top = `${Math.random() * 100}vh`;
            p.style.width = `${Math.random() * 3 + 1}px`;
            p.style.height = p.style.width;
            p.style.opacity = Math.random() * 0.4 + 0.1;
            
            p.style.animation = `floatParticle ${Math.random() * 12 + 8}s linear infinite`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(p);
        }
    }

    // 7. Dynamic Scroll Progress Bar Indicator
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    if (scrollProgressBar) {
        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                const scrollPct = (window.scrollY / docHeight) * 100;
                scrollProgressBar.style.width = `${scrollPct}%`;
            }
        });
    }

    // 8. Viewport Intersection Observer Scroll Reveals
    const revealItems = document.querySelectorAll('.reveal-item');
    if (revealItems.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.12
        });

        revealItems.forEach(item => {
            // We ignore hero section items in the observer because they are triggered directly on preloader fade-out
            if (!item.closest('#about')) {
                revealObserver.observe(item);
            }
        });
    }

    // 9. Interactive Magnetic Call-to-Actions (CTAs)
    document.addEventListener('mousemove', (e) => {
        if (!window.matchMedia('(pointer: fine)').matches) return;

        const magneticCTAs = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tester, .tester-back-link, .btn-action-primary, .btn-action-outline');
        magneticCTAs.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            
            const distX = e.clientX - btnX;
            const distY = e.clientY - btnY;
            const dist = Math.hypot(distX, distY);
            
            // Interaction trigger boundary (75px)
            if (dist < 75) {
                const pullX = (distX / 75) * 12;
                const pullY = (distY / 75) * 12;
                
                btn.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale3d(1.03, 1.03, 1.03)`;
                btn.style.transition = 'transform 0.1s ease-out';
            } else {
                btn.style.transform = '';
                btn.style.transition = 'transform 0.4s ease-out, border-color 0.3s ease, background-color 0.3s ease';
            }
        });
    });

    // 10. Premium Custom Dual-Ring Cursor System
    const cursorHalo = document.getElementById('cursorHalo');
    const cursorRing = document.getElementById('cursorRing');
    const cursorDot = document.getElementById('cursorDot');
    
    let mX = 0, mY = 0; // Mouse coords
    let hX = 0, hY = 0; // Halo trailing coords (slow LERP)
    let rX = 0, rY = 0; // Ring trailing coords (faster LERP)

    if (window.matchMedia('(pointer: fine)').matches) {
        if (cursorHalo) cursorHalo.style.display = 'block';
        if (cursorRing) cursorRing.style.display = 'block';
        if (cursorDot) cursorDot.style.display = 'block';

        document.addEventListener('mousemove', (e) => {
            mX = e.clientX;
            mY = e.clientY;
            
            // Fast 1-to-1 dot binding for absolute control latency
            if (cursorDot) {
                cursorDot.style.left = `${mX}px`;
                cursorDot.style.top = `${mY}px`;
            }
        });

        const updatePointerPhysics = () => {
            // 1. Large background ambient halo LERP
            const haloLerp = 0.05;
            hX += (mX - hX) * haloLerp;
            hY += (mY - hY) * haloLerp;
            if (cursorHalo) {
                cursorHalo.style.left = `${hX}px`;
                cursorHalo.style.top = `${hY}px`;
            }

            // 2. Sleek trailing outer ring LERP (snappy & fluid)
            const ringLerp = 0.15;
            rX += (mX - rX) * ringLerp;
            rY += (mY - rY) * ringLerp;
            if (cursorRing) {
                cursorRing.style.left = `${rX}px`;
                cursorRing.style.top = `${rY}px`;
            }

            requestAnimationFrame(updatePointerPhysics);
        };
        updatePointerPhysics();

        // 3. Dynamic color-coded element hovers
        const hoverables = 'a, button, input, select, textarea, .bento-card, .story-info-card, .reasons-card, .faq-card, .specialty-card, .sidebar-item, .mockup-steam-btn';
        
        const getHoverTheme = (el) => {
            // Cyan-themed elements
            if (el.classList.contains('btn-secondary') || 
                el.classList.contains('btn-action-outline') || 
                el.classList.contains('tester-back-link') || 
                el.id === 'pillarPlay' ||
                el.classList.contains('nav-link') ||
                el.classList.contains('mobile-nav-link') ||
                el.classList.contains('pill-green')) {
                return 'interactive-cyan';
            }
            // Gold-themed elements
            if (el.id === 'pillarBypass' || el.classList.contains('pill-gold')) {
                return 'interactive-gold';
            }
            // Standard: Crimson red
            return 'interactive';
        };

        document.querySelectorAll(hoverables).forEach(el => {
            el.addEventListener('mouseenter', () => {
                const themeClass = getHoverTheme(el);
                if (cursorRing) cursorRing.classList.add(themeClass);
                if (cursorDot) cursorDot.classList.add('interactive');
                if (cursorHalo) cursorHalo.classList.add('interactive');
            });
            
            el.addEventListener('mouseleave', () => {
                if (cursorRing) cursorRing.classList.remove('interactive', 'interactive-cyan', 'interactive-gold');
                if (cursorDot) cursorDot.classList.remove('interactive');
                if (cursorHalo) cursorHalo.classList.remove('interactive');
            });
        });
    }

    // 11. Cyber Preloader Boot Sequence Orchestration
    const cyberPreloader = document.getElementById('cyberPreloader');
    const preloaderLogs = document.getElementById('preloaderLogs');
    const preloaderStatus = document.getElementById('preloaderStatus');
    const preloaderPercentage = document.getElementById('preloaderPercentage');
    const preloaderBarFill = document.getElementById('preloaderBarFill');

    if (cyberPreloader) {
        // Lock scrolling during preloader to prevent accidental offset
        document.body.style.overflow = 'hidden';

        const logs = [
            "[SYS] INITIALIZING WONG REVERSE-ENGINEERED MATRIX NODE...",
            "[SYS] HOOKING STEAM PATHWAYS: HKCU\\SOFTWARE\\VALVE\\STEAM...",
            "[SYS] REGISTRY POINTER MATCHED SUCCESSFULLY -> C:\\PROGRAM FILES (X86)\\STEAM",
            "[DB] HYDRATING LOCAL SQLite DATA BUFFERS...",
            "[DB] rel_buffer_catalog PREPARED SECURE [O(log N) SEARCH VECTOR READY]",
            "[DRM] DECOUPLING INTEGRATED EXECUTABLES SHELLS...",
            "[DRM] STRIPPING SECTORS USING STEAMLESS DLL MATRIX...",
            "[CORE] INJECTING CUSTOM ACFFootprints IN MEMORY B-TREES...",
            "[CORE] LUA ENGINES COMPILING DIRECT DISK SEEDERS...",
            "[CORE] INTERCEPTING Win32 CLIENT BOOT MAIN-THREADS...",
            "[OK] AUTONOMOUS STEAM BYPASS INJECTED SUCCESSFULLY!",
            "[SYS] COMPRESSION SETUP EVADED. aut_sync COMPLETED.",
            "[SYS] WONG CONSOLE KERNEL CORE ONLINE & OPERATIONAL."
        ];

        let logIndex = 0;
        let percentage = 0;
        
        const highlightLog = (logText) => {
            return logText
                .replace(/^(\[SYS\])/, '<span class="log-tag-sys">$1</span>')
                .replace(/^(\[DB\])/, '<span class="log-tag-db">$1</span>')
                .replace(/^(\[DRM\])/, '<span class="log-tag-drm">$1</span>')
                .replace(/^(\[CORE\])/, '<span class="log-tag-core">$1</span>')
                .replace(/^(\[OK\])/, '<span class="log-tag-ok">$1</span>');
        };

        const feedLog = () => {
            if (logIndex < logs.length && preloaderLogs) {
                const line = document.createElement('div');
                line.className = 'preloader-log-line';
                line.innerHTML = highlightLog(logs[logIndex]);
                preloaderLogs.appendChild(line);
                preloaderLogs.scrollTop = preloaderLogs.scrollHeight;
                
                if (logIndex === 3) preloaderStatus.textContent = "SYNCHRONIZING RELATIONAL BUFFERS...";
                if (logIndex === 7) preloaderStatus.textContent = "INJECTING ACF SYNTHESIZER FOOTPRINTS...";
                if (logIndex === 9) preloaderStatus.textContent = "HALTING Win32 CLIENT MAIN-THREADS...";
                if (logIndex === 11) preloaderStatus.textContent = "VERIFYING EMULATED SCHEMAS...";

                logIndex++;
                setTimeout(feedLog, Math.random() * 110 + 40);
            }
        };
        setTimeout(feedLog, 150);

        const counterInterval = setInterval(() => {
            percentage += Math.floor(Math.random() * 3) + 1;
            if (percentage >= 100) {
                percentage = 100;
                clearInterval(counterInterval);
                
                setTimeout(() => {
                    cyberPreloader.classList.add('fade-out');
                    window.scrollTo(0, 0); // Force page to absolute top after preloader
                    document.body.style.overflow = ''; // Re-enable scrolling
                    // Reveal first-fold hero items with slide up once preloader dissolves
                    setTimeout(() => {
                        document.querySelectorAll('#about .reveal-item').forEach(el => {
                            el.classList.add('revealed');
                        });
                        startGameCounter();
                    }, 200);
                }, 400);
            }
            if (preloaderPercentage) preloaderPercentage.textContent = `${percentage.toString().padStart(2, '0')}%`;
        }, 30);

        function startGameCounter() {
            const gameCounter = document.getElementById('metricGameCounter');
            if (!gameCounter) return;
            
            const target = 3100000; // 3.1 Million
            const duration = 2000; // 2 seconds
            const startTime = performance.now();
            
            const formatNumber = (num) => {
                if (num >= 1000000) {
                    return (num / 1000000).toFixed(1) + 'M';
                } else if (num >= 1000) {
                    return (num / 1000).toFixed(0) + 'K';
                }
                return num.toString();
            };
            
            const updateCounter = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < duration) {
                    const progress = elapsedTime / duration;
                    // Ease out cubic
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentNumber = Math.floor(easeProgress * target);
                    gameCounter.textContent = formatNumber(currentNumber);
                    requestAnimationFrame(updateCounter);
                } else {
                    gameCounter.textContent = '3.1M';
                }
            };
            
            requestAnimationFrame(updateCounter);
        }
    }

    // 12. Free up CSS animations on elements that tilt to avoid clashing with transforms
    const testerHeroCard = document.getElementById('testerHeroCard');
    if (testerHeroCard) {
        // Once the CSS intro animation completes, clear it so custom JS transforms work flawlessly
        testerHeroCard.addEventListener('animationend', () => {
            testerHeroCard.style.animation = 'none';
        });
    }

    // 13. Dynamic Email Routing & Automatic Clipboard Pipeline
    const emailButtons = document.querySelectorAll('#getappEmail, #testerEmailLink');
    emailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Intercept standard mailto link
            
            const emailAddress = "technicallyprsent@gmail.com";
            
            // 1. Attempt to auto-copy email address to clipboard
            navigator.clipboard.writeText(emailAddress).then(() => {
                console.log("[SYS] Email copied to clipboard: " + emailAddress);
            }).catch(err => {
                console.warn("[SYS] Clipboard write failed, falling back.", err);
            });
            
            // 2. Open Gmail Compose window in a new tab with prefilled fields
            const subject = encodeURIComponent("WONG Console - Tester Application / Inquiry");
            const body = encodeURIComponent("Hi WONG Console Team,\n\nI am interested in testing the WONG Console demo. Here is my system profile and why I'd love to test the application:\n\n[Your Message Here]\n\nBest regards,\n[Your Name]");
            const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
            
            window.open(gmailComposeUrl, '_blank');
            
            // 3. Spawn a premium cybernetic Toast notification
            spawnEmailToast(emailAddress);
        });
    });

    function spawnEmailToast(email) {
        // Remove existing toast if present
        const oldToast = document.getElementById('cyberEmailToast');
        if (oldToast) oldToast.remove();
        
        const toast = document.createElement('div');
        toast.id = 'cyberEmailToast';
        toast.className = 'cyber-email-toast';
        
        toast.innerHTML = `
            <div class="toast-glow-layer"></div>
            <div class="toast-header">
                <span class="toast-header-tag">SYSTEM CORE</span>
                <span class="toast-close-btn" id="toastCloseBtn">&times;</span>
            </div>
            <div class="toast-title">EMAIL PIPELINE ENGAGED</div>
            <div class="toast-console-log">
                <div class="toast-log-row"><span class="log-cyan">[SYS]</span> INITIALIZING MAIL ENGINE...</div>
                <div class="toast-log-row"><span class="log-green">[OK]</span> COPIED: ${email}</div>
                <div class="toast-log-row"><span class="log-cyan">[SYS]</span> LAUNCHING BROWSER GMAIL COMPOSE...</div>
            </div>
            <div class="toast-divider"></div>
            <div class="toast-actions">
                <span class="toast-action-label">Not using Gmail?</span>
                <a href="mailto:${email}" class="toast-fallback-link" id="toastMailtoFallback">
                    Launch Default Client
                </a>
            </div>
            <div class="toast-progress-bar"><div class="toast-progress-fill"></div></div>
        `;
        
        document.body.appendChild(toast);
        
        // Trigger reflow for transition
        setTimeout(() => toast.classList.add('active'), 10);
        
        // Handle close button
        const closeBtn = toast.querySelector('#toastCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => dismissToast(toast));
        }
        
        // Auto-dismiss after 6.5 seconds
        const dismissTimeout = setTimeout(() => {
            dismissToast(toast);
        }, 6500);
        
        // If they click the fallback, dismiss the toast immediately
        const fallbackLink = toast.querySelector('#toastMailtoFallback');
        if (fallbackLink) {
            fallbackLink.addEventListener('click', () => {
                clearTimeout(dismissTimeout);
                dismissToast(toast);
            });
        }
    }
    
    function dismissToast(toastElement) {
        toastElement.classList.remove('active');
        toastElement.classList.add('fade-out');
        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.remove();
            }
        }, 600);
    }
});

// CSS Animations helper injected dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes floatParticle {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
}

.cyber-particle {
    position: absolute;
    background-color: var(--color-primary);
    border-radius: 50%;
    pointer-events: none;
}

/* Glass card hover glow border tracker */
.bento-card, .story-info-card, .getapp-card, .tester-hero-card, .reasons-card, .faq-card, .specialty-card {
    position: relative;
}

.bento-card::before, .story-info-card::before, .getapp-card::before, .tester-hero-card::before, .reasons-card::before, .faq-card::before, .specialty-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(218, 0, 0, 0.08), transparent 40%);
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.bento-card:hover::before, .story-info-card:hover::before, .getapp-card:hover::before, .tester-hero-card:hover::before, .reasons-card:hover::before, .faq-card:hover::before, .specialty-card:hover::before {
    opacity: 1;
}
`;
document.head.appendChild(styleSheet);
