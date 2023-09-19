<template>
    <main class="flex w-full bg-blue-gradient">

        <div class="bg-white mx-auto md:mx-0 flex flex-col w-full md:w-fit md:px-32 items-center justify-center">

            <div>
                <h1 id="nomeMarca" class="text-2xl mb-16">
                    <Icon name="lucide:door-open" size="1.8rem" class="text-blue-500"></Icon>
                    atende<span class="text-blue-gradient">aí</span>
                </h1>

                <header class="mb-12">
                    <h3 class="text-lg font-semibold mb-3">Experimente de forma gratuita</h3>
                    <p class="text-base">
                        Já cadastrado na plataforma? <span class="text-blue-gradient cursor-pointer">Entre com sua conta.</span>
                    </p>
                </header>

                <form class="flex flex-col gap-8">
                    <div class="flex flex-col md:flex-row gap-5">
                        <div>
                            <label for="firstName" class="font-medium mb-3 block text-sm">Primeiro nome</label>
                            <input type="text" name="firstName" class="shadow-sm bg-gray-50 border w-full rounded-lg p-2 focus:border-blue-500 focus:outline-blue-500">
                        </div>
                        <div>
                            <label for="lastName" class="font-medium mb-3 block text-sm">Sobrenome</label>
                            <input type="text" name="lastName" class="shadow-sm bg-gray-50 border w-full rounded-lg p-2 focus:border-blue-500 focus:outline-blue-500">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="font-medium mb-3 block text-sm">Email</label>
                        <input type="email" name="email"
                            class="shadow-sm bg-gray-50 border rounded-lg p-2 w-full focus:border-blue-500 focus:outline-blue-500">
                    </div>

                    <div>
                        <label for="name" class="font-medium mb-3 block text-sm">Senha</label>
                        <input type="password" name="password" class="shadow-sm bg-gray-50 border rounded-lg p-2 w-full focus:border-blue-500 focus:outline-blue-500">
                    </div>

                    <div>
                        <label for="name" class="font-medium mb-3 block text-sm">Como nos conheceu?</label>
                        <select class="shadow-sm bg-gray-50 border rounded-lg p-2 w-full focus:border-blue-500 focus:outline-blue-500 appearance-none">
                            <option value="google">Google</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">Linkedin</option>
                            <option value="twitter">Twitter</option>
                            <option value="youtube">Youtube</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <NuxtLink to="/">
                        <BtnPrimary class="w-full py-3">Sign Up</BtnPrimary>
                    </NuxtLink>
                </form>

            </div>

        </div>

    </main>
</template>

<script setup>
definePageMeta({
    layout: false
});
</script>

<style scoped>
main {
    min-height: 100vh;
}</style>