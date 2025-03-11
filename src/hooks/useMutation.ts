import { useState, useEffect, useCallback } from 'react';
interface MutationOptions extends RequestInit { }

// Hook for POST, PUT, DELETE requests
export const useMutation = <T>() => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const mutate = async (param: string, method: 'POST' | 'PUT' | 'DELETE', body: unknown = {}, options: MutationOptions = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://89.116.121.214:5000/api/v1/${param}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {}),
                },
                body: JSON.stringify(body),
                ...options,
            });
            const result: T = await response.json();
            if (!response.ok) {
                throw new Error(result as unknown as string || 'Something went wrong');
            }
            setData(result);
            return result;
        } catch (err) {
            setError((err as Error).message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, mutate };
};
