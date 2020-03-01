export const ElementPropsMixin = {
	props: {
		id: {
			type: String,
			required: true
		},
		label: {
      type: String,
      required: false
		},
		containerClass: {
      type: [String, Array],
      required: false
		}
	}
}
