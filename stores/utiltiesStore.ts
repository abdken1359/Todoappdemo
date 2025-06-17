type Status='success'|'error'|'info'|'warning'
export const useUtilitiesStore=defineStore('utilityStore',()=>{
    const searchModel=ref('')
    const isToastVisible=ref(false)
    const toastStatus=ref<Status>('success')
    const toastMessage=ref<string>('')
    const showToast=(status:Status,message:string):void=>{
        isToastVisible.value=true
        toastStatus.value=status
        toastMessage.value=message
        setTimeout(()=>{
            isToastVisible.value=false

        },2000)
    }
    
    return {
        //Variables and Refs
        searchModel,
        isToastVisible,
        toastStatus,
        toastMessage,

        //Functions
        showToast,
    }
})