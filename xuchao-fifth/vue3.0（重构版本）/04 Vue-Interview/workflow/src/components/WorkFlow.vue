<script setup>
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";

import { DndPanel, SelectionSelect, Control } from "@logicflow/extension";
import "@logicflow/extension/lib/style/index.css";
import { ref, onMounted } from "vue";
import edge from "../data/edge";
import { PatternConfig, graphData } from "../data/index";
const container = ref(null);

LogicFlow.use(DndPanel);
LogicFlow.use(SelectionSelect);
LogicFlow.use(Control);
onMounted(() => {
  const lf = new LogicFlow({
    container: container.value,
    grid: true,
  });

  lf.register(edge);
  lf.extension.dndPanel.setPatternItems(PatternConfig);
  lf.render();
});
</script>

<template>
  <div class="container" ref="container"></div>
</template>

<style scoped>
.container {
  width: 900px;
  height: 600px;
}
</style>
