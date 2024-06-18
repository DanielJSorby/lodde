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
    import { user } from '../../Store/userStore.js'; // Oppdater med korrekt sti

    function onSignIn(response) {
        const id_token = response.credential;
        // Dekoder fra Base64Url til en UTF-8 streng
        const base64UrlPayload = id_token.split('.')[1];
        const base64Payload = base64UrlPayload.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(decodeURIComponent(atob(base64Payload).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')));

        // Oppdaterer Svelte store med brukerinformasjon
        user.set({
            id: payload.sub,
            name: payload.name,
            email: payload.email,
            picture: payload.picture
        });
    }
</script>

<Navbar />
<div class="sign-in-container">
    <div class="sign-in">
        <h1>Logg Inn</h1>
        <div id="sign-in">
            <h1>Logg inn</h1>
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