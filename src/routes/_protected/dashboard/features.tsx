import { createFileRoute } from '@tanstack/react-router';
import { DashboardFeatures } from '../../../pages/Dashboard/Modals/DashboardFeatures';

export const Route = createFileRoute('/_protected/dashboard/features')({
  component: DashboardFeatures,
});
