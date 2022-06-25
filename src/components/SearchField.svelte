<script>
	let SEARCH_HISTORY = "ch_search_history"
	let searchQuery = ""

	const handleKeyUp = event => {
		if (event.keyCode === 13) {
			search()
		}
	}

	const search = () => {
		let start = Date.now()
		addSearchRecord(searchQuery)
		console.log(Date.now() - start, "ms")
		location.href = `https://google.com/search?q=${ searchQuery }`
	}

	const addSearchRecord = q => {
		let history = localStorage.getItem(SEARCH_HISTORY)

		try {
			history = JSON.parse(atob(history))
		} catch (e) {
			history = []
		}

		let dataIndex = history.findIndex(data => data.q === q)
		let qData
		if (dataIndex < 0) {
			qData = {
				q,
				t: 0
			}
		} else {
			qData = history[ dataIndex ]
		}

		qData.t += 1
		qData.l = Date.now()

		if (dataIndex < 0) {
			history.push(qData)
		} else {
			history[ dataIndex ] = qData
		}

		history = JSON.stringify(history)
		history = btoa(history)
		localStorage.setItem(SEARCH_HISTORY, history)
	}
</script>

<div class="mb-12 relative">
    <input
            id="search"
            class="w-full px-3 py-2 rounded-xl drop-shadow-lg"
            placeholder="Search anything"
            on:keyup={handleKeyUp}
            bind:value={searchQuery}
    />
    <label
            for="search"
            class="absolute right-3 top-0 h-full flex items-center"
    >
        <i class="ph-magnifying-glass"></i>
    </label>
</div>