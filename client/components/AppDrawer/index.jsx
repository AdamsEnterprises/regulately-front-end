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
    speed={0.5}
    horizontal={false}>
    <div className='app-drawer__inner'>
      <List>
        <Subheader>
          Categories
        </Subheader>

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText='Transportation'
          secondaryText='201' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText='Technology'
          secondaryText='21' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText='Enviroment / Agriculture'
          secondaryText='Ag and Environment' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText='Commerce and International'
          secondaryText='15' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText='Defense, Law Enforcement & Security'
          secondaryText='150' />

        <ListItem primaryText='Clear All'/>
      </List>

      <Divider />

      <List>
        <ListItem
          rightToggle={<Toggle />}
          primaryText='Only Open Documents' />
      </List>
    </div>
  </ScrollArea>
)

AppDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

AppDrawer.defaultProps = {
  isOpen: true,
}

export default AppDrawer
