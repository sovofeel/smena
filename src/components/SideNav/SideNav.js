import React from 'react'
import {Menu, Icon} from 'antd'
import {NavLink} from 'react-router-dom'

const navElements = [
  {
    path: '/btc',
    icon: 'pie-chart',
    label: 'Bitcoin'
  },
  {
    path: '/eth',
    icon: 'pie-chart',
    label: 'Ethereum'
  },
  {
    path: '/profile',
    icon: 'user',
    label: 'profile'
  }
]

export default ({pathname}) => (
  <Menu theme="dark" selectedKeys={[pathname]} mode="inline">
    {navElements.map(el => (
      <Menu.Item key={el.path}>
        <NavLink to={el.path}>
          <Icon type={el.icon} />
          <span>{el.label}</span>
        </NavLink>
      </Menu.Item>
    ))}
  </Menu>
)
