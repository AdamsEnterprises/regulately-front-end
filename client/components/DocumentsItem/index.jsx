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
  getRegulation,
  toggleDialog,
  getComments,
  onStar,
}) => {
  const loadComments = associateHandler(item.docketId, getComments)
  const loadDocument = associateHandler(item.docketId, getRegulation)
  const handleStar = associateHandler(item.docketId, onStar)

  const now = moment()
  const diff = now.diff(new Date(), 'days')

  let timeStyle
  let timeStylePrefix = "documents-item__time--"
  let timeStyleColor = "grey"
  const commentEndDateObj = moment(item.commentEndDate)
  const timeDiff = moment.duration(commentEndDateObj.diff(moment(new Date())))
  let timeDiffHours = timeDiff.asHours()
  let timeText
  if (timeDiffHours <= 0) {
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
  const ItemSubTitle = ({item}) => (
    <div className='documents-item-subtitle'>
      <span>{item.category}</span>
      <span className='documents-item-NOComments'>{item.numberOfComments === 1 ? `${item.numberOfComments} comment` : `${item.numberOfComments} comments`}</span>
    </div>
  )

  return (
    <div className='documents-item'>
      <ListItem
        onClick={() => {
          loadDocument()
          loadComments()
          toggleDialog()
        }}
        key={item.title}
        primaryText={primaryText}
        rightIconButton={iconButtonElement}
        secondaryText={item.numberOfComments === 1 ? `${item.category} | ${item.numberOfComments} comment` : `${item.category} | ${item.numberOfComments} comments`}
        secondaryTextLines={2} />

        {
          isLast &&
          <Divider />
        }
    </div>
  )
}

export default DocumentsItem
