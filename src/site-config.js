const DEFAULT_SITE_URL = 'https://blog.openviking.ai';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
