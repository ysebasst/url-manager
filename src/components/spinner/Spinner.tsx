
import './Spinner.scss'
import { IconSVG } from '../icon-svg/IconSVG'
import classNames from 'classnames'
import { SizeType } from '../../models/size/size.models'

export type SpinnerColor = 'blue' | 'white';

interface SpinnerProps {
  isLoading?: boolean;
  size?: SizeType;
  color?: SpinnerColor;
}

export const Spinner: React.FC<SpinnerProps> = ({
  isLoading = false,
  size = 'small',
  color = 'blue',
}) => {
  const spinnerClassName = classNames(
    'spinner',
    `spinner--${color}`,
  )
  const iconClassName = classNames(
    'spinner__icon',
    `spinner__icon--${size}`,
  )

  if (!isLoading) { return null }

  return (
    <span className={spinnerClassName}>
      <IconSVG
        className={iconClassName}
        icon='icon-spinner'
      />
    </span>
  )
}
