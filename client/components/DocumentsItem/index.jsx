import React from 'react'
import IconButton from 'material-ui/IconButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import {grey400} from 'material-ui/styles/colors'

const associateHandler = (id, handler)  => () => handler(id)

const DocumentsItem = ({
  item,
  isLast,
  onClick,
  onStar,
}) => {
  const handleClick = associateHandler(item.id, onClick)
  const handleStar = associateHandler(item.id, onStar)

  const iconButtonElement = (
    <IconButton
      touch
      tooltip="Favorite"
      tooltipPosition="bottom-center">
      <ToggleStar color={grey400} />
    </IconButton>
  )

  return (
    <div className'documents-item'>
      <ListItem
        key={item.title}
        primaryText={item.title}
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
