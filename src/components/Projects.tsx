import { HTMLAttributes } from 'react';

export default function Projects(props: HTMLAttributes<HTMLDivElement> & { className: string }) {
  return (
    <div {...props}>
      <h1 className="text-6xl font-bold">Projects</h1>
    </div>
  );
}
