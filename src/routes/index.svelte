<script>
	import HomeNavbar from "../components/HomeNavbar.svelte";
	import FrequentVisits from "../components/FrequentVisits.svelte";
		import SearchField from "../components/SearchField.svelte";
</script>

<HomeNavbar/>

<div class="flex justify-center items-center h-full">
    <div class="w-1/2">
        <SearchField />
        <FrequentVisits/>
    </div>
</div>