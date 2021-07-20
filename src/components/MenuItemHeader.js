import React from 'react'
import PropTypes from 'prop-types'


const MenuItemHeader = ({ title }) => (
    <div className="menuItemHeader">{title}</div>
)

MenuItemHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default MenuItemHeader
