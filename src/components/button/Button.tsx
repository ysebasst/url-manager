import React from 'react'
import './Button.scss'
import classNames from 'classnames'
import { IconSVG, IconSVGType } from '../icon-svg/IconSVG'
import { Spinner, SpinnerColor } from '../spinner/Spinner'
import { SizeType } from '../../models/size/size.models'

interface ButtonProps {
  prefix: string
  type?: 'primary' | 'outline' | 'clear'
  text?: string
  iconLeft?: IconSVGType | undefined
  iconRight?: IconSVGType | undefined
  iconOnly?: IconSVGType | undefined
  disabled?: boolean
  loading?: boolean
  size?: SizeType
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  prefix = '',
  type = 'primary',
  text = '',
  iconLeft = undefined,
  iconRight = undefined,
  iconOnly = undefined,
  disabled = false,
  loading = false,
  size = 'medium',
  onClick = () => {},
}) => {

  const buttonClassName = classNames(
    'button',
    `button--type-${type}`,
    `button--size-${size}`,
    {
      'button--icon-only': iconOnly,
      'button--has-icon': !!iconLeft || !!iconRight,
      'button--disabled': disabled,
      'button--loading': loading,
    },
  )

  const buttonTextClassName = classNames(
    'button__text',
    {
      'button__text--icon-left': !!iconLeft,
      'button__text--icon-right': !!iconRight,
      [`button__text--${size}`]: size,
    },
  )

  const buttonIconClassName = classNames(
    'button__icon',
    `button__icon--${size}`,
  )

  const buttonIconLeftClassName = classNames(
    buttonIconClassName,
    'button__icon--left',
  )

  const buttonIconRightClassName = classNames(
    buttonIconClassName,
    'button__icon--right',
  )

  const showLeftIcon = (): boolean => !!iconLeft && !iconOnly && !loading

  const showText = (): boolean => !!text && !iconOnly && !loading

  const showRightIcon = (): boolean => !!iconRight && !iconOnly && !loading

  const showIconOnly = (): boolean => !!iconOnly && !loading

  const spinnerColor = (): SpinnerColor => {
    if (type === 'primary') { return 'white' }
    return 'blue'
  }

  return (
    <button
      id={`button-${prefix}`}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {
        showLeftIcon() &&
        <div className={buttonIconLeftClassName}>
          <IconSVG icon={iconLeft} />
        </div>
      }
      {
        showText() &&
        <span
          id={`button-text-${prefix}`}
          className={buttonTextClassName}
        >{text}</span>
      }
      {
        showRightIcon() &&
        <div className={buttonIconRightClassName}>
          <IconSVG icon={iconRight} />
        </div>
      }
      {
        showIconOnly() &&
        <div className={buttonIconClassName}>
          <IconSVG icon={iconOnly} />
        </div>
      }
      <Spinner
        color={spinnerColor()}
        size='small'
        isLoading={loading}
      />
    </button>
  )
}
