<style scoped>
.v-enter-from{
    opacity: 0;
    transform: translateY(50px);
}
.v-enter-to,.v-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.v-leave-to{
    opacity: 0;
    transform: translateY(-50px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
}
</style>
<template>
    <div>
        <Transition>
        <div class=" toast" v-show="utils.isToastVisible">
            <div class=" alert" :class="decideColorClass">
                <p class="text-base">{{ utils.toastMessage }}</p>
            </div>

        </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const decideColorClass=computed(()=>{
    switch(utils.toastStatus){
        case 'error':
            return 'alert-error'
        case 'info':
            return 'alert-info'
        case 'success':
            return 'alert-success'
        case 'warning':
            return 'alert-warning'
        default:
            return 'alert-success'
    }
})
</script>