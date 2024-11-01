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
  size: {
    required: false,
    type: String,
    default: '',
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
