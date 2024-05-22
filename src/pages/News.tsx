import { Link } from '@tanstack/react-router';
import { CloseIcon } from '../components/icons/CloseIcon';

export const News = () => {
  return (
    <div className="border-main flex w-full justify-between">
      <div className="flex h-fit w-full justify-between">
        <h2 className="p-4">Hello /_protected/dashboard/news!</h2>
        <Link to="/dashboard" className="flex items-center px-5 py-4">
          <CloseIcon />
          <span className="sr-only">Back to dashboard</span>
        </Link>
      </div>
    </div>
  );
};
