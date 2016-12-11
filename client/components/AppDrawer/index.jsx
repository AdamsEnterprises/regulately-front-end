import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import React, {PropTypes} from 'react'
import ScrollArea from 'react-scrollbar'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'

import 'styles/app-drawer.scss'

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
        primaryText='Aerospace'
        secondaryText='201' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Technology'
        secondaryText='21' />

      <ListItem primaryText='Clear All'/>
    </List>

    <Divider />

    <List>
      <Subheader>
        Document Type
      </Subheader>

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Notice'
        secondaryText='' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Proposed Rule'
        secondaryText='' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Rule'
        secondaryText='' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Supporting Material'
        secondaryText='29' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Other'
        secondaryText='201' />

      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText='Public Submission'
        secondaryText='' />

      <ListItem primaryText='Clear All'/>
    </List>

    <Divider />

    <List>
      <ListItem
        rightToggle={<Toggle />}
        primaryText='Only Open Documents' />
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
