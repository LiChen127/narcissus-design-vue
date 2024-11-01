import { ExtractPropTypes } from 'vue';

export const buttonProps = {
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
