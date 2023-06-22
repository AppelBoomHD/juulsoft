import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Tags`.
 */
export type TagsProps = SliceComponentProps<Content.TagsSlice>;

/**
 * Component for "Tags" Slices.
 */
const Tags = ({ slice }: TagsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for tags (variation: {slice.variation}) Slices
    </section>
  );
};

export default Tags;
