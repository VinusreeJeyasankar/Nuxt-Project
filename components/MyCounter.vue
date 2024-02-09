<template>
    <p>Counter: {{ count }}</p>
</template>
<script>
    export default defineComponent({
        setup() {
            const store = useCounterStore()
            const count = computed(() => store.count)
            return { count }
        },
    })
</script>