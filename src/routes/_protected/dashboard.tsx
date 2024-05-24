import { createFileRoute } from '@tanstack/react-router';
import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout';

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardLayout,
});
