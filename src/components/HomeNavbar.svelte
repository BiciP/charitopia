<script>
	const THEME_ATTRIBUTE = "data-theme"
	const THEMES = [ "default", "light", "dark" ]

	const toggleTheme = () => {
		let html = document.getElementsByTagName("html")[ 0 ]
		let currentTheme = html.getAttribute(THEME_ATTRIBUTE)
		let themeIndex = THEMES.findIndex(theme => theme === currentTheme)
		let newTheme
		if (themeIndex < 0) {
			newTheme = THEMES[ 0 ]
		} else {
			newTheme = THEMES[ (themeIndex + 1) % THEMES.length ]
		}
		html.setAttribute(THEME_ATTRIBUTE, newTheme)
	}
</script>

<div class="flex justify-end p-4 fixed w-full">
    <div>
        <button on:click={toggleTheme} class="text-primary">
            <i class="ph-palette ph-xl"></i>
        </button>
    </div>
</div>
