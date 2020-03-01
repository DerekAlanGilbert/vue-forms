<template>
 <div :class="containerClass">
    <button
      :id="id"
      v-on="$listeners"
      v-bind="$attrs"
     >
      <slot />
   </button>
 </div>
</template>

<script>
import { ElementPropsMixin } from '@/forms/elements/elementPropsMixin.js'
export default {
	mixins: [ElementPropsMixin],
  inheritAttrs: false
}
</script>

<style lang="scss" scoped></style>
