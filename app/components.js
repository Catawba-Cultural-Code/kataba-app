import {
  CommunityIcon,
  LanguageIcon,
  ManuIcon,
  StoryIcon,
  TechnologyIcon,
  WellnessIcon,
} from './Components/Icons'

import Technology from './Screens/Technology'
import Manu from './Screens/Manu'
import Wellness from './Screens/Wellness'
import Community from './Screens/Community'
import Story from './Screens/Story'
import Language from './Screens/Language'

import { COLORS } from './hooks/useTheme'
const { red, yellow, green, teal, orange, blue } = COLORS
export default [
  { name: 'Wellness', color: red, Icon: WellnessIcon, component: Wellness },
  { name: 'Language', color: yellow, Icon: LanguageIcon, component: Language },
  {
    name: 'Technology',
    color: green,
    Icon: TechnologyIcon,
    component: Technology,
  },
  { name: 'Manu', color: teal, Icon: ManuIcon, component: Manu },
  {
    name: 'Community',
    color: orange,
    Icon: CommunityIcon,
    component: Community,
  },
  { name: 'Story', color: blue, Icon: StoryIcon, component: Story },
]
