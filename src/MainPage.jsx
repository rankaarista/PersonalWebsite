import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import PageNavbar from './PageNavbar';

export default function MainPage() {
  return (
    <div>
      <PageNavbar />
      <Container className="mt-4">
        <Outlet />
      </Container>
    </div>
  );
}