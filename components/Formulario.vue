<template>
    <main class="container mx-auto text-gray-900">

        <header class="text-center mb-4 max-w-lg mx-auto">
            <Icon name="ph:paper-plane-tilt-fill" class="mb-2 rounded-md text-4xl"></Icon>
            <h3 class="text-4xl font-extrabold mb-2">Entre em <span class="text-blue-gradient">contato</span></h3>
            <span class="text-lg mb-3">Se interessou por algo? Nossa equipe te dará retorno no prazo de 1 hora.</span>
        </header>

        <form class="p-5 max-w-2xl mx-auto">
            <h3 class="text-sm font-semibold mb-1 ms-1">Nome</h3>
            <input type="text" class="w-full p-2 mb-3 rounded-md shadow-sm border" />

            <h3 class="text-sm font-semibold mb-1 ms-1">E-mail</h3>
            <input type="email" class="w-full p-2 mb-3 rounded-md shadow-sm border" />

            <h3 class="text-sm font-semibold mb-1 ms-1">Telefone</h3>
            <input type="tel" class="w-full p-2 mb-3 rounded-md shadow-sm border" />

            <h3 class="text-sm font-semibold mb-1 ms-1">Mensagem</h3>
            <textarea class="max-h-32 w-full p-2 mb-5 rounded-md shadow-sm border"></textarea>

            <div class="text-center">
                <PrimaryButton>Enviar mensagem</PrimaryButton>
            </div>
        </form>

    </main>
</template>

<style scoped>
form input:focus,
form textarea:focus {
    outline: 1px solid #4b5563;
}
</style>