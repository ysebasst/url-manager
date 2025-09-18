import { Button } from '../components/button/Button'
import './Home.scss'
import { IconSVGType } from '../components/icon-svg/IconSVG'
import { SizeType } from '../models/size/size.models'
import { useState } from 'react'

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

export const Home: React.FC = () => {
  const buttonList: ButtonProps[] = [
    {prefix: '1', text: 'Primary', type: 'primary'},
    {prefix: '2', text: 'Outline', type: 'outline'},
    {prefix: '3', text: 'Clear', type: 'clear'},
    {prefix: '4', text: 'Primary', type: 'primary', iconLeft: 'icon-arrow-left'},
    {prefix: '5', text: 'Outline', type: 'outline', iconLeft: 'icon-arrow-left'},
    {prefix: '6', text: 'Clear', type: 'clear', iconLeft: 'icon-arrow-left'},
    {prefix: '7', text: 'Primary', type: 'primary', iconRight: 'icon-arrow-right'},
    {prefix: '8', text: 'Outline', type: 'outline', iconRight: 'icon-arrow-right'},
    {prefix: '9', text: 'Clear', type: 'clear', iconRight: 'icon-arrow-right'},
    {prefix: '10', text: 'Primary', type: 'primary', iconLeft: 'icon-arrow-left', iconRight: 'icon-arrow-right'},
    {prefix: '11', text: 'Outline', type: 'outline', iconLeft: 'icon-arrow-left', iconRight: 'icon-arrow-right'},
    {prefix: '12', text: 'Clear', type: 'clear', iconLeft: 'icon-arrow-left', iconRight: 'icon-arrow-right'},
    {prefix: '13', text: 'Primary', type: 'primary', iconOnly: 'icon-arrow-left'},
    {prefix: '14', text: 'Outline', type: 'outline', iconOnly: 'icon-arrow-left'},
    {prefix: '15', text: 'Clear', type: 'clear', iconOnly: 'icon-arrow-left'},
    {prefix: '16', text: 'Primary', type: 'primary', loading: true},
    {prefix: '17', text: 'Outline', type: 'outline', loading: true},
    {prefix: '18', text: 'Clear', type: 'clear', loading: true},
    {prefix: '19', text: 'Primary', type: 'primary', disabled: true},
    {prefix: '20', text: 'Outline', type: 'outline', disabled: true},
    {prefix: '21', text: 'Clear', type: 'clear', disabled: true},
  ]
  const sizeList: SizeType[] = ['tiny', 'small', 'medium', 'large', 'giant']
  const [size, setSize] = useState<SizeType>('medium')

  const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value as SizeType
    setSize(newSize)
  }

  const buttonListFormatted = () => {
    return buttonList.map((button) => ({
      ...button,
      size,
    }))
  }

  return (
    <div className='home'>
      <div className='home__wrapper'>
        <h1 className='home__title'>Home</h1>
        <select
          id='size'
          name='size'
          value={size}
          style={{
            padding: '0.25rem 1rem',
            width: '100%',
            borderRadius: '0.25rem',
          }}
          onChange={(event) => handleChangeSize(event)}
        >
          {
            sizeList.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))
          }
        </select>
        <div className='buttons' style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
          gap: '0.25rem',
          padding: '1rem 0',
        }}>
          {
            buttonListFormatted().map((button) => (
              <Button
                key={button.prefix}
                prefix={button.prefix}
                type={button.type}
                text={button.text}
                iconLeft={button.iconLeft}
                iconRight={button.iconRight}
                iconOnly={button.iconOnly}
                disabled={button.disabled}
                loading={button.loading}
                size={button.size}
                onClick={button.onClick}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
