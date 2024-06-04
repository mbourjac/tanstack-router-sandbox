import { createFileRoute } from '@tanstack/react-router';
import { DashboardEvents } from '../../../pages/Dashboard/Modals/DashboardEvents';

export const Route = createFileRoute('/_protected/dashboard/events')({
  component: DashboardEvents,
});
