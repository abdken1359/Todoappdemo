<template>
    <div>
        <label class=" simple-flex gap-2 text-lg cursor-pointer">
            <Icon name="hugeicons:sun-03" aria-label="Sun Icon"/>
        <input type="checkbox" value="dark"
        aria-label="Switch theme"
        @change="toggleTheme()" :checked="theme === 'dark'"  class="toggle theme-controller" />
        <Icon name="hugeicons:moon-02"/>
        </label>

    </div>
</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const theme=useStorage('theme','light')
const applyTheme=(theme:string):void=>{
    document.documentElement.setAttribute('data-theme',theme)
}
const toggleTheme=():void=>{
    theme.value=theme.value==='dark'?'light':'dark';
}
onMounted(()=>{
    applyTheme(theme.value)
})
watch(theme, (newTheme) => {
  applyTheme(newTheme)
})
</script>