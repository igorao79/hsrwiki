import Link from 'next/link';
import { Header } from '../../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="error-page">
          <h1>Световой конус не найден</h1>
          <p>Световой конус, который вы ищете, не существует.</p>
          <Link href="/light-cones" className="button">
            К списку световых конусов
          </Link>
        </div>
      </div>
    </>
  );
} 