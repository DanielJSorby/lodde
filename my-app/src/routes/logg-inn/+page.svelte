<script>
    import Navbar from '../../components/navbar.svelte';
    import '../../global.css'

    // Din funksjon for pålogging
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    // Kjører kode når komponenten er montert i DOM
    import { onMount } from 'svelte';
    onMount(() => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
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