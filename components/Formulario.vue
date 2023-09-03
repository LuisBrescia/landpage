<template>
    <main class="container max-w-7xl mx-auto text-black">

        <!-- <h3 class="text-center text-4xl font-semibold mb-4">
            Entre em contado e 
            <span class="text-blue-gradient">venha conhecer a atendeaí!</span>
        </h3> -->

        <div class="grid grid-cols-1 md:grid-cols-2 items-center">

            <img src="~/assets/img/mapa-brasil.png" alt="Mapa do Brasil" class="p-5 md:pe-10 md:py-5 md:ps-0 z-0 rounded-xl " 
            style="filter: hue-rotate(-20deg) contrast(1.4);"/>

            <form class="p-5">
                <h3 class="font-semibold mb-2 ms-1">Nome</h3>
                <input type="text" class="w-full p-2 mb-5 rounded-md shadow-sm border" />

                <h3 class="font-semibold mb-2 ms-1">E-mail</h3>
                <input type="email" class="w-full p-2 mb-5 rounded-md shadow-sm border" />

                <h3 class="font-semibold mb-2 ms-1">Telefone</h3>
                <input type="tel" class="w-full p-2 mb-5 rounded-md shadow-sm border" />

                <h3 class="font-semibold mb-2 ms-1">Mensagem</h3>
                <textarea class="max-h-32 w-full p-2 mb-5 rounded-md shadow-sm border"></textarea>

                <div class="flex">
                    <button class="btn-primario">Enviar mensagem</button>
                </div>
            </form>

        </div>

    </main>
</template>