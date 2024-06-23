<script>
    import { onMount } from 'svelte';
    import { user } from '/src/Store/userStore.js';

    // Initialiserer variabler for å spore siste scroll-posisjon og synligheten til navbar
    let lastScrollTop = 0;
    let navbarVisible = true;

    // Funksjon for å sjekke brukerens scroll-retning
    const checkScroll = () => {
        // Henter nåværende scroll-posisjon
        let st = window.pageYOffset || document.documentElement.scrollTop;
        // Skjuler navbar hvis brukeren scroller nedover, viser den hvis oppover
        if (st > lastScrollTop){
            navbarVisible = false;
        } else {
            navbarVisible = true;
        }
        // Oppdaterer siste kjente scroll-posisjon, resetter til 0 hvis negativ
        lastScrollTop = st <= 0 ? 0 : st;
    };

    // Kjører når komponenten er montert
    onMount(() => {
        // Legger til scroll-event listener hvis window-objektet er tilgjengelig
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', checkScroll);
        }

        // Fjerner event listener når komponenten demonteres
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', checkScroll);
            }
        };
    });

    // Prop for å styre om dark mode er aktivert
    export let darkmode = false;
    // Dynamisk klasse basert på darkmode-prop
    $: darkClass = darkmode ? 'dark' : '';

    // Prop for å styre om brukeren er logget inn
    
</script>


<div class="navbar {darkClass}" class:hide={!navbarVisible}>
    <div class="nav-links">
        <a href="/" class="logo">lodde</a>
        <ul>
            <li><a href="/" id="active">Hjem</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/om-oss">Om Oss</a></li>
            {#if !$user.picture}
                <a href="/logg-inn"><button class="logg-inn-btn {darkClass}">Logg Inn</button></a>
            {:else}
            <img src="{$user.picture}" alt="Profile" class="profile-picture"> 
            {/if}
        </ul>
    </div>
</div>

<style>
    /* Variables */
    :root {
        --font-color: #FEFFEA;
        --nav-height: 6rem;
    }

    .profile-picture {
        border-radius: 100%;
        width: 5rem;
    }
    .logo {
        font-size: 1.6em;
    }
    .navbar {
        /* text-shadow: 2px 3px 5px rgba(0,0,0,0.3); */
        transition: top 0.3s;
        position: fixed;
        height: var(--nav-height);
        
        top: 0;
        width: 100%;
        
        /* background-color: #1D55F3; */
        font-size: 1.5em;
        color: var(--font-color);
        z-index: 100;
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 5vw;
        height: var(--nav-height);
    }
    
    .nav-links ul {
        display: flex;
        list-style: none;
        align-items: center;
        color: hsla(63, 100%, 96%, 0.7); /* mindlertidig endring på gråere farge. */
    }

    #active {
        font-weight:600;
        color: var(--font-color);
    }

    .logg-inn-btn.dark {
        background-color: white;
        color: #1D55F3;
        border: none;
    }

    .logg-inn-btn {
        padding: 0.5rem 1.5rem;
        font-size: 1em;
    }

    .navbar.dark {
        /* color: white; */
    }

    .navbar a {
        text-decoration: none;
        color: inherit;
    }


    .dark .nav-links ul {
        /* color: white; */
    }

    .nav-links ul li {
        margin-right: 3rem;
    }

    .nav-links ul li a {
        text-decoration: none;
        color: inherit;
    }

    .navbar.hide {
        top: calc(-1 * var(--nav-heigt));
    }
</style>