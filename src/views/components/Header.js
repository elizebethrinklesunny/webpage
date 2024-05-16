import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaCloudSun, FaListUl } from 'react-icons/fa';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import './drawer.css'
import { useRecoilState } from 'recoil';
import { Todolistdata } from '../../atom/atom';

function Header() {

  const [isOpen, setIsOpen] = React.useState(false)
  const [todo,settodo]=useRecoilState(Todolistdata)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
    <div className="d-flex justify-content-between headerstyle " >
  <button className='menu_button' onClick={toggleDrawer}><IoMdMenu /></button>

</div>
<Drawer open={isOpen} onClose={toggleDrawer} direction='left' className='custom-drawer'>
      <div className='drawer-header'>
        <h2>Drawer </h2>
      </div>
      <div className='drawer-content'>
        <div className='drawer-item' onClick={()=>{settodo(false)
          setIsOpen(!isOpen)
        }}>
          <FaCloudSun className='drawer-icon' />
          <span>Weather</span>
        </div>
        <div className='drawer-item' onClick={()=>{settodo(true)
          setIsOpen(!isOpen)
        }}>
          <FaListUl className='drawer-icon' />
          <span>Todolist</span>
        </div>
      </div>
    </Drawer>
</div>
  )
}

export default Header