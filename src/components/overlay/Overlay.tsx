import classNames from 'classnames'
import { Spinner, SpinnerColor } from '../spinner/Spinner'
import './Overlay.scss'
import { SizeType } from '../../models/size/size.models'

interface OverlayProps {
  isLoading?: boolean;
  size?: SizeType;
  color?: SpinnerColor;
}

export const Overlay: React.FC<OverlayProps> = ({isLoading = false, size = 'small', color = 'blue'}) => {
  const overlayClassName = classNames(
    'overlay',
    `overlay--${color}`,
  )
  
  if (!isLoading) { return null }

  return (
    <div className={overlayClassName}>
      <Spinner isLoading={isLoading} size={size} color={color} />
    </div>
  )
}
