import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
        <Navbar fixed='top' bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand>
                    react/typescript noteApp
                </Navbar.Brand>
            </Container>
        </Navbar>
  );
};

export default Header;

//tsrsfc
