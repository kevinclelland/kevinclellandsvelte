<script lang="ts">
    import Play from "$lib/components/Play.svelte";

    type RaceType = 'Ironman' | '70.3' | 'Olympic' | 'Sprint' | '10km' | '21km' | 'Trail' | 'Duathlon';

    interface Race {
        racedate: string;
        racelogo: string;
        racename: string;
        raceresult: string;
        racetime: string;
        racetype: RaceType;
    }

    let races: Race[] = [
        {racedate: "19 Apr 2026", racelogo: "/703logo.jpg", racename: "Ironman South Africa", raceresult: "Upcoming", racetime: "Upcoming", racetype: "Ironman"},
        {racedate: "02 Jun 2024", racelogo: "/703logo.jpg", racename: "Durban 70.3", raceresult: "14th 40-44, 90th Overall", racetime: "05:14:55", racetype: "70.3"},
        {racedate: "21 Jan 2024", racelogo: "/otherlogo.jpg", racename: "KZN Tri Champs", raceresult: "5th 40-44, 29th Overall", racetime: "02:39:36", racetype: "Olympic"},
        {racedate: "19 Nov 2023", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "1st 34-39, 4th Overall", racetime: "00:49:30", racetype: "10km"},
        {racedate: "06 Aug 2023", racelogo: "/ultralogo.jpg", racename: "Durban Ultra Sprint", raceresult: "3rd 34-39, 13th Overall", racetime: "01:20:18", racetype: "Sprint"},
        {racedate: "12 Mar 2023", racelogo: "/tinmanlogo.jpg", racename: "Tinman Challenge", raceresult: "5th 34-39, 14th Overall", racetime: "02:26:15", racetype: "Olympic"},
        {racedate: "30 Oct 2022", racelogo: "/otherlogo.jpg", racename: "WWXTRI", raceresult: "1st 34-39, 1st Overall", racetime: "01:15:50", racetype: "Sprint"},
        {racedate: "02 Oct 2022", racelogo: "/703logo.jpg", racename: "Durban 70.3", raceresult: "11th 34-39, 64th Overall", racetime: "05:15:10", racetype: "70.3"},
        {racedate: "21 Aug 2022", racelogo: "/tinmanlogo.jpg", racename: "Tinman Challenge", raceresult: "4th 34-39, 15th Overall", racetime: "02:15:52", racetype: "Olympic"},
        {racedate: "20 Feb 2022", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "1st 34-39, 1st Overall", racetime: "00:39:35", racetype: "10km"},
        {racedate: "09 Jan 2022", racelogo: "/otherlogo.jpg", racename: "KZN Tri Champs", raceresult: "2nd 34-39, 24th Overall", racetime: "02:44:56", racetype: "Olympic"},
        {racedate: "06 Jun 2021", racelogo: "/703logo.jpg", racename: "Durban Half Ironman", raceresult: "18th 35-39, 82nd Overall", racetime: "05:20:15", racetype: "70.3"},
        {racedate: "16 Feb 2020", racelogo: "/tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "3rd 35-39, 19th Overall", racetime: "02:09:43", racetype: "Olympic"},
        {racedate: "19 Jan 2020", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "4th 35-39, 37th Overall", racetime: "02:28:01", racetype: "Olympic"},
        {racedate: "02 Jun 2019", racelogo: "/703logo.jpg", racename: "Durban Half Ironman", raceresult: "19th 35-39, 128th Overall", racetime: "05:01:20", racetype: "70.3"},
        {racedate: "14 Apr 2019", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "3rd Male, 3rd Overall", racetime: "00:39:35", racetype: "10km"},
        {racedate: "17 Mar 2019", racelogo: "/otherlogo.jpg", racename: "Deloitte 10km run", raceresult: "26th Male, 29th Overall", racetime: "00:40:42", racetype: "10km"},
        {racedate: "12 Aug 2018", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "8th Male, 10th Overall", racetime: "00:45:13 (spasm)", racetype: "10km"},
        {racedate: "04 Feb 2018", racelogo: "/otherlogo.jpg", racename: "226 Brick 21km Run", raceresult: "1st 30-34, 4th Overall", racetime: "01:40:29", racetype: "21km"},
        {racedate: "14 Jan 2018", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "2nd 30-34, 23rd Overall", racetime: "02:22:18", racetype: "Olympic"},
        {racedate: "08 Oct 2017", racelogo: "/otherlogo.jpg", racename: "FNB 10km Run", raceresult: "109th Open, 155th Overall", racetime: "00:42:04", racetype: "10km"},
        {racedate: "28 May 2017", racelogo: "/otherlogo.jpg", racename: "KZN Duathlon Champs", raceresult: "1st 30-34, 24th Overall", racetime: "02:21:34", racetype: "Duathlon"},
        {racedate: "19 Mar 2017", racelogo: "/otherlogo.jpg", racename: "SA Triathlon Champs", raceresult: "8th 30-34", racetime: "02:32:37", racetype: "Olympic"},
        {racedate: "05 Mar 2017", racelogo: "/ultralogo.jpg", racename: "Durban Ultra Sprint", raceresult: "2nd 24-39, 8th Overall", racetime: "01:04:28", racetype: "Sprint"},
        {racedate: "15 Jan 2017", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "2nd 30-34, 25th Overall", racetime: "02:25:09", racetype: "Olympic"},
        {racedate: "27 Nov 2016", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-34, 13th Overall", racetime: "01:13:58", racetype: "Sprint"},
        {racedate: "24 Oct 2016", racelogo: "/otherlogo.jpg", racename: "Golden Gate 3 Day Trail Run", raceresult: "43rd 30-39, 101st Overall", racetime: "13:06:30", racetype: "Trail"},
        {racedate: "17 Apr 2016", racelogo: "/tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "15th Overall", racetime: "01:48:38", racetype: "Olympic"},
        {racedate: "22 Mar 2016", racelogo: "/otherlogo.jpg", racename: "SA Triathlon Champs", raceresult: "10th 30-34, 51st Overall", racetime: "01:28:35", racetype: "Sprint"},
        {racedate: "06 Mar 2016", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-34, 4th Overall", racetime: "01:12:19", racetype: "Sprint"},
        {racedate: "21 Feb 2016", racelogo: "/tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "1st 30-34, 4th Overall", racetime: "01:46:41", racetype: "Olympic"},
        {racedate: "17 Jan 2016", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "1st 30-34, 8th Overall", racetime: "02:11:38", racetype: "Olympic"},
        {racedate: "29 Nov 2015", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-39, 9th Overall", racetime: "01:19:17", racetype: "Sprint"},
    ];

    // Separate upcoming and past races
    $: upcomingRaces = races.filter(r => r.raceresult === "Upcoming");
    $: pastRaces = races.filter(r => r.raceresult !== "Upcoming");

    // Calculate career stats
    $: stats = {
        totalRaces: pastRaces.length,
        firstPlaceOverall: pastRaces.filter(r => r.raceresult.includes("1st Overall")).length,
        firstPlaceAgeGroup: pastRaces.filter(r => r.raceresult.includes("1st") && !r.raceresult.includes("1st Overall")).length,
        halfIronmans: pastRaces.filter(r => r.racetype === "70.3").length,
        sub5Hour703: pastRaces.filter(r => r.racetype === "70.3" && r.racetime !== "Upcoming" && r.racetime < "05:00:00").length,
    };

    // Filter and sort functionality
    let selectedRaceType: RaceType | 'All' = 'All';
    let selectedYear: string = 'All';
    let sortBy: 'date' | 'time' | 'result' = 'date';

    $: availableYears = ['All', ...new Set(pastRaces.map(r => r.racedate.split(' ')[2]))].sort().reverse();

    $: filteredRaces = pastRaces
        .filter(r => selectedRaceType === 'All' || r.racetype === selectedRaceType)
        .filter(r => selectedYear === 'All' || r.racedate.includes(selectedYear))
        .sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.racedate).getTime() - new Date(a.racedate).getTime();
            }
            return 0;
        });

    function getRaceTypeBadgeColor(racetype: RaceType): string {
        const colors: Record<RaceType, string> = {
            'Ironman': 'variant-filled-error',
            '70.3': 'variant-filled-warning',
            'Olympic': 'variant-filled-primary',
            'Sprint': 'variant-filled-secondary',
            '10km': 'variant-filled-tertiary',
            '21km': 'variant-filled-success',
            'Trail': 'variant-soft-surface',
            'Duathlon': 'variant-soft-primary'
        };
        return colors[racetype] || 'variant-filled-surface';
    }

    function getRaceTypeIcon(racetype: RaceType): string {
        const icons: Record<RaceType, string> = {
            'Ironman': 'pool',
            '70.3': 'directions_bike',
            'Olympic': 'pool',
            'Sprint': 'bolt',
            '10km': 'directions_run',
            '21km': 'directions_run',
            'Trail': 'terrain',
            'Duathlon': 'directions_bike'
        };
        return icons[racetype] || 'emoji_events';
    }

    function isHighlight(result: string): boolean {
        return result.includes("1st Overall") || result.includes("1st 30-34") || result.includes("1st 34-39") || result.includes("1st 40-44");
    }
</script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">

    <div class="col-span-3 card card-hover overflow-hidden">
        <header>
            <div class="relative">
                <img src="/covertri.webp" alt="Triathlon cover - athlete at pool" loading="lazy" />
                <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100">
                    <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                    <p class="text-lg text-black font-semibold mx-2">Verified Age Grouper</p>
                </button>
                <h1 class="hidden sm:block absolute font-bold text-5xl text-black bottom-20 left-5">Triathlon</h1>
                <h3 class="hidden sm:block absolute text-lg font-semibold text-black bottom-12 left-5 opacity-75 mx-1">Since 2003</h3>
            </div>
            <button class="sm:hidden text-white px-2 flex items-center justify-start opacity-75 hover:opacity-100">
                <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                <p class="text-lg text-white font-semibold mx-2">Verified Age Grouper</p>
            </button>
            <h1 class="sm:hidden text-white px-2 font-bold text-5xl">Triathlon</h1>
            <h3 class="sm:hidden text-white px-2 text-lg font-semibold opacity-75 mx-1">Since 2003</h3>
        </header>

        <Play pageName="Triathlon" featuredLink="/covertri.webp" />

        <!-- Career Stats Summary -->
        <div class="p-4">
            <h3 class="h3 font-semibold mb-4">Career Stats</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="card p-4 text-center">
                    <div class="text-3xl font-bold text-primary-500">{stats.totalRaces}</div>
                    <div class="text-sm opacity-75">Total Races</div>
                </div>
                <div class="card p-4 text-center">
                    <div class="text-3xl font-bold text-warning-500">{stats.firstPlaceOverall}</div>
                    <div class="text-sm opacity-75">1st Overall</div>
                </div>
                <div class="card p-4 text-center">
                    <div class="text-3xl font-bold text-success-500">{stats.firstPlaceAgeGroup}</div>
                    <div class="text-sm opacity-75">Age Group Wins</div>
                </div>
                <div class="card p-4 text-center">
                    <div class="text-3xl font-bold text-error-500">{stats.halfIronmans}</div>
                    <div class="text-sm opacity-75">70.3 Races</div>
                </div>
                <div class="card p-4 text-center">
                    <div class="text-3xl font-bold text-tertiary-500">{stats.sub5Hour703}</div>
                    <div class="text-sm opacity-75">Sub-5hr 70.3s</div>
                </div>
            </div>
        </div>

        <!-- Upcoming Races -->
        {#if upcomingRaces.length > 0}
        <div class="p-4">
            <h3 class="h3 font-semibold mb-4 flex items-center">
                <i class="material-icons mr-2">event</i>
                Upcoming Races
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
                {#each upcomingRaces as race}
                <div class="card p-6 {isHighlight(race.raceresult) ? 'ring-2 ring-warning-500' : ''} hover:scale-[1.02] transition-transform">
                    <div class="flex items-start gap-4">
                        <img src="{race.racelogo}" loading="lazy" alt="{race.racename} logo" class="max-h-24 w-24 object-contain rounded" />
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="badge {getRaceTypeBadgeColor(race.racetype)} flex items-center gap-1">
                                    <i class="material-icons text-sm">{getRaceTypeIcon(race.racetype)}</i>
                                    {race.racetype}
                                </span>
                            </div>
                            <h4 class="h4 font-bold mb-1">{race.racename}</h4>
                            <div class="flex items-center gap-2 text-sm opacity-75 mb-2">
                                <i class="material-icons text-sm">calendar_today</i>
                                {race.racedate}
                            </div>
                            <div class="text-lg font-semibold text-primary-500">
                                {race.raceresult}
                            </div>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
        {/if}

        <!-- Filter and Sort Controls -->
        <div class="p-4 border-t border-surface-500">
            <h3 class="h3 font-semibold mb-4">Race History</h3>
            <div class="flex flex-wrap gap-4 mb-4">
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Race Type:
                        <select class="select w-auto ml-2" bind:value={selectedRaceType}>
                            <option value="All">All Types</option>
                            <option value="Ironman">Ironman</option>
                            <option value="70.3">70.3</option>
                            <option value="Olympic">Olympic</option>
                            <option value="Sprint">Sprint</option>
                            <option value="10km">10km</option>
                            <option value="21km">21km</option>
                            <option value="Trail">Trail</option>
                            <option value="Duathlon">Duathlon</option>
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
                <div class="flex-1"></div>
                <div class="text-sm opacity-75 self-center">
                    Showing {filteredRaces.length} of {pastRaces.length} races
                </div>
            </div>
        </div>

        <!-- Race Results -->
        <div class="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each filteredRaces as race}
            <div class="card p-6 {isHighlight(race.raceresult) ? 'ring-2 ring-warning-500 bg-warning-500/5' : ''} hover:scale-[1.02] transition-transform">
                <div class="flex items-start gap-4">
                    <img src="{race.racelogo}" loading="lazy" alt="{race.racename} logo" class="max-h-20 w-20 object-contain rounded" />
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="badge {getRaceTypeBadgeColor(race.racetype)} text-xs flex items-center gap-1">
                                <i class="material-icons text-xs">{getRaceTypeIcon(race.racetype)}</i>
                                {race.racetype}
                            </span>
                            {#if isHighlight(race.raceresult)}
                            <span class="badge variant-filled-warning text-xs flex items-center gap-1">
                                <i class="material-icons text-xs">emoji_events</i>
                                Winner
                            </span>
                            {/if}
                        </div>
                        <h4 class="font-bold text-lg mb-1">{race.racename}</h4>
                        <div class="flex items-center gap-1 text-xs opacity-75 mb-2">
                            <i class="material-icons text-xs">calendar_today</i>
                            {race.racedate}
                        </div>
                        <div class="text-sm mb-1">
                            <span class="font-semibold">Result:</span> {race.raceresult}
                        </div>
                        <div class="flex items-center gap-1 text-sm font-mono">
                            <i class="material-icons text-sm">timer</i>
                            {race.racetime}
                        </div>
                    </div>
                </div>
            </div>
            {/each}
        </div>

        {#if filteredRaces.length === 0}
        <div class="p-8 text-center opacity-50">
            <i class="material-icons text-6xl mb-4">search_off</i>
            <p>No races found matching your filters</p>
        </div>
        {/if}

        <!-- On Training Section -->
        <div class="border-t border-surface-500 mt-8">
            <h3 class="h3 p-4 font-semibold">On Training</h3>
            <div class="px-4 max-w-2xl relative card-hover">
                <img src="/trainerphoto.jpg" alt="Training inspiration quote overlay" loading="lazy" class="rounded-lg grayscale brightness-50">
                <div class="hidden lg:block absolute text-lg font-semibold bottom-20 left-5 opacity-100 p-6">
                    <div class="italic">"It is simply that we can all be good boys and wear our letter sweaters around and get our little degrees and find some nice girl to settle, you know, down with…Or we can blaze! Become legends in our own time, strike fear in the heart of mediocre talent everywhere! We can scald dogs, put records out of reach! Make the stands gasp as we blow into an unearthly kick from three hundred yards out! We can become God's own messengers delivering the dreaded scrolls! We can race dark Satan himself till he wheezes fiery cinders down the back straightaway….They'll speak our names in hushed tones, 'those guys are animals' they'll say! We can lay it on the line, bust a gut, show them a clean pair of heels. We can sprint the turn on a spring breeze and feel the winter leave our feet! We can, by God, let our demons loose and just wail on!"</div>
                </div>
            </div>

            <div class="lg:hidden text-lg font-semibold opacity-100 p-6">
                <div class="italic">"It is simply that we can all be good boys and wear our letter sweaters around and get our little degrees and find some nice girl to settle, you know, down with…Or we can blaze! Become legends in our own time, strike fear in the heart of mediocre talent everywhere! We can scald dogs, put records out of reach! Make the stands gasp as we blow into an unearthly kick from three hundred yards out! We can become God's own messengers delivering the dreaded scrolls! We can race dark Satan himself till he wheezes fiery cinders down the back straightaway….They'll speak our names in hushed tones, 'those guys are animals' they'll say! We can lay it on the line, bust a gut, show them a clean pair of heels. We can sprint the turn on a spring breeze and feel the winter leave our feet! We can, by God, let our demons loose and just wail on!"</div>
            </div>
        </div>

    </div>
</div>
    
        