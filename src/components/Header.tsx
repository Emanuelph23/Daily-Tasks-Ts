import {LiaDochub, LiaTengeSolid} from 'react-icons/lia'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <p><LiaDochub /><span>aily</span></p>
        <p><LiaTengeSolid /><span>asks</span></p>
    </div>
  )
}

export default Header