import { ref, computed } from "vue";

export function useTargetIndex(initIndex) {
    const targetIndex = ref(initIndex);

    function setTargetIndex(newIndex) {
        targetIndex.value = Number(newIndex);
    }
    return [targetIndex, setTargetIndex];
}

export function useComputedData(data, targetIndex) {
    const leftTitle = computed(() => data[targetIndex.value].title)
    return { leftTitle }
}