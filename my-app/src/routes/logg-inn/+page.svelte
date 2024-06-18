<script>
    import Navbar from '../../components/navbar.svelte';
    import '../../global.css';
    import { onMount } from 'svelte';

    onMount(() => {
        // Last inn GIS-biblioteket
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialiser GIS
            google.accounts.id.initialize({
                client_id: '1059100718256-0j00u0ut641bqurhfaf8o9p7nctkvsik.apps.googleusercontent.com', // Erstatt med din klient-ID
                callback: onSignIn,
            });

            // Opprett en Sign-In-knapp
            google.accounts.id.renderButton(
                document.getElementById('sign-in'), // Elementet hvor knappen skal vises
                { theme: 'outline', size: 'large' }  // Tilpasningsalternativer
            );
        };
    });

    // Callback-funksjonen som kjøres etter vellykket innlogging
    function onSignIn(response) {
    // Hent ID-token fra responsen
    const id_token = response.credential;

    // Dekod ID-token. Dette eksemplet bruker en enkel metode for å dekode JWT-tokenet.
    // Merk: Dette bør gjøres på server-siden i en produksjonsapp for sikkerhet.
    const payload = JSON.parse(atob(id_token.split('.')[1]));
    
    // Nå kan du få tilgang til brukerinformasjon fra payload
    console.log('User ID: ' + payload.sub); // Brukerens unike ID
    console.log('User Name: ' + payload.name);
    console.log('User Email: ' + payload.email);
    console.log('User Picture: ' + payload.picture);
}
</script>

<Navbar />
<div class="sign-in-container">
    <div id="sign-in" class="sign-in">
        <h1>Logg inn</h1>
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