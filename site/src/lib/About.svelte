<script>
    import Typewriter from 'svelte-typewriter'
    import LinkCard from "./components/LinkCard.svelte";
</script>
<div class="pt-28 pb-16 ml-24">
    <div class="font-mono">
        <p class="text-6xl font-bold">
            <span class="text-white">Hi,I'm</span>
            <span class="text-red">Paul Drevet</span>
        </p>
        <div class="flex flex-row">
            <p class="text-5xl font-bold text-white mt-5 pr-4">a</p>
            <Typewriter mode="loop" interval="80" --cursor-color="#ff004e">
                <p class="text-5xl font-bold text-white mt-4">Developer.</p>
                <p class="text-5xl font-bold text-white mt-4">Passionate Skier.</p>
                <p class="text-5xl font-bold text-white mt-4">Professional Coder.</p>
                <p class="text-5xl font-bold text-white mt-4">Developer.</p>
                <p class="text-5xl font-bold text-white mt-4">Video Games Lover.</p>
                <p class="text-5xl font-bold text-white mt-4">Manga Fan.</p>
            </Typewriter>
        </div>
    </div>
    <div class="text-gray mt-10 space-y-2 text-xl">
        <p>I'm a web developer based in France. I have a passion for web development and </p>
        <p>love to create for web and mobile devices. I'm currently in my first year of a master's degree</p>
        <p>in computer science.</p>
    </div>

    <div class="mt-40">
        <p class="text-gray tracking-wider text-sm">FIND ME HERE</p>
        <div class="flex flex-row space-x-6">
            <LinkCard logo = {"../../public/linkedin_logo.png"}></LinkCard>
            <LinkCard logo = {"../../public/git_logo.png"}></LinkCard>
        </div>
    </div>
</div>