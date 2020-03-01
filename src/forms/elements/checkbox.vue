<template>
  <div :class="[containerClass]">
    <input
      :id="id"
      v-bind="$attrs"
      v-on="$listeners"
      type="checkbox"
      @input="$emit('update', $event.target.value)"
    />
    <label :for="id">
      {{ label }}
    </label>
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
