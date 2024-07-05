<div class="box">
    <slot />
</div>

<style>
    .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        color: #011936;
        width: 400px;
        text-align: center;
        height: 100%;
    }

    .image {
        margin-bottom: 20px;
    }
</style>