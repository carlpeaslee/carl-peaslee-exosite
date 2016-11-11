import store from '../store'

class S {
  constructor(baseStyles, hoverStyles, mobileStyles, element) {
    this.baseStyles = baseStyles
    this.hoverStyles = hoverStyles
    this.mobileStyles = mobileStyles
    this.element = element
  }


  get base() {
    return {
      ...this.baseStyles,
    }
  }

  get hover() {
    return {
      ...this.hoverStyles,
    }
  }

  get mobile() {
    return {
      ...this.mobileStyles,
    }
  }

  get all() {

    if (window.innerWidth < 800) {
      return {
        ...this.base,
        ...this.mobile
      }
    }

    const currentHoverElements = store.getState().ui.hoverElements
    const checkForElement = (existing, index, array) => {
      if(existing === this.element) {
        return true
      }
    }

    if (currentHoverElements.find(checkForElement)) {
      return {
        ...this.base,
        ...this.hover,

      }
    } else {
      return {
        ...this.base,
      }
    }
  }
}

export default S
