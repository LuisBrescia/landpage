<template>
    <main class="container max-w-7xl text-center text-white mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5">

            <div class="text-center md:text-start max-w-lg mb-10 mx-auto">

                <header class="font-bold text-4xl mb-5 text-gray-900">
                    <span class="text-white">Ainda não tem o sistema instalado?</span> 
                    Não se preocupe!
                </header>

                <p class="font-semibold text-xl mb-5">
                    Contamos com a solução ideal para você, com equipamentos de primeira que garantem o acesso seja via tag, reconhecimento facial, e nosso app.
                </p>

                <button class="btn-escuro">Fale já com nossa equipe</button>

            </div>

            <img src="~/assets/img/ainda-nao-tem-sistema-instalado.png" class="mx-auto" />

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