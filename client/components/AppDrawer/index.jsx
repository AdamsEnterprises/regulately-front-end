import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import React, {PropTypes} from 'react'
import ScrollArea from 'react-scrollbar'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const AppDrawer = ({
  className,
  isOpen,
}) => (
  <ScrollArea
    className={className}
    speed={0.8}
    horizontal={false}>
    <List>
      <Subheader>
        Categories
      </Subheader>

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Aerospace' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Technology' />

      <ListItem primaryText='Clear Filters'/>
    </List>

    <Divider />

    <List>
      <ListItem primaryText='something'/>
    </List>
  </ScrollArea>
)

AppDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

AppDrawer.defaultProps = {
  isOpen: true,
}

export default AppDrawer
