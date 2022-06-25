<script>
	import HomeNavbar from "../components/HomeNavbar.svelte";
	import FrequentVisits from "../components/FrequentVisits.svelte";
</script>

<HomeNavbar/>

<div class="flex justify-center items-center h-full">
    <div class="w-1/2">
        <div class="mb-12 relative">
            <input
                    id="search"
                    class="w-full px-3 py-2 rounded-xl drop-shadow-lg"
                    placeholder="Search anything"
            />
            <label
                    for="search"
                    class="absolute right-3 top-0 h-full flex items-center"
            >
                <i class="ph-magnifying-glass"></i>
            </label>
        </div>
        <FrequentVisits/>
    </div>
</div>