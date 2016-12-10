import {List, ListItem} from 'material-ui/list'

export default class DocumentsList extends  Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
  }

  render() {
    const elements = this.props.items.map(item => (
      <ListItem primaryText={item.title} />
    ))

    return (
      <List>
        {elements}
      </List>
    )
  }
}
