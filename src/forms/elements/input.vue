<template>
  <div :class="containerClass">
    <label :for="id">
      {{ label }}
    </label>
    <div>
      <input
        v-bind="$attrs"
        v-on="$listeners"
        @input="$emit('update', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import { ElementPropsMixin } from '@/forms/elements/elementPropsMixin.js'
export default {
	mixins: [ElementPropsMixin],
  inheritAttrs: false,
  model: {
    event: 'update'
  }
}
</script>

<style lang="scss" scoped></style>
