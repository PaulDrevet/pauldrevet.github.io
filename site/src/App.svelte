<script lang="ts">
    import Nav from './lib/Nav.svelte'
    import About from './lib/About.svelte'
    import Project from './lib/Project.svelte'
    import Resume from './lib/Resume.svelte'
    import Skills from './lib/Skills.svelte'

</script>

<main class="bg-primary">
    <Nav></Nav>
    <div class="ml-16 mr-16 divide-y divide">
        <div>
            <About></About>
        </div>
        <div>
            <Skills></Skills>
        </div>
    </div>

</main>

