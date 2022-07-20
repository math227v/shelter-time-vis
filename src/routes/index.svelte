<script>
    // @ts-ignore
    import TimeSlot from "$lib/TimeSlot.svelte";
</script>

<div class="bg-blue-500 w-full min-h-screen flex">
    <div class="mx-auto my-auto max-w-6xl md:w-2/3 w-full p-8">
        <div class="w-full">
            <h1 class="font-black text-2xl text-white">Shelter time vis !</h1>
            <TimeSlot startTime="2022-07-18T22:00:00" endTime="2023-07-20T07:00:00" />
        </div>
    </div>
</div>