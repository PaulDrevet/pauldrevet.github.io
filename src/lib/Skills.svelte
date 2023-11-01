<script>
    import SkillCard from "./components/SkillCard.svelte";

    const percentC = 50;
    const percentFront = 80;
    const percentPython = 80;
</script>

<div class="pt-16 pb-10 ml-24">
    <div class="flex items-center justify-center h-16 mb-10 mr-10">
        <p class="text-[#c5cfdf] tracking-wider text-5xl font-bold">My Skills</p>
    </div>

    <div class="grid grid-cols-2">
        <div class="flex flex-col">
            <SkillCard percent={percentC} name={"C"}></SkillCard>
            <SkillCard percent={percentFront} name={"Frontend"}></SkillCard>
            <SkillCard percent={percentPython} name={"Python"}></SkillCard>

        </div>
        <div class="flex flex-col">
            <SkillCard percent={percentC} name={"C"}></SkillCard>
            <SkillCard percent={percentFront} name={"Frontend"}></SkillCard>
            <SkillCard percent={percentPython} name={"Python"}></SkillCard>

        </div>

    </div>
</div>

