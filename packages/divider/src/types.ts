import { ExtractPropTypes } from 'vue';

export const dividerProps = {
  dashed: {
    type: Boolean,
    default: false,
  },
} as const;

export type DividerProps = ExtractPropTypes<typeof dividerProps>;
