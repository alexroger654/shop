import { useState, useEffect, useCallback } from 'react';

interface FetchOptions extends RequestInit { }


// Hook for GET requests
export const useQuery = <T>(param: string, options: FetchOptions = {}) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://89.116.121.214:5000/api/v1/${param}`, { ...options, method: 'GET' });
            const result: T = await response.json();
            if (!response.ok) {
                throw new Error(result as unknown as string || 'Something went wrong');
            }
            setData(result);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [param, options]);

    useEffect(() => {
        fetchData();
    }, [param]);

    return { data, error, loading, refetch: fetchData };
};