import React, {Component, PropTypes} from 'react'
import List from 'material-ui/List'

import DocumentsItem from 'components/DocumentsItem'

export default class DocumentsList extends  Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render() {
    console.log(this.props.items)
    const elements = this.props.items.map((item, index)=> {
      const isLast = this.props.length - 1 === index

      return (
        <DocumentsItem
          item={item}
          isLast={isLast} />
      )
    })

    return (
      <List>

        {elements}
      </List>
    )
  }
}
