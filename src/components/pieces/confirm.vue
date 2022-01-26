<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'

interface Props {
  show: boolean
  title?: string
  message?: string
  argee?: string
  cancel?: string
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  title: '',
  message: 'Are you sure ?',
  argee: 'Yes',
  cancel: 'No',
})

const isOpen = ref(props.show)

interface emitType {
  (e: 'argee'): void
  (e: 'cancel'): void
}

const emit = defineEmits<emitType>()

watchEffect(() => {
  isOpen.value = props.show
})
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="emit('cancel')">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                v-if="props.title"
                class="mb-2 text-lg font-medium leading-6 text-gray-900"
              >{{ props.title }}</DialogTitle>

              <DialogDescription class="text-gray-500">{{ props.message }}</DialogDescription>

              <div class="mt-4">
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="emit('argee')"
                >{{ props.argee }}</button>
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="emit('cancel')"
                >{{ props.cancel }}</button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>