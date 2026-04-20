function createNav() {
	const nav = document.createElement("nav");
	nav.id = "nav-bar";
	nav.setAttribute("aria-label", "Primary");
	nav.innerHTML = `
		<div class="site-nav">
			<a href="/" class="site-title">AMK</a>
			<div class="nav-links">
				<a href="/#about" class="nav-item">About</a>
				<a href="/#experience" class="nav-item">Experience</a>
				<a href="/#readings" class="nav-item">Readings</a>
				<a href="/#movies" class="nav-item">Movies</a>
				<button
					id="night-mode-toggle"
					type="button"
					aria-label="Toggle color theme"
					aria-pressed="false"
					class="nav-item theme-toggle"
				>
					<span id="night-mode-icon" aria-hidden="true"></span>
				</button>
			</div>
		</div>
	`;
	return nav;
}

// Initialize night mode functionality
function initNightMode() {
	const html = document.documentElement;
	const toggle = document.getElementById("night-mode-toggle");
	const icon = document.getElementById("night-mode-icon");
	const loadingContainer = document.getElementById("loading-container");
	const moonIcon = `
		<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M21 14.25A8.25 8.25 0 1 1 9.75 3a6.75 6.75 0 1 0 11.25 11.25Z" />
		</svg>
	`;
	const sunIcon = `
		<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-15.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 16.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.47 5.53a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.47 6.59a.75.75 0 0 1 0-1.06Zm12.88 12.88a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM18.75 12a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM2.25 12a.75.75 0 0 1 .75-.75H4.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm3.28 7.47a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0Zm12.88-12.88a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0Z" />
		</svg>
	`;

	function setNightMode(on) {
		html.classList.toggle("night-mode", on);
		if (icon) {
			icon.innerHTML = on ? sunIcon : moonIcon;
		}
		if (toggle) {
			toggle.setAttribute("aria-pressed", on ? "true" : "false");
		}
		if (loadingContainer) {
			loadingContainer.classList.toggle("night-mode", on);
		}
		localStorage.setItem("nightMode", on ? "1" : "0");
	}

	// Load preference
	const nightPref = localStorage.getItem("nightMode") === "1";
	setNightMode(nightPref);
	if (toggle) {
		toggle.onclick = () => setNightMode(!html.classList.contains("night-mode"));
	}
}

// Export both functions
export { createNav, initNightMode };
