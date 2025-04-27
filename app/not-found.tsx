import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница которую вы искали не найдена</p>
      <Link href="/" style={{ 
        display: 'inline-block', 
        marginTop: '20px',
        padding: '10px 20px',
        background: '#7A5AF8',
        color: 'white',
        borderRadius: '4px',
        textDecoration: 'none'
      }}>
        Вернуться на главную
      </Link>
    </div>
  );
} 