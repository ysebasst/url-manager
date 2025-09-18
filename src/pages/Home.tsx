import { Button } from '../components/button/Button'
import './Home.scss'

export const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Home</h1>
      <div className="buttons" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '1rem',
      }}>
        <Button
          prefix='test'
          text='Primary'
          type='primary'
        />
        <Button
          prefix='test'
          text='Outline'
          type='outline'
        />
        <Button
          prefix='test'
          text='Clear'
          type='clear'
        />
      </div>
    </div>
  )
}
