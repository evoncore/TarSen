import React from 'react'
import { Link } from 'react-router'
import ReactDom from 'react-dom'

class Nav extends React.Component {

  constructor() {
    super()

    this.state = {
      isOpen: false,
      styles: {}
    }
  }

  componentWillMount() {
    document.body.addEventListener('contextmenu', this.openNav.bind(this))
    // document.body.addEventListener('mouseup', this.closeNav.bind(this))
  }

  componentDidMount() {
    // Animate Border
    this.links = document.querySelectorAll('#context-menu ul a')
    this.borderLeft = document.querySelector('#context-menu ul .before')

    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener('click', function() {
        document.querySelector('#context-menu ul .before').style.top = this.offsetTop + 'px'
      })
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('contextmenu', this.openNav)
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].removeEventListener('click')
    }
    // document.body.removeEventListener('mouseup', this.closeNav.bind(this))
  }

  openNav(e) {
    e.preventDefault()

    var contextMenu = document.getElementById('context-menu')

    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        styles: {
          left: e.clientX,
          top: e.clientY
        }
      })
    } else {

      this.setState({
        isOpen: true,
        styles: {
          left: e.clientX,
          top: e.clientY
        }
      })

      if (this.links.length > 0 && this.state.isOpen) {
        let menuBorder = document.querySelector('#context-menu ul .before')
        for (let i = 0; i < this.links.length; i++) {
          if (this.links[i].classList.contains('active')) {
            menuBorder.style.top = this.links[i].offsetTop + 'px'
          }
        }
        
        this.borderLeft.style.height = getComputedStyle(this.links[0]).height
      }

      if ((e.clientX + (contextMenu.offsetWidth + 174)) > window.innerWidth) {
        this.setState({
          styles: {
            left: e.clientX - contextMenu.offsetWidth + 1,
            top: e.clientY
          }
        })

        for (let i = 0; i < this.links.length; i++) {
          this.links[i].children[0].classList.remove('align-right')
          this.links[i].children[0].classList.add('align-left')
        }
      } else {
        this.setState({
          styles: {
            left: e.clientX,
            top: e.clientY
          }
        })

        for (let i = 0; i < this.links.length; i++) {
          this.links[i].children[0].classList.remove('align-left')
          this.links[i].children[0].classList.add('align-right')
        }
      }

      if (this.refs.contextMenu.offsetLeft == 0) {
        this.setState({
          styles: {
            left: 3,
            top: e.clientY
          }
        })
      }

      if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight &&
          (e.clientX + (contextMenu.offsetWidth + 174)) > window.innerWidth)
      {
        this.setState({
          styles: {
            left: e.clientX,
            top: e.clientY - contextMenu.offsetHeight
          }
        })

        for (let i = 0; i < this.links.length; i++) {
          this.links[i].children[0].classList.remove('align-right')
          this.links[i].children[0].classList.add('align-left')
        }
      } else if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight) {
        this.setState({
          styles: {
            left: e.clientX,
            top: e.clientY - contextMenu.offsetHeight
          }
        })
      }

      if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight &&
          (e.clientX + (contextMenu.offsetWidth + 174)) > window.innerWidth)
      {
        this.setState({
          styles: {
            left: e.clientX - contextMenu.offsetWidth + 1,
            top: e.clientY - contextMenu.offsetHeight
          }
        })
      }

    }
  }

  // closeNav(e) {
  //   // if (e.target == e.target.closest('#root')) {
  //     this.setState({
  //       isOpen: false
  //     })
  //   // }
  // }

  render() {
    return (
      <nav
            className={this.state.isOpen ? 'show' : 'hide'} 
            style={this.state.styles}
            ref="contextMenu" 
            id="context-menu">

        <ul>
          <div className="before"></div>
          <li><Link to="/" className="icon icon-home" activeClassName="active"><i className="link-text">Home</i></Link></li>
          <li><Link to="/users" className="icon icon-users" activeClassName="active"><i className="link-text">Users</i></Link></li>
          <li><Link to="/messages" className="icon icon-bubbles2" activeClassName="active"><i className="link-text">Messages</i></Link></li>
          <li><Link to="/settings" className="icon icon-cog" activeClassName="active"><i className="link-text">Settings</i></Link></li>
        </ul>

      </nav>
    )
  }

}

export default Nav