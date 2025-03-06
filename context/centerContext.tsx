"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
interface DayPassDiscount {
  value: number;
  message: string;
}

interface CenterData {
  id: string;
  name: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: DayPassDiscount;
  };
}

interface CenterContextType {
  centerData: CenterData[];
  setCenterData: (data: CenterData[]) => void;
  loading: boolean;
}

const CenterContext = createContext<CenterContextType | undefined>(undefined);

export function CenterProvider({ children }: { children: ReactNode }) {
  const [centerData, setCenterData] = useState<CenterData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch('/api/centers'); // You'll need to create this API endpoint
        const data = await response.json();
        setCenterData(data);
      } catch (error) {
        console.error('Error fetching center data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  return (
    <CenterContext.Provider value={{ centerData, setCenterData, loading }}>
      {children}
    </CenterContext.Provider>
  );
}

export function useCenter() {
  const context = useContext(CenterContext);
  if (context === undefined) {
    throw new Error('useCenter must be used within a CenterProvider');
  }
  return context;
} 