<template>
    <main class="container max-w-7xl text-center text-white mx-auto">
        <header class="text-3xl font-bold mb-5">
            Baixe agora o nosso aplicativo disponível!
        </header>
        <p class="mb-5">
            Tenha acesso a todos os recursos exclusivos e únicos que<br> 
            desenvolvemos para a sua portaria.
        </p>
        <div class="flex justify-center gap-4">
            <img src="~/assets/img/google-play.png" alt="Google Play" />
            <img src="~/assets/img/app-store.png" alt="Google Play" />
        </div>
    </main>
</template>

<style scoped>

img {
    filter: drop-shadow(0 0 3px #fff);
    transition: all 0.5s ease;
}

img:hover {
    filter: drop-shadow(0 0 8px #fff);
}

</style>