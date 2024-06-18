<div class="box">
    <slot />
</div>

<style>
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        color: #011936;
        width: 400px;
        text-align: center;
    }

    .image {
        margin-bottom: 20px;
    }
</style>