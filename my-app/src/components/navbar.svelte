<script>
    import { onMount } from 'svelte';
  
    let lastScrollTop = 0;
    let navbarVisible = true;
  
    const checkScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        navbarVisible = false;
      } else {
        navbarVisible = true;
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
  
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', checkScroll);
      }
  
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', checkScroll);
        }
      };
    });
  
    export let darkmode = false;
    $: darkClass = darkmode ? 'dark' : '';
  
    export let loggedIn = false;
</script>


<div class="navbar {darkClass}" class:hide={!navbarVisible}>
    <div class="logo">Sørby</div>
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
        margin-right: 20px;
    }

    .nav-links ul li a {
        text-decoration: none;
        color: inherit;
    }

    .navbar.hide {
        top: calc(-1 * var(--nav-heigt));
    }
</style>