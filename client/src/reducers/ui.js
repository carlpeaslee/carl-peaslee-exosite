import {CLOSE_DRAWER, OPEN_DRAWER, HOVER_ELEMENT, UNHOVER_ELEMENT, DUPLICATE_HOVER, CLOSE_CART, OPEN_CART} from '../actions/ui'

const INITIAL_STATE = {
  hoverElements: [],
  drawerOpen: true
}

function ui(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLOSE_DRAWER: {
      return {
        ...state,
        drawerOpen: false,
      }
    }
    case OPEN_DRAWER: {
      return {
        ...state,
        drawerOpen: true,
      }
    }
    case CLOSE_CART: {
      return {
        ...state,
        cartOpen: false,
      }
    }
    case OPEN_CART: {
      return {
        ...state,
        cartOpen: true,
      }
    }
    case HOVER_ELEMENT: {
      return {
        ...state,
        hoverElements: action.elements,
      }
    }
    case UNHOVER_ELEMENT: {
      return {
        ...state,
        hoverElements: action.elements,
      }
    }
    case DUPLICATE_HOVER:
    default: {
      return state
    }
  }
}

export default ui
