<script>
    import Navbar from '../../components/navbar.svelte'; // Importerer Navbar-komponenten
    import '../../global.css' // Importerer globale stiler

    // Din funksjon for pålogging via Google
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile(); // Henter brukerens profilinformasjon
        console.log('ID: ' + profile.getId()); // Logger brukerens ID (bør ikke sendes til backend direkte)
        console.log('Name: ' + profile.getName()); // Logger brukerens navn
        console.log('Image URL: ' + profile.getImageUrl()); // Logger URL til brukerens profilbilde
        console.log('Email: ' + profile.getEmail()); // Logger brukerens e-postadresse (null hvis 'email'-scope ikke er tilgjengelig)
    }

    // Importerer onMount fra Svelte for å kjøre kode etter komponenten er montert
    import { onMount } from 'svelte';
    onMount(() => {
        const script = document.createElement('script'); // Oppretter et nytt script-element
        script.src = 'https://apis.google.com/js/platform.js'; // Angir kilden til Google's platform.js
        script.async = true; // Setter scriptet til å laste asynkront
        script.defer = true; // Setter scriptet til å utsette utførelsen til etter at HTML-dokumentet er parset
        document.body.appendChild(script); // Legger script-elementet til i dokumentets body
    });
</script>

<Navbar />
<div class="sign-in-container">
    <div class="sign-in">
        <h1>Logg inn</h1>
        <div class="sign-in-options">
            <div class="google-btn-container">
                <div class="g-signin2" data-onsuccess="onSignIn" data-longtitle="true"></div>
            </div>
        </div>
    </div>
</div>

<style>
    .sign-in-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .google-btn-container {
        border-radius: 24px; /* Avrundede hjørner */
        overflow: hidden; /* Sikrer at innholdet også følger de avrundede hjørnene */
    }

    .sign-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #E94F37;
        color: white;
        padding: 15px;
        border-radius: 24px;
        min-height: 30vh;
    }
</style>