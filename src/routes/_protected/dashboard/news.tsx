import { createFileRoute } from '@tanstack/react-router';
import { DashboardNews } from '../../../pages/Dashboard/Modals/DashboardNews';

export const Route = createFileRoute('/_protected/dashboard/news')({
  component: DashboardNews,
});
