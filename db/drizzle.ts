import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { accounts } from './schema';

const getSql = () => {
    const url = process.env.DATABASE_URL;
    if (!url) {
        // Return a dummy function that throws only when called
        return (() => {
            throw new Error("DATABASE_URL is not set");
        }) as any;
    }
    return neon(url);
};

export const sql = getSql();
export const db = drizzle(sql);