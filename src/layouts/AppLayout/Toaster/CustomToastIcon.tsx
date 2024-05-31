import { Icon, type IconProps } from '../../../components/ui/Icon';

export type CustomToastIconProps = {
  kind: Extract<IconProps['kind'], 'success' | 'error'>;
};

export const CustomToastIcon = ({ kind }: CustomToastIconProps) => {
  return <Icon kind={kind} className="size-5" aria-hidden />;
};
