<template>
    <main class="flex w-full bg-blue-gradient">

        <div class="bg-white mx-auto md:mx-0 flex flex-col w-full md:w-fit md:px-32 items-center justify-center">

            <div class="p-5">
                <header
                    class="mb-8 text-gray-900 font-semibold text-3xl md:text-4xl py-2 rounded-lg bg-white tracking-tighter">
                    Atende<span class="text-blue-gradient">aí</span>
                </header>

                <header class="mb-12">
                    <h3 class="text-lg font-semibold mb-3">Experimente de forma gratuita</h3>
                    <p class="text-base">
                        Já cadastrado na plataforma? <span class="text-blue-gradient cursor-pointer">Entre com sua
                            conta.</span>
                    </p>
                </header>

                <form class="flex flex-col gap-8">
                    <div class="flex flex-col md:flex-row gap-5">
                        <div>
                            <label for="firstName" class="font-semibold mb-3 block text-sm">Primeiro nome</label>
                            <input type="text" name="firstName"
                                class="shadow-sm bg-gray-50 border w-full rounded-sm p-2 focus:border-blue-400 focus:outline-blue-400">
                        </div>
                        <div>
                            <label for="lastName" class="font-semibold mb-3 block text-sm">Sobrenome</label>
                            <input type="text" name="lastName"
                                class="shadow-sm bg-gray-50 border w-full rounded-sm p-2 focus:border-blue-400 focus:outline-blue-400">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="font-semibold mb-3 block text-sm">Email</label>
                        <input type="email" name="email"
                            class="shadow-sm bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400">
                    </div>

                    <div>
                        <label for="name" class="font-semibold mb-3 block text-sm">Senha</label>
                        <input type="password" name="password"
                            class="shadow-sm bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400">
                    </div>

                    <div>
                        <label for="name" class="font-semibold mb-3 block text-sm">Como nos conheceu?</label>
                        <select
                            class="shadow-sm bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400 appearance-none">
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
                        <BtnPrimary class="w-full">Entrar</BtnPrimary>
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