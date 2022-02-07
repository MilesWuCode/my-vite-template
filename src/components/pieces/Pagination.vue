<script setup lang="ts">
import { ref, watchEffect } from "vue";

interface Props {
  hideEllipsis: boolean;
  hidePrevNext: boolean;
  hideFirstLast: boolean;
  currentPage: number;
  lastPage: number;
  rangeSize: number;
}

const props = withDefaults(defineProps<Props>(), {
  hideEllipsis: false,
  hidePrevNext: false,
  hideFirstLast: false,
  currentPage: 1,
  lastPage: 5,
  rangeSize: 1,
});

interface emitType {
  (e: "changePage", n: number): void;
}

const emit = defineEmits<emitType>();

const min = ref(1);
const max = ref(1);
const range = ref(1);
const prev = ref(1);
const next = ref(1);

watchEffect(() => {
  min.value = Math.max(props.currentPage - props.rangeSize, 1);
  max.value = Math.min(props.currentPage + props.rangeSize, props.lastPage);
  range.value = max.value - min.value + 1;
  prev.value = Math.max(props.currentPage - 1, 1);
  next.value = Math.min(props.currentPage + 1, props.lastPage);
});

const toPage = (n: number) => {
  emit("changePage", n);
};
</script>

<template>
  <div class="btn-group">
    <!-- first -->
    <button
      class="btn btn-sm"
      :class="{ 'btn-disabled': props.currentPage === 1 }"
      v-if="!hideFirstLast"
      :disabled="props.currentPage === 1"
      @click="toPage(1)"
    >«</button>

    <!-- prev -->
    <button
      class="btn btn-sm"
      v-if="!hidePrevNext"
      @click="toPage(prev)"
      :disabled="props.currentPage === 1"
    >‹</button>

    <!-- <button class="btn btn-sm btn-disabled" v-if="!hideEllipsis">...</button> -->

    <!-- buttons -->
    <button
      class="btn btn-sm"
      :class="{ 'btn-active': props.currentPage === i + min - 1 }"
      v-for="i of range"
      @click="toPage(i + min - 1)"
    >{{ i + min - 1 }}</button>

    <!-- <button class="btn btn-sm btn-disabled" v-if="!hideEllipsis">...</button> -->

    <!-- next -->
    <button
      class="btn btn-sm"
      v-if="!hidePrevNext"
      :disabled="props.currentPage === props.lastPage"
      @click="toPage(next)"
    >›</button>

    <!-- last -->
    <button
      class="btn btn-sm"
      :class="{ 'btn-disabled': props.currentPage === props.lastPage }"
      v-if="!hideFirstLast"
      :disabled="props.currentPage === props.lastPage"
      @click="toPage(props.lastPage)"
    >»</button>
  </div>
</template>
