<script>
    import { onMount } from 'svelte';

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
    export let loggedIn = false;
</script>


<div class="navbar {darkClass}" class:hide={!navbarVisible}>
    <a href="/"><div class="logo">sørby</div></a>
    <div class="nav-links">
        <ul>
            <li><a href="/">Hjem</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/om-oss">Om Oss</a></li>
            {#if !loggedIn}
                <a href="/logg-inn"><button class="logg-inn-btn {darkClass}">Logg Inn</button></a>
            {/if}
        </ul>
    </div>
</div>

<style>
    /* Variables */
    :root {
        --nav-heigt: 126px;
    }
    .navbar {
        transition: top 0.3s;
        position: fixed;
        height: var(--nav-heigt);
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-size: 30px;
        color: 424242;
    }

    .logg-inn-btn.dark {
        background-color: white;
        color: #1D55F3;
        border: none;
    }

    .navbar.dark {
        color: white;
    }

    .navbar a {
        text-decoration: none;
        color: inherit;
    }

    .nav-links ul {
        display: flex;
        list-style: none;
        align-items: center;
        color: black;
    }

    .dark .nav-links ul {
        color: white;
    }

    .nav-links ul li {
        margin-right: 56px;
    }

    .nav-links ul li a {
        text-decoration: none;
        color: inherit;
    }

    .navbar.hide {
        top: calc(-1 * var(--nav-heigt));
    }
</style>