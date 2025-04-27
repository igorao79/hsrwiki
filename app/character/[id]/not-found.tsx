import Link from 'next/link';
import { Header } from '../../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="error-page">
          <h1>Персонаж не найден</h1>
          <p>Персонаж, которого вы ищете, не существует.</p>
          <Link href="/" className="button">
            На главную
          </Link>
        </div>
      </div>
    </>
  );
} 