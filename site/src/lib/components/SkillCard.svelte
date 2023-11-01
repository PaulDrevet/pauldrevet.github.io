<script>
    export let percent;
    export let name;
</script>
<div class="mb-2">
    <p class="text-gray text-xl ml-1">{name}</p>
    <div class="mb-2 h-4 rounded-full text-gray w-11/12 flex flex-row">
        <div class="pr-10 h-2 rounded-full" style="width: {percent-2}%"></div>
        <p class="tracking-wider">{percent}%</p>
    </div>
    <div class="mb-5 h-4 overflow-hidden rounded-full bg-black w-11/12 flex items-center">
        <div class="ml-1 h-2 rounded-full bg-gradient-to-r from-[#ef297e] to-[#c91903]" style="width: {percent}%"></div>
    </div>
</div>