import { ref, computed, reactive } from "vue";

export function useTargetIndex(initIndex) {
    const targetIndex = ref(initIndex);

    function setTargetIndex(newIndex) {
        targetIndex.value = Number(newIndex);
    }
    return [targetIndex, setTargetIndex];
}

export function useRightListData(initData, checkedData) {
    const rightListData = ref(initData);

    function addRightListData(newData) {
        rightListData.value = [...rightListData.value, ...newData];
        checkedData.left = []
        document.getElementById('chooseAllLeft').checked = false

    }

    function removeRightListData(newData) {
        const diffs = rightListData.value.filter(item => {
            const diff = newData.find(findItem => {
                return findItem.id == item.id
            })

            if (diff == undefined) {
                return item
            }

        })

        rightListData.value = diffs
        checkedData.right = []
        document.getElementById('chooseAllRight').checked = false
    }
    return [rightListData, addRightListData, removeRightListData];
}


export function useCheckedData() {
    const checkedData = reactive({
        left: [],
        right: []
    })

    function addCheckedData(leftOrRight, item) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item)
                    // console.log(checkedData)
                break;
            case 'right':
                checkedData.right.push(item)
                break;
            default:
                break;
        }

    }

    function removeCheckedData(leftOrRight, id) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(f => f.id != id)
                console.log(checkedData)
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(f => f.id != id)
                break;
            default:
                break;

        }
    }

    return [removeCheckedData, addCheckedData, checkedData]
}

export function useChooseAll(leftListData, rightListData, checkedData, setCheckedData) {

    const checkedLeft = ref(false)
    const checkedRight = ref(false)

    function chooseAll(chooseAllChecked, list, leftOrRight) {

        if (chooseAllChecked) {
            checkedData[leftOrRight] = []
            list.value.forEach((item) => {
                if (!item.disabled) {
                    setCheckedData("true", leftOrRight, item);
                    document.getElementById("checkbox__" + `${item.id}`).checked = true;
                }
            });
        } else {
            checkedData[leftOrRight] = [];
            list.value.forEach((item) => {
                if (!item.disabled) {
                    document.getElementById("checkbox__" + `${item.id}`).checked = false;
                }
            });
        }
    }

    function chooseAllLeft(chooseAllChecked) {
        // console.log(chooseAllChecked)
        chooseAll(chooseAllChecked, leftListData, 'left')
    }

    function chooseAllRight(chooseAllChecked) {
        chooseAll(chooseAllChecked, rightListData, 'right')
    }
    return [chooseAllLeft, chooseAllRight]
}


export function useDraggedItem() {
    const draggedItem = ref(null)

    function setDraggedItem(item) {
        draggedItem.value = item
    }

    return [draggedItem, setDraggedItem]
}


export function useComputedData(allData, targetIndex, rightListData, checkedData) {
    const leftTitle = computed(() => allData[targetIndex.value].title);

    const leftListData = computed(() => {
        const currentData = allData[targetIndex.value].data;

        const diffs = currentData.filter(item => {
            const diff = rightListData.value.find(findItem => {
                return findItem.id == item.id
            })

            if (diff == undefined) {
                return item
            }
        })

        return diffs
    });

    const transferDisabled = computed(() => {
        return {
            left: checkedData.right.length == 0,
            right: checkedData.left.length == 0
        }
    })

    return { leftTitle, leftListData, transferDisabled };
}