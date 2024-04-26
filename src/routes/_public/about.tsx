import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/about')({
  component: () => <div>Hello /_public/about!</div>,
});
