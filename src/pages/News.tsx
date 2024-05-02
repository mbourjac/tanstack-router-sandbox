import { Link } from '@tanstack/react-router';
import { CloseIcon } from '../components/Icons/CloseIcon';

export const News = () => {
  return (
    <div className="flex justify-between">
      <h2 className="p-4">Hello /_protected/dashboard/news!</h2>
      <Link to="/dashboard" className="flex items-center p-4">
        <CloseIcon />
        <span className="sr-only">Back to dashboard</span>
      </Link>
    </div>
  );
};
