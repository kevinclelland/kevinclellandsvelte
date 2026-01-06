<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    import { onMount } from 'svelte';

    type PhotoCategory = 'Landscapes' | 'Portraits' | 'Urban' | 'Nature' | 'Abstract' | 'Sports' | 'Events';
    type ViewMode = 'grid' | 'masonry' | 'single';
    type Camera = 'Canon EOS R6' | 'Sony A7III' | 'iPhone 14 Pro' | 'Nikon D80' | 'Nikon D7100';

    interface PhotoExif {
        camera: Camera;
        iso?: string;
        aperture?: string;
        shutter?: string;
        focalLength?: string;
    }

    interface Photo {
        location: string;
        title?: string;
        year: string;
        category: PhotoCategory;
        collection?: string;
        exif?: PhotoExif;
        isFeatured?: boolean;
    }

    let photos: Photo[] = [
        {location: "/gallery/1.webp", title: "Drakensberg", year: "2009", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Nikon D80", iso: "100", aperture: "f/3.5", shutter: "15s", focalLength: "18mm"}, isFeatured: true},
        {location: "/gallery/2.webp", title: "Dudley Pringle Lightning", year: "2019", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Nikon D7100", iso: "400", aperture: "f/8", shutter: "20s", focalLength: "27mm"}},
        {location: "/gallery/3.webp", title: "Pringle Cane Fire", year: "2007", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Nikon D80", iso: "800", aperture: "f/5.6", shutter: "1/40", focalLength: "135mm"}},
        {location: "/gallery/4.webp", title: "Mountain Majesty", year: "2009", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Nikon D80", iso: "200", aperture: "f/22", shutter: "1/50", focalLength: "24mm"}, isFeatured: true},
        {location: "/gallery/5.webp", title: "Abstract Forms", year: "2023", category: "Abstract", exif: {camera: "iPhone 14 Pro", iso: "320", aperture: "f/1.8", shutter: "1/60", focalLength: "26mm"}},
        {location: "/gallery/6.webp", title: "Kids Bug Hunt", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "1600", aperture: "f/5.6", shutter: "1/1000", focalLength: "200mm"}},
        {location: "/gallery/7.webp", title: "City Lights", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "Sony A7III", iso: "3200", aperture: "f/2.8", shutter: "1/30", focalLength: "50mm"}},
        {location: "/gallery/8.webp", title: "Hole in the Wall", year: "2024", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "800", aperture: "f/4", shutter: "1/2000", focalLength: "70mm"}, isFeatured: true},
        {location: "/gallery/9.webp", title: "Sunset Silhouette", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "iPhone 14 Pro", iso: "50", aperture: "f/1.8", shutter: "1/120", focalLength: "26mm"}},
        {location: "/gallery/10.webp", title: "Lake Garda", year: "2024", category: "Urban", exif: {camera: "Sony A7III", iso: "400", aperture: "f/8", shutter: "1/250", focalLength: "35mm"}},
        {location: "/gallery/11.webp", title: "Natural Patterns", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "Canon EOS R6", iso: "200", aperture: "f/5.6", shutter: "1/250", focalLength: "50mm"}},
        {location: "/gallery/12.webp", title: "Egyptian Geese", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "100", aperture: "f/11", shutter: "1/500", focalLength: "24mm"}},
        {location: "/gallery/13.webp", title: "Street Portrait", year: "2023", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "640", aperture: "f/2.8", shutter: "1/160", focalLength: "85mm"}},
        {location: "/gallery/14.webp", title: "Forest Path", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Sony A7III", iso: "400", aperture: "f/4", shutter: "1/125", focalLength: "35mm"}},
        {location: "/gallery/15.webp", title: "Urban Geometry", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "iPhone 14 Pro", iso: "125", aperture: "f/1.8", shutter: "1/250", focalLength: "26mm"}},
        {location: "/gallery/16.webp", title: "Action Shot", year: "2024", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "1600", aperture: "f/4", shutter: "1/2500", focalLength: "150mm"}},
        {location: "/gallery/17.webp", title: "Misty Morning", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "200", aperture: "f/8", shutter: "1/250", focalLength: "35mm"}},
        {location: "/gallery/18.webp", title: "Event Moment", year: "2024", category: "Events", exif: {camera: "Canon EOS R6", iso: "2000", aperture: "f/2.8", shutter: "1/125", focalLength: "50mm"}},
        {location: "/gallery/19.webp", title: "Abstract Colors", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "iPhone 14 Pro", iso: "80", aperture: "f/1.8", shutter: "1/120", focalLength: "26mm"}},
        {location: "/gallery/20.webp", title: "Wildlife Close-up", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "1000", aperture: "f/5.6", shutter: "1/500", focalLength: "200mm"}, isFeatured: true},
        {location: "/gallery/21.webp", title: "Night City", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "Sony A7III", iso: "6400", aperture: "f/2.8", shutter: "1/60", focalLength: "35mm"}},
        {location: "/gallery/22.webp", title: "Portrait Light", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "400", aperture: "f/1.8", shutter: "1/200", focalLength: "85mm"}},
        {location: "/gallery/23.webp", title: "Mountain Vista", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "100", aperture: "f/11", shutter: "1/250", focalLength: "24mm"}},
        {location: "/gallery/24.webp", title: "Competition Day", year: "2024", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "800", aperture: "f/4", shutter: "1/1600", focalLength: "100mm"}},
        {location: "/gallery/27.webp", title: "Reflections", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "iPhone 14 Pro", iso: "100", aperture: "f/1.8", shutter: "1/125", focalLength: "26mm"}},
        {location: "/gallery/29.webp", title: "Nature's Detail", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "400", aperture: "f/5.6", shutter: "1/320", focalLength: "100mm"}},
        {location: "/gallery/30.webp", title: "City Streets", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "Sony A7III", iso: "800", aperture: "f/4", shutter: "1/250", focalLength: "35mm"}},
        {location: "/gallery/31.webp", title: "Golden Light", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Canon EOS R6", iso: "200", aperture: "f/8", shutter: "1/320", focalLength: "50mm"}},
        {location: "/gallery/32.webp", title: "Celebration", year: "2023", category: "Events", exif: {camera: "Sony A7III", iso: "1600", aperture: "f/2.8", shutter: "1/125", focalLength: "35mm"}},
        {location: "/gallery/33.webp", title: "Portrait Series", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "640", aperture: "f/2.8", shutter: "1/160", focalLength: "85mm"}},
        {location: "/gallery/34.webp", title: "Texture Study", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "iPhone 14 Pro", iso: "64", aperture: "f/1.8", shutter: "1/100", focalLength: "26mm"}},
        {location: "/gallery/35.webp", title: "Coastal Beauty", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "100", aperture: "f/11", shutter: "1/500", focalLength: "28mm"}, isFeatured: true},
        {location: "/gallery/36.webp", title: "Wildlife Habitat", year: "2023", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "800", aperture: "f/5.6", shutter: "1/640", focalLength: "200mm"}},
        {location: "/gallery/37.webp", title: "Urban Architecture", year: "2024", category: "Urban", collection: "City Life", exif: {camera: "Sony A7III", iso: "400", aperture: "f/8", shutter: "1/250", focalLength: "24mm"}},
        {location: "/gallery/38.webp", title: "Athletic Moment", year: "2023", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "1250", aperture: "f/4", shutter: "1/2000", focalLength: "120mm"}},
        {location: "/gallery/39.webp", title: "Sunset Colors", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "iPhone 14 Pro", iso: "50", aperture: "f/1.8", shutter: "1/150", focalLength: "26mm"}},
        {location: "/gallery/40.webp", title: "Natural Forms", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "Sony A7III", iso: "200", aperture: "f/5.6", shutter: "1/200", focalLength: "50mm"}},
        {location: "/gallery/41.webp", title: "Portrait Expression", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "800", aperture: "f/2.8", shutter: "1/160", focalLength: "85mm"}},
        {location: "/gallery/42.webp", title: "Mountain Range", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "100", aperture: "f/11", shutter: "1/320", focalLength: "35mm"}},
        {location: "/gallery/43.webp", title: "Nature Close", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "640", aperture: "f/5.6", shutter: "1/400", focalLength: "100mm"}},
        {location: "/gallery/44.webp", title: "City Life", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "iPhone 14 Pro", iso: "250", aperture: "f/1.8", shutter: "1/120", focalLength: "26mm"}},
        {location: "/gallery/45.webp", title: "Event Coverage", year: "2024", category: "Events", exif: {camera: "Sony A7III", iso: "2000", aperture: "f/2.8", shutter: "1/100", focalLength: "35mm"}},
        {location: "/gallery/46.webp", title: "Sports Action", year: "2023", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "1600", aperture: "f/4", shutter: "1/2500", focalLength: "200mm"}},
        {location: "/gallery/47.webp", title: "Abstract Vision", year: "2024", category: "Abstract", collection: "Patterns", exif: {camera: "Sony A7III", iso: "400", aperture: "f/5.6", shutter: "1/250", focalLength: "50mm"}},
        {location: "/gallery/48.webp", title: "Landscape Vista", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Canon EOS R6", iso: "200", aperture: "f/8", shutter: "1/400", focalLength: "35mm"}},
        {location: "/gallery/49.webp", title: "Portrait Session", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "640", aperture: "f/2.8", shutter: "1/125", focalLength: "85mm"}},
        {location: "/gallery/50.webp", title: "Nature Detail", year: "2023", category: "Nature", collection: "Wildlife", exif: {camera: "Sony A7III", iso: "800", aperture: "f/5.6", shutter: "1/500", focalLength: "100mm"}},
        {location: "/gallery/51.webp", title: "Urban Scene", year: "2024", category: "Urban", collection: "City Life", exif: {camera: "iPhone 14 Pro", iso: "320", aperture: "f/1.8", shutter: "1/125", focalLength: "26mm"}},
        {location: "/gallery/52.webp", title: "Mountain Peak", year: "2023", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Canon EOS R6", iso: "100", aperture: "f/11", shutter: "1/500", focalLength: "24mm"}},
        {location: "/gallery/54.webp", title: "Pattern Discovery", year: "2024", category: "Abstract", collection: "Patterns", exif: {camera: "Sony A7III", iso: "200", aperture: "f/5.6", shutter: "1/200", focalLength: "50mm"}},
        {location: "/gallery/55.webp", title: "Wildlife Portrait", year: "2023", category: "Nature", collection: "Wildlife", exif: {camera: "Canon EOS R6", iso: "1000", aperture: "f/5.6", shutter: "1/800", focalLength: "200mm"}},
        {location: "/gallery/57.webp", title: "City Architecture", year: "2024", category: "Urban", collection: "City Life", exif: {camera: "Sony A7III", iso: "400", aperture: "f/8", shutter: "1/320", focalLength: "35mm"}},
        {location: "/gallery/58.webp", title: "Sports Capture", year: "2023", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "1250", aperture: "f/4", shutter: "1/2000", focalLength: "150mm"}},
        {location: "/gallery/59.webp", title: "Scenic View", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "100", aperture: "f/11", shutter: "1/250", focalLength: "28mm"}},
        {location: "/gallery/60.webp", title: "Event Memory", year: "2023", category: "Events", exif: {camera: "Canon EOS R6", iso: "1600", aperture: "f/2.8", shutter: "1/125", focalLength: "50mm"}},
        {location: "/gallery/61.webp", title: "Portrait Study", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "800", aperture: "f/2.8", shutter: "1/160", focalLength: "85mm"}},
        {location: "/gallery/62.webp", title: "Abstract Design", year: "2023", category: "Abstract", collection: "Patterns", exif: {camera: "iPhone 14 Pro", iso: "100", aperture: "f/1.8", shutter: "1/120", focalLength: "26mm"}},
        {location: "/gallery/63.webp", title: "Nature Scene", year: "2024", category: "Nature", collection: "Wildlife", exif: {camera: "Sony A7III", iso: "640", aperture: "f/5.6", shutter: "1/400", focalLength: "100mm"}},
        {location: "/gallery/64.webp", title: "Urban Perspective", year: "2023", category: "Urban", collection: "City Life", exif: {camera: "Canon EOS R6", iso: "400", aperture: "f/8", shutter: "1/250", focalLength: "35mm"}},
        {location: "/gallery/65.webp", title: "Landscape Beauty", year: "2024", category: "Landscapes", collection: "Nature's Canvas", exif: {camera: "Sony A7III", iso: "200", aperture: "f/8", shutter: "1/320", focalLength: "35mm"}},
        {location: "/gallery/66.webp", title: "Action Sports", year: "2023", category: "Sports", collection: "In Motion", exif: {camera: "Canon EOS R6", iso: "1600", aperture: "f/4", shutter: "1/2500", focalLength: "200mm"}},
        {location: "/gallery/67.webp", title: "Final Frame", year: "2024", category: "Portraits", collection: "Human Stories", exif: {camera: "Canon EOS R6", iso: "640", aperture: "f/2.8", shutter: "1/160", focalLength: "85mm"}},
    ];

    // Favorites stored in localStorage
    let favorites: string[] = [];

    onMount(() => {
        const stored = localStorage.getItem('photo-favorites');
        if (stored) {
            favorites = JSON.parse(stored);
        }
    });

    function toggleFavorite(location: string) {
        if (favorites.includes(location)) {
            favorites = favorites.filter(f => f !== location);
        } else {
            favorites = [...favorites, location];
        }
        localStorage.setItem('photo-favorites', JSON.stringify(favorites));
    }

    // Stats
    $: stats = {
        total: photos.length,
        landscapes: photos.filter(p => p.category === 'Landscapes').length,
        portraits: photos.filter(p => p.category === 'Portraits').length,
        urban: photos.filter(p => p.category === 'Urban').length,
        nature: photos.filter(p => p.category === 'Nature').length,
        sports: photos.filter(p => p.category === 'Sports').length,
        featured: photos.filter(p => p.isFeatured).length,
        collections: [...new Set(photos.map(p => p.collection).filter(Boolean))].length,
    };

    // All unique collections
    $: allCollections = ['All', ...new Set(photos.map(p => p.collection).filter(Boolean))].sort();

    // Filter and sort
    let selectedCategory: PhotoCategory | 'All' | 'Favorites' = 'All';
    let selectedCollection: string = 'All';
    let selectedYear: string = 'All';
    let sortBy: 'newest' | 'oldest' | 'random' = 'newest';
    let viewMode: ViewMode = 'grid';

    // Available years
    $: availableYears = ['All', ...new Set(photos.map(p => p.year))].sort().reverse();

    // Filtered photos
    $: filteredPhotos = photos
        .filter(photo => {
            const matchesCategory = selectedCategory === 'All' || 
                                   (selectedCategory === 'Favorites' && favorites.includes(photo.location)) ||
                                   photo.category === selectedCategory;
            const matchesCollection = selectedCollection === 'All' || photo.collection === selectedCollection;
            const matchesYear = selectedYear === 'All' || photo.year === selectedYear;
            return matchesCategory && matchesCollection && matchesYear;
        })
        .sort((a, b) => {
            if (sortBy === 'newest') return parseInt(b.year) - parseInt(a.year);
            if (sortBy === 'oldest') return parseInt(a.year) - parseInt(b.year);
            if (sortBy === 'random') return Math.random() - 0.5;
            return 0;
        });

    // Lightbox state
    let selectedPhotoIndex: number | null = null;
    let showExif = false;

    function openLightbox(index: number) {
        selectedPhotoIndex = index;
        showExif = false;
    }

    function closeLightbox() {
        selectedPhotoIndex = null;
        showExif = false;
    }

    function nextPhoto() {
        if (selectedPhotoIndex !== null && selectedPhotoIndex < filteredPhotos.length - 1) {
            selectedPhotoIndex++;
        }
    }

    function prevPhoto() {
        if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
            selectedPhotoIndex--;
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (selectedPhotoIndex === null) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    }

    function getCategoryIcon(category: PhotoCategory): string {
        const icons: Record<PhotoCategory, string> = {
            'Landscapes': '🌅',
            'Portraits': '📸',
            'Urban': '🏙️',
            'Nature': '🦜',
            'Abstract': '🎨',
            'Sports': '🏃',
            'Events': '🎭'
        };
        return icons[category];
    }

    function getCategoryColor(category: PhotoCategory): string {
        const colors: Record<PhotoCategory, string> = {
            'Landscapes': 'variant-filled-primary',
            'Portraits': 'variant-filled-secondary',
            'Urban': 'variant-filled-tertiary',
            'Nature': 'variant-filled-success',
            'Abstract': 'variant-filled-warning',
            'Sports': 'variant-filled-error',
            'Events': 'variant-filled-surface'
        };
        return colors[category];
    }

    function sharePhoto(photo: Photo) {
        if (navigator.share) {
            navigator.share({
                title: photo.title || 'Photo',
                text: `Check out this photo: ${photo.title}`,
                url: window.location.href
            });
        }
    }

    function downloadPhoto(photo: Photo) {
        const a = document.createElement('a');
        a.href = photo.location;
        a.download = photo.title || 'photo';
        a.click();
    }

    $: selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

    // Lazy loading tracking
    let visibleCount = 20;

    // Svelte action for load more observer
    function loadMoreAction(node: HTMLElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && visibleCount < filteredPhotos.length) {
                    visibleCount = Math.min(visibleCount + 20, filteredPhotos.length);
                }
            });
        });

        observer.observe(node);

        return {
            destroy() {
                observer.disconnect();
            }
        };
    }

    // Reset visible count when filters change
    $: if (selectedCategory || selectedCollection || selectedYear || sortBy) {
        visibleCount = 20;
    }

</script>

<svelte:window on:keydown={handleKeydown} />
    
<div class="mx-auto grid grid-cols-1 gap-4 p-4">

    <div class="col-span-3 card overflow-hidden">
        <header>
            <div class="relative">
                <img src="/coverphotography.webp" alt="Photography cover - camera and landscape" loading="lazy" />
                <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100">
                    <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                    <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p>
                </button>
                <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Photography</h1>
                <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">{stats.total} photos - 3 cameras - 20 years</h3>
            </div>
            <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2">
                <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p>
            </button>
            <h1 class="sm:hidden font-bold text-5xl text-white px-2">Photography</h1>
            <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">{stats.total} photos</h3>
        </header>

        <Play 
            pageName="Photography" 
            featuredLink={photos[0].location}
            playAction="scroll"
        />

        <!-- Stats Summary -->
        <div class="p-4">
            <h3 class="h3 font-semibold mb-4">Gallery Stats</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">📷</div>
                    <div class="text-2xl font-bold text-primary-500">{stats.total}</div>
                    <div class="text-xs opacity-75">Total Photos</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">🌅</div>
                    <div class="text-2xl font-bold text-primary-500">{stats.landscapes}</div>
                    <div class="text-xs opacity-75">Landscapes</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">📸</div>
                    <div class="text-2xl font-bold text-secondary-500">{stats.portraits}</div>
                    <div class="text-xs opacity-75">Portraits</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">🏙️</div>
                    <div class="text-2xl font-bold text-tertiary-500">{stats.urban}</div>
                    <div class="text-xs opacity-75">Urban</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">🦜</div>
                    <div class="text-2xl font-bold text-success-500">{stats.nature}</div>
                    <div class="text-xs opacity-75">Nature</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">⭐</div>
                    <div class="text-2xl font-bold text-warning-500">{stats.featured}</div>
                    <div class="text-xs opacity-75">Featured</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">📚</div>
                    <div class="text-2xl font-bold text-error-500">{stats.collections}</div>
                    <div class="text-xs opacity-75">Collections</div>
                </div>
            </div>
        </div>

        <!-- Filters and View Controls -->
        <div class="p-4 border-t border-surface-500">
            <h3 class="h3 font-semibold mb-4">Browse Gallery</h3>
            
            <!-- View Mode Toggle -->
            <div class="mb-4 flex items-center gap-2">
                <span class="text-sm opacity-75">View:</span>
                <button
                    class="btn btn-sm {viewMode === 'grid' ? 'variant-filled-primary' : 'variant-soft-surface'}"
                    on:click={() => viewMode = 'grid'}
                    aria-label="Grid view"
                >
                    <i class="material-icons text-sm">grid_view</i>
                </button>
                <button
                    class="btn btn-sm {viewMode === 'masonry' ? 'variant-filled-primary' : 'variant-soft-surface'}"
                    on:click={() => viewMode = 'masonry'}
                    aria-label="Masonry view"
                >
                    <i class="material-icons text-sm">view_module</i>
                </button>
                <button
                    class="btn btn-sm {viewMode === 'single' ? 'variant-filled-primary' : 'variant-soft-surface'}"
                    on:click={() => viewMode = 'single'}
                    aria-label="Single column view"
                >
                    <i class="material-icons text-sm">view_stream</i>
                </button>
            </div>

            <!-- Filters -->
            <div class="flex flex-wrap gap-4 items-center">
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Category:
                        <select class="select w-auto ml-2" bind:value={selectedCategory}>
                            <option value="All">All Categories</option>
                            <option value="Favorites">⭐ Favorites ({favorites.length})</option>
                            <option value="Landscapes">🌅 Landscapes</option>
                            <option value="Portraits">📸 Portraits</option>
                            <option value="Urban">🏙️ Urban</option>
                            <option value="Nature">🦜 Nature</option>
                            <option value="Abstract">🎨 Abstract</option>
                            <option value="Sports">🏃 Sports</option>
                            <option value="Events">🎭 Events</option>
                        </select>
                    </label>
                </div>
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Collection:
                        <select class="select w-auto ml-2" bind:value={selectedCollection}>
                            {#each allCollections as collection}
                            <option value={collection}>{collection}</option>
                            {/each}
                        </select>
                    </label>
                </div>
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Year:
                        <select class="select w-auto ml-2" bind:value={selectedYear}>
                            {#each availableYears as year}
                            <option value={year}>{year}</option>
                            {/each}
                        </select>
                    </label>
                </div>
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Sort:
                        <select class="select w-auto ml-2" bind:value={sortBy}>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="random">Shuffle</option>
                        </select>
                    </label>
                </div>
                <div class="flex-1"></div>
                <div class="text-sm opacity-75">
                    Showing {Math.min(visibleCount, filteredPhotos.length)} of {filteredPhotos.length}
                </div>
            </div>
        </div>

        <!-- Photo Gallery -->
        <div class="p-4">
            {#if viewMode === 'grid'}
            <!-- Grid View -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {#each filteredPhotos.slice(0, visibleCount) as photo, index (photo.location)}
                <button
                    class="relative group card card-hover overflow-hidden cursor-pointer aspect-square"
                    on:click={() => openLightbox(index)}
                    aria-label="View {photo.title || 'photo'}"
                >
                    <img
                        src={photo.location}
                        alt={photo.title || `Gallery photo ${index + 1}`}
                        loading="lazy"
                        class="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="absolute bottom-0 left-0 right-0 p-3">
                            <p class="text-white font-bold text-sm">{photo.title || 'Untitled'}</p>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="badge {getCategoryColor(photo.category)} text-xs">
                                    {getCategoryIcon(photo.category)} {photo.category}
                                </span>
                                <span class="badge variant-soft-surface text-xs">{photo.year}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        class="absolute top-2 right-2 btn-icon btn-icon-sm variant-filled-surface opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        on:click|stopPropagation={() => toggleFavorite(photo.location)}
                        aria-label="Toggle favorite"
                    >
                        <i class="material-icons text-sm">{favorites.includes(photo.location) ? 'favorite' : 'favorite_border'}</i>
                    </button>
                    {#if photo.isFeatured}
                    <div class="absolute top-2 left-2 badge variant-filled-warning text-xs">
                        <i class="material-icons text-xs">star</i>
                    </div>
                    {/if}
                </button>
                {/each}
            </div>
            {:else if viewMode === 'masonry'}
            <!-- Masonry View -->
            <div class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
                {#each filteredPhotos.slice(0, visibleCount) as photo, index (photo.location)}
                <button
                    class="relative group mb-3 break-inside-avoid card card-hover overflow-hidden cursor-pointer block w-full"
                    on:click={() => openLightbox(index)}
                    aria-label="View {photo.title || 'photo'}"
                >
                    <img
                        src={photo.location}
                        alt={photo.title || `Gallery photo ${index + 1}`}
                        loading="lazy"
                        class="w-full transition-transform group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="absolute bottom-0 left-0 right-0 p-3">
                            <p class="text-white font-bold text-sm">{photo.title || 'Untitled'}</p>
                        </div>
                    </div>
                    <button
                        class="absolute top-2 right-2 btn-icon btn-icon-sm variant-filled-surface opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        on:click|stopPropagation={() => toggleFavorite(photo.location)}
                        aria-label="Toggle favorite"
                    >
                        <i class="material-icons text-sm">{favorites.includes(photo.location) ? 'favorite' : 'favorite_border'}</i>
                    </button>
                </button>
                {/each}
            </div>
            {:else if viewMode === 'single'}
            <!-- Single Column View -->
            <div class="max-w-4xl mx-auto space-y-6">
                {#each filteredPhotos.slice(0, visibleCount) as photo, index (photo.location)}
                <button
                    class="relative group card card-hover overflow-hidden cursor-pointer w-full block"
                    on:click={() => openLightbox(index)}
                    aria-label="View {photo.title || 'photo'}"
                >
                    <img
                        src={photo.location}
                        alt={photo.title || `Gallery photo ${index + 1}`}
                        loading="lazy"
                        class="w-full transition-transform group-hover:scale-105"
                    />
                    <div class="p-4 bg-surface-100-800-token">
                        <h4 class="h4 font-bold mb-2">{photo.title || 'Untitled'}</h4>
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="badge {getCategoryColor(photo.category)}">
                                {getCategoryIcon(photo.category)} {photo.category}
                            </span>
                            <span class="badge variant-soft-surface">{photo.year}</span>
                            {#if photo.collection}
                            <span class="badge variant-soft-primary">{photo.collection}</span>
                            {/if}
                            {#if photo.exif}
                            <span class="badge variant-soft-surface text-xs">{photo.exif.camera}</span>
                            {/if}
                        </div>
                    </div>
                    <button
                        class="absolute top-4 right-4 btn-icon variant-filled-surface opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        on:click|stopPropagation={() => toggleFavorite(photo.location)}
                        aria-label="Toggle favorite"
                    >
                        <i class="material-icons">{favorites.includes(photo.location) ? 'favorite' : 'favorite_border'}</i>
                    </button>
                </button>
                {/each}
            </div>
            {/if}

            <!-- Load More Trigger -->
            {#if visibleCount < filteredPhotos.length}
            <div class="mt-8 text-center" use:loadMoreAction>
                <button class="btn variant-filled-primary" on:click={() => visibleCount = Math.min(visibleCount + 20, filteredPhotos.length)}>
                    Load More ({filteredPhotos.length - visibleCount} remaining)
                </button>
            </div>
            {/if}

            {#if filteredPhotos.length === 0}
            <div class="p-8 text-center opacity-50">
                <i class="material-icons text-6xl mb-4">photo_library</i>
                <p>No photos found matching your filters</p>
                <button class="btn variant-filled-primary mt-4" on:click={() => {selectedCategory = 'All'; selectedCollection = 'All'; selectedYear = 'All';}}>
                    Clear Filters
                </button>
            </div>
            {/if}
        </div>

    </div>
</div>

<!-- Lightbox Modal -->
{#if selectedPhoto && selectedPhotoIndex !== null}
<div
    class="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
    on:click|self={closeLightbox}
    on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="lightbox-title"
    tabindex="-1"
>
    <!-- Close Button -->
    <button
        class="btn-icon variant-filled-surface absolute top-4 right-4 z-10"
        on:click={closeLightbox}
        aria-label="Close lightbox"
    >
        <i class="material-icons">close</i>
    </button>

    <!-- Previous Button -->
    {#if selectedPhotoIndex > 0}
    <button
        class="btn-icon variant-filled-surface absolute left-4 top-1/2 -translate-y-1/2 z-10"
        on:click={prevPhoto}
        aria-label="Previous photo"
    >
        <i class="material-icons">chevron_left</i>
    </button>
    {/if}

    <!-- Next Button -->
    {#if selectedPhotoIndex < filteredPhotos.length - 1}
    <button
        class="btn-icon variant-filled-surface absolute right-4 top-1/2 -translate-y-1/2 z-10"
        on:click={nextPhoto}
        aria-label="Next photo"
    >
        <i class="material-icons">chevron_right</i>
    </button>
    {/if}

    <!-- Image -->
    <div class="flex flex-col items-center justify-center max-w-7xl max-h-screen p-4">
        <img
            src={selectedPhoto.location}
            alt={selectedPhoto.title || 'Gallery photo'}
            class="max-w-full max-h-[70vh] object-contain"
        />
        
        <!-- Photo Info -->
        <div class="card p-4 mt-4 max-w-3xl w-full">
            <div class="flex items-start justify-between gap-4 mb-3">
                <div class="flex-1">
                    <h2 id="lightbox-title" class="h3 font-bold mb-2">{selectedPhoto.title || 'Untitled'}</h2>
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="badge {getCategoryColor(selectedPhoto.category)}">
                            {getCategoryIcon(selectedPhoto.category)} {selectedPhoto.category}
                        </span>
                        <span class="badge variant-soft-surface">{selectedPhoto.year}</span>
                        {#if selectedPhoto.collection}
                        <span class="badge variant-soft-primary">{selectedPhoto.collection}</span>
                        {/if}
                        {#if selectedPhoto.isFeatured}
                        <span class="badge variant-filled-warning">
                            <i class="material-icons text-xs">star</i> Featured
                        </span>
                        {/if}
                    </div>
                </div>
                <div class="text-sm opacity-75">
                    {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </div>
            </div>

            <!-- EXIF Data -->
            {#if selectedPhoto.exif}
            <div class="mb-3">
                <button
                    class="btn btn-sm variant-soft-surface w-full"
                    on:click={() => showExif = !showExif}
                >
                    <i class="material-icons text-sm mr-2">camera</i>
                    {showExif ? 'Hide' : 'Show'} Camera Details
                </button>
                {#if showExif}
                <div class="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
                    <div class="card p-2 text-center">
                        <div class="text-xs opacity-75">Camera</div>
                        <div class="font-bold text-sm">{selectedPhoto.exif.camera}</div>
                    </div>
                    {#if selectedPhoto.exif.iso}
                    <div class="card p-2 text-center">
                        <div class="text-xs opacity-75">ISO</div>
                        <div class="font-bold text-sm">{selectedPhoto.exif.iso}</div>
                    </div>
                    {/if}
                    {#if selectedPhoto.exif.aperture}
                    <div class="card p-2 text-center">
                        <div class="text-xs opacity-75">Aperture</div>
                        <div class="font-bold text-sm">{selectedPhoto.exif.aperture}</div>
                    </div>
                    {/if}
                    {#if selectedPhoto.exif.shutter}
                    <div class="card p-2 text-center">
                        <div class="text-xs opacity-75">Shutter</div>
                        <div class="font-bold text-sm">{selectedPhoto.exif.shutter}</div>
                    </div>
                    {/if}
                    {#if selectedPhoto.exif.focalLength}
                    <div class="card p-2 text-center">
                        <div class="text-xs opacity-75">Focal Length</div>
                        <div class="font-bold text-sm">{selectedPhoto.exif.focalLength}</div>
                    </div>
                    {/if}
                </div>
                {/if}
            </div>
            {/if}

            <!-- Actions -->
            <div class="flex flex-wrap gap-2">
                <button
                    class="btn variant-filled-primary flex-1"
                    on:click={() => toggleFavorite(selectedPhoto.location)}
                >
                    <i class="material-icons mr-2">{favorites.includes(selectedPhoto.location) ? 'favorite' : 'favorite_border'}</i>
                    {favorites.includes(selectedPhoto.location) ? 'Remove from' : 'Add to'} Favorites
                </button>
                <button
                    class="btn variant-soft-surface"
                    on:click={() => sharePhoto(selectedPhoto)}
                >
                    <i class="material-icons">share</i>
                </button>
                <button
                    class="btn variant-soft-surface"
                    on:click={() => downloadPhoto(selectedPhoto)}
                >
                    <i class="material-icons">download</i>
                </button>
            </div>
        </div>
    </div>
</div>
{/if}