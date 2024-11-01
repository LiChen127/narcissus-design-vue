import { ExtractPropTypes } from 'vue';

export const buttonProps = {
  type: {
    required: false,
    type: String,
    default: '',
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
