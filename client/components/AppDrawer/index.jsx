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
import categories from 'utils/agencyIcons'

import 'styles/app-drawer.scss'

const ItemText = ({category}) => (
  <div className='drawer-category-title'>
    <span>{category.name}</span>
    <i className='material-icons'>{category.icon}</i>
  </div>
)

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
          primaryText={<ItemText category={categories.AD} />}
          secondaryText='201' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.AEP} />}
          secondaryText='21' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.BFS} />}
          secondaryText='Ag and Environment' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.CT} />}
          secondaryText='15' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.LES} />}
          secondaryText='150' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.EELS} />}
          secondaryText='150' />

        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.EUMM} />}
          secondaryText='150' />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.HCFP} />}
          secondaryText='150' />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.PRE} />}
          secondaryText='150' />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={<ItemText category={categories.ITT} />}
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
