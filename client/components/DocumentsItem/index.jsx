import IconButton from 'material-ui/IconButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import {grey400} from 'material-ui/styles/colors'
import {ListItem} from 'material-ui/List'
import moment from 'moment'
import React from 'react'

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

  switch(true) {
    case (diff >= 14):
      timeStyle = 'documents-item__time--green'
      break

    case (diff >= 7):
      timeStyle = 'documents-item__time--yellow'
      break

    case (diff >= 3):
      timeStyle = 'documents-item__time--red'
      break
  }

  const timeText = moment(new Date())
    .fromNow()

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
        key={item.title}
        primaryText={primaryText}
        rightIconButton={iconButtonElement}
        secondaryText={item.subtitle}
        secondaryTextLines={2} />

        {
          isLast &&
          <Divider />
        }
    </div>
  )
}

export default DocumentsItem
