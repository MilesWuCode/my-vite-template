<script setup lang="ts">
import Item from "~/components/todo/Item.vue";
import Pagination from "~/components/pieces/Pagination.vue";
import { ref } from "vue";
import Insert from "~/components/todo/Insert.vue";
import { useResult } from "@vue/apollo-composable";
import { useMyTodosQuery } from "~/graphql/graphqlOperations";

const page = ref(1);

const { result, loading, error, refetch, fetchMore, variables } = useMyTodosQuery({
  first: 4,
  page: page.value,
});

const todos = useResult(result);

const inserted = () => {
  page.value = 1

  refetch();
};

const changePage = (n: number) => {
  page.value = n;

  fetchMore({
    variables: {
      first: 4,
      page: page.value,
    },
  })
};
</script>

<template>
  <div>
    <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
      <h1 class="text-2xl">Todo</h1>
      
      <Insert @inserted="inserted" />

      <div v-if="loading">loading...</div>

      <template v-else>
        <div class="space-y-4">
          <Item v-for="todo of todos?.data" :key="todo.id" :todo="todo" />
        </div>

        <Pagination
          v-if="todos?.paginatorInfo.total !== 0"
          :currentPage="page"
          :lastPage="todos?.paginatorInfo.lastPage"
          :rangeSize="2"
          :hideEllipsis="false"
          :hideFirstLast="false"
          :hidePrevNext="false"
          @changePage="changePage"
        />
      </template>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: member-only
</route>
