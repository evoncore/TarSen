
export default function openNav(e) {
  e.preventDefault();

  var contextMenu = this.refs.contextMenu;
  var navLinkWidth = 174;

  if (this.state.isOpen) {
    this.setState({
      isOpen: false,
      styles: {
        left: e.clientX,
        top: e.clientY
      }
    });
  } else {

    this.setState({
      isOpen: true,
      styles: {
        left: e.clientX,
        top: e.clientY
      }
    });

    // Set default border-left position
    if (this.links.length > 0 && this.state.isOpen) {

      for (let i = 0; i < this.links.length; i++) {
        if (this.links[i].classList.contains('active')) {
          this.borderLeft.style.top = this.links[i].offsetTop + 'px';
        }
      }

      this.borderLeft.style.height = getComputedStyle(this.links[0]).height;
    }

    if ((e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > window.innerWidth) { // Right
      this.setState({
        styles: {
          left: e.clientX - contextMenu.offsetWidth + 1,
          top: e.clientY
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-right');
        this.links[i].children[0].classList.add('align-left');
      }
    } else { // Right and Bottom
      this.setState({
        styles: {
          left: e.clientX,
          top: e.clientY
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-left');
        this.links[i].children[0].classList.add('align-right');
      }
    }

    if (contextMenu.offsetLeft <= this.borderLeft.offsetWidth) { // Left
      this.setState({
        styles: {
          left: 3,
          top: e.clientY
        }
      });
    }

    if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight &&
        (e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > window.innerWidth)
    {
      this.setState({
        styles: {
          left: e.clientX,
          top: e.clientY - contextMenu.offsetHeight
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-right');
        this.links[i].children[0].classList.add('align-left');
      }
    } else if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight) { // Left and Bottom
      this.setState({
        styles: {
          left: 3,
          top: e.clientY - contextMenu.offsetHeight
        }
      });
    }

    if ((e.clientY + contextMenu.offsetHeight) > window.innerHeight &&
        (e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > window.innerWidth)
    {
      this.setState({
        styles: {
          left: e.clientX - contextMenu.offsetWidth + 1,
          top: e.clientY - contextMenu.offsetHeight
        }
      });
    }

  }
}
