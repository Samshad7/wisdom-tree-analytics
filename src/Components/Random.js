{<Navbar
    expand="xxl"
    className="bg-body-tertiary nav position-absolute top-0 bg-dark"
  >
    <Container>
      <Navbar.Brand href="#home"><img src={img} className="logo" /></Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="about" id="about">About Us</Nav.Link>
          <Nav.Link href="#solutions">Solutions</Nav.Link>
          <Nav.Link href="contact" id="contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>}