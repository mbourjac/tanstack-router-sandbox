import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isLoggedIn) {
      throw redirect({
        to: '/login',
      });
    }
  },
});
