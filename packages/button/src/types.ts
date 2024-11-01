import { ExtractPropTypes } from 'vue';

export const buttonProps = {
  type: {
    required: false,
    type: String,
    default: '',
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
