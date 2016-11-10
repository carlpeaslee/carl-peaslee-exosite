import store from '../store'

export const CLOSE_DRAWER = "CLOSE_DRAWER"
export function closeDrawer() {
  return {
    type: CLOSE_DRAWER,
  }
}

export const OPEN_DRAWER = "OPEN_DRAWER"
export function openDrawer() {
  return {
    type: OPEN_DRAWER,
  }
}


export const CLOSE_CART = "CLOSE_CART"
export function closeCart() {
  return {
    type: CLOSE_CART,
  }
}

export const OPEN_CART = "OPEN_CART"
export function openCart() {
  return {
    type: OPEN_CART,
  }
}

export const DUPLICATE_HOVER = "DUPLICATE_HOVER"


export const HOVER_ELEMENT = "HOVER_ELEMENT"
export function hoverElement(element) {
  const currentHoverElements = store.getState().ui.hoverElements
  function checkForElement (existing, index, array) {
    if(existing === element) {
      return array
    }
  }

  const newArray = currentHoverElements.find(checkForElement)

  if (newArray !== undefined) {
    return {
      type: DUPLICATE_HOVER,
    }
  } else {
    return {
      type: HOVER_ELEMENT,
      elements:[...currentHoverElements, element]
    }
  }
}

export const UNHOVER_ELEMENT = "UNHOVER_ELEMENT"
export function unhoverElement(element) {
  const currentHoverElements = store.getState().ui.hoverElements
  function checkForElement (existing, index, array) {
    if(existing === element) {
      array.splice(index, 1)
      return array
    }
  }

  const newArray = () => {
    currentHoverElements.find(checkForElement)
  }

  return {
    type: UNHOVER_ELEMENT,
    elements: newArray() || []
  }

}
