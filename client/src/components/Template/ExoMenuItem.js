import React, {Component} from 'react'
import {Link} from 'react-router'
import MenuItem from 'material-ui/MenuItem'


const baseLinkStyle = {
  border: '10px',
  boxSizing: 'border-box',
  display: 'block',
  fontFamily: 'RobotoDraft, Roboto, "Open Sans", "Segoe UI", Candara, "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
  'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
  cursor: 'pointer',
  textDecoration: 'none',
  margin: '0px',
  padding: '0px',
  outline: 'none',
  fontSize: '20px',
  fontWeight: 'inherit',
  transform: 'translate(0px, 0px)',
  lineHeight: '48px',
  position: 'relative',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  whiteSpace: 'nowrap',
  background: 'none',
  color: 'rgb(92, 93, 96)'
}

const activeLinkStyle = {
  ...baseLinkStyle,
  color: 'rgb(44, 157, 182)',
  fill: 'rgb(44, 157, 182)',
}

class ExoMenuItem extends Component {
  render(){
    return (
      <div
        className={'menu__menu-item'}
      >
            <Link
              to={this.props.to}
              style={baseLinkStyle}
              onlyActiveOnIndex={this.props.onlyActiveOnIndex}
              activeStyle={{
                ...activeLinkStyle,
              }}
            >
              <MenuItem
              style={{
                color: 'inherit',
                fontSize: 'inherit'
              }}
              leftIcon={this.props.icon}
              >
                {this.props.title}
              </MenuItem>
            </Link>
            </div>
    )
  }
}

export default ExoMenuItem
