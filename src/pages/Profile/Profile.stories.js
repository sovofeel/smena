import React from 'react'
import {storiesOf} from '@storybook/react'

import {Profile} from './Profile'

storiesOf('Profile', module)
.add('default', () => (
  <Profile email="test@email.com" firstName="Artem" lastName="Samofalov" />
))
.add('default with', () => (
  <Profile email="test@email.com" firstName="Artem" lastName="Samofalov" />
))
