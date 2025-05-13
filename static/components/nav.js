function createNav() {
	const nav = document.createElement("nav");
	nav.id = "nav-bar";
	nav.innerHTML = `
        <div class="nav-pill">
            <a href="/" class="nav-item">
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M3 12L12 3l9 9" />
                    <path d="M9 21V9h6v12" />
                </svg>
                <span>Home</span>
            </a>
            <a href="/experience" class="nav-item">
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.5 14.5 7 21l5-3 5 3-1.5-6.5" />
                </svg>
                <span>Experience</span>
            </a>
            <a href="/projects" class="nav-item">
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                    />
                </svg>
                <span>Projects</span>
            </a>
            <button
                id="night-mode-toggle"
                aria-label="Toggle night mode"
                class="nav-item nav-toggle"
                style="
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0 8px;
                "
            >
                <span id="night-mode-icon">🌙</span>
            </button>
        </div>
    `;
	return nav;
}

// Initialize night mode functionality
function initNightMode() {
	const html = document.documentElement;
	const toggle = document.getElementById("night-mode-toggle");
	function setNightMode(on) {
		if (on) {
			html.classList.add("night-mode");
			toggle.textContent = "☀️";
		} else {
			html.classList.remove("night-mode");
			toggle.textContent = "🌙";
		}
		localStorage.setItem("nightMode", on ? "1" : "0");
	}
	// Load preference
	const nightPref = localStorage.getItem("nightMode") === "1";
	setNightMode(nightPref);
	toggle.onclick = () => setNightMode(!html.classList.contains("night-mode"));
}

// Export both functions
export { createNav, initNightMode };
