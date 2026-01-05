// Navigation utilities for the Spotify-themed website

export const pages = [
    { name: 'Home', link: '', category: 'all' },
    { name: 'Coding', link: 'coding', category: 'albums' },
    { name: 'Triathlon', link: 'triathlon', category: 'artists' },
    { name: 'Writing', link: 'writing', category: 'artists' },
    { name: 'Photography', link: 'photography', category: 'albums' },
    { name: 'Projects', link: 'projects', category: 'albums' },
    { name: 'Now', link: 'now', category: 'artists' }
];

export function getRandomPage(currentPath: string): string {
    const availablePages = pages.filter(p => `/${p.link}` !== currentPath && p.link !== '');
    const randomPage = availablePages[Math.floor(Math.random() * availablePages.length)];
    return `/${randomPage.link}`;
}

export function smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Favorites management using localStorage
export function toggleFavorite(pageName: string): boolean {
    if (typeof window === 'undefined') return false;
    
    const favorites = getFavorites();
    const index = favorites.indexOf(pageName);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(pageName);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return index === -1; // Return true if now favorited
}

export function isFavorite(pageName: string): boolean {
    if (typeof window === 'undefined') return false;
    return getFavorites().includes(pageName);
}

export function getFavorites(): string[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
}

// Share functionality
export async function sharePage(title: string, url: string) {
    if (navigator.share) {
        try {
            await navigator.share({ title, url });
            return true;
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(url);
        return true;
    }
    return false;
}

