import Icon from './Icon'
import DoneIconSvg from '../../../assets/icons/tasks/done.svg'
import NoneIconSvg from '../../../assets/icons/tasks/none.svg'
import SmallIconSvg from '../../../assets/icons/tasks/small.svg'
import MediumIconSvg from '../../../assets/icons/tasks/medium.svg'
import HighIconSvg from '../../../assets/icons/tasks/high.svg'

const icons = {
  done: DoneIconSvg,
  none: NoneIconSvg,
  low: SmallIconSvg,
  medium: MediumIconSvg,
  high: HighIconSvg,
}

const TaskStatusIcon = (type, classes) => Icon(icons[type], classes)

export default TaskStatusIcon
