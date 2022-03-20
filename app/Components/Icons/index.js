import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
export const LanguageIcon = ({ size = 24, color = 'black' }) => (
  <MaterialCommunityIcons
    name='comment-text-multiple'
    size={size}
    color={color}
  />
)

export const ManuIcon = ({ size = 24, color = 'black' }) => (
  <Fontisto name='earth' size={size} color={color} />
)

export const StoryIcon = ({ size = 24, color = 'black' }) => (
  <MaterialIcons name='history-edu' size={size} color={color} />
)

export const CommunityIcon = ({ size = 24, color = 'black' }) => (
  <FontAwesome5 name='people-carry' size={size} color={color} />
)

export const TechnologyIcon = ({ size = 24, color = 'black' }) => (
  <MaterialIcons name='emoji-objects' size={size} color={color} />
)

export const WellnessIcon = ({ size = 24, color = 'black' }) => (
  <FontAwesome5 name='hand-holding-heart' size={size} color={color} />
)
