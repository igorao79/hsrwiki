'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const [isFromCharacter, setIsFromCharacter] = useState(false);
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Функция для получения параметров URL
    const parseQueryString = (url: string) => {
      const params: Record<string, string> = {};
      const queryString = url.split('?')[1];
      
      if (!queryString) return params;
      
      const pairs = queryString.split('&');
      pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      });
      
      return params;
    };
    
    // Получаем текущий URL
    const currentUrl = window.location.href;
    const queryParams = parseQueryString(currentUrl);
    
    // Проверяем, пришли ли мы со страницы персонажа
    if (queryParams.ref === 'character' && queryParams.characterId) {
      setIsFromCharacter(true);
      setCharacterId(queryParams.characterId);
    }
  }, []);
  
  // Если загрузка не завершена, показываем статичный текст
  if (!isMounted) {
    return <div className={className}>← Назад к списку световых конусов</div>;
  }
  
  return isFromCharacter && characterId ? (
    <Link href={`/character/${characterId}`} className={className}>
      ← Назад к персонажу
    </Link>
  ) : (
    <Link href="/light-cones" className={className}>
      ← Назад к списку световых конусов
    </Link>
  );
} 