<div class="box">
    <slot />
</div>

<style>
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        color: var(--color-svart);
        max-width: 25rem;
        text-align: center;
    }
    .box:nth-child(1){
        max-width: 17rem;
    }
    .box:nth-child(2){
        max-width: 18rem;
    }
    .box:nth-child(3){
        max-width: 25rem;
    }
</style>