<template>
    <nav class=" nav">
        <div class="mr-auto">
            <NuxtLink to="/" class=" simple-flex gap-1">
                <NuxtImg src="/logo.png" class="w-10" alt="App Logo"/>
                <span>TAD</span>
            </NuxtLink>
        </div>
        <div class="ml-auto simple-flex gap-2">
             <SmallComponentsUserMenu v-if="user"/>
            <!--<clientOnly>
            <SmallComponentsThemeSwitcher/>
            </clientOnly>
            -->
           
            <NuxtLink href="https://github.com/abdken1359/Todoappdemo" target="_blank">
                <button class="btn btn-ghost text-2xl" aria-label="See project on github">
                    <Icon name="hugeicons:github-01"/>

                </button>
            </NuxtLink>

        </div>
    </nav>
</template>
<script setup lang="ts">
import { SmallComponentsThemeSwitcher } from '#components';
const user = useSupabaseUser()
</script>