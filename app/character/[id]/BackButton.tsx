'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const [isFromTierList, setIsFromTierList] = useState(false);
  const [isFromLightCone, setIsFromLightCone] = useState(false);
  const [lightConeId, setLightConeId] = useState<string | null>(null);
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
    
    // Проверяем, пришли ли мы со страницы тир-листа
    if (queryParams.ref === 'tierlist') {
      setIsFromTierList(true);
    }
    // Проверяем, пришли ли мы со страницы светового конуса
    else if (queryParams.ref === 'lightcone' && queryParams.lightConeId) {
      setIsFromLightCone(true);
      setLightConeId(queryParams.lightConeId);
    }
  }, []);
  
  // Don't render anything during SSR or until client hydration is complete
  if (!isMounted) {
    return <div className={className}>← Назад к списку персонажей</div>;
  }
  
  if (isFromTierList) {
    return (
      <Link href="/tier-list" className={className}>
        ← Назад к тир-листу
      </Link>
    );
  } else if (isFromLightCone && lightConeId) {
    return (
      <Link href={`/light-cone/${lightConeId}`} className={className}>
        ← Назад к световому конусу
      </Link>
    );
  } else {
    return (
      <Link href="/characters" className={className}>
        ← Назад к списку персонажей
      </Link>
    );
  }
} 