import IconButton from 'material-ui/IconButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import {grey400} from 'material-ui/styles/colors'
import {ListItem} from 'material-ui/List'
import moment from 'moment'
import React from 'react'
import 'styles/documents-item.scss'

const associateHandler = (id, handler)  => () => handler(id)

const DocumentsItem = ({
  item,
  isLast,
  onClick,
  onStar,
}) => {
  const handleClick = associateHandler(item.id, onClick)
  const handleStar = associateHandler(item.id, onStar)

  const now = moment()
  const diff = now.diff(new Date(), 'days')

  let timeStyle
  let timeStylePrefix = "documents-item__time--"
  let timeStyleColor = "grey"
  const commentEndDateObj = moment(item.comment_end_date)
  const timeDiff = moment.duration(commentEndDateObj.diff(moment(new Date())))
  let timeDiffHours = timeDiff.asHours()
  let timeText
  if (timeDiffHours < 0) {
    timeText = 'Comments Closed'
  } else if (timeDiffHours < 24) {
    timeText = parseInt(timeDiffHours) + " hours"
    timeStyleColor = "red"
  } else {
    let timeDiffDays = parseInt(timeDiff.asDays(), 10)
    timeText = timeDiffDays + " days"
    timeStyleColor = "yellow"
    if (timeDiffDays > 15) timeStyleColor = "green"
  }
  timeStyle = timeStylePrefix + timeStyleColor

const engagementRatePrefix = "documents-item__engagement--"
const engagmentRateValueMap = {'-1': 'Down', '0': 'Flat', '1': 'Up'}
const engagementRateValue = engagmentRateValueMap[String(item.engagementRate)]
const engagementRateStyle = engagementRatePrefix + engagementRateValue

  const primaryText = (
    <div>
      {item.title}

      <span className={timeStyle}>
        {timeText}
      </span>
    </div>
  )

  const iconButtonElement = (
    <IconButton
      touch
      tooltip="Favorite"
      tooltipPosition="bottom-center">
      <ToggleStar color={grey400} />
    </IconButton>
  )

  return (
    <div className='documents-item'>
      <ListItem
        onClick={handleClick}
        key={item.title}
        primaryText={primaryText}
        rightIconButton={iconButtonElement}
        secondaryText={item.subtitle}
        secondaryTextLines={2} />
        <div className={engagementRateStyle}>
          Engagement Rate {engagementRateValue}
        </div>

        {
          isLast &&
          <Divider />
        }
    </div>
  )
}

export default DocumentsItem
