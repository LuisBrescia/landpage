<template>
    <main class="flex w-full bg-blue-gradient">

        <div class="bg-white mx-auto md:mx-0 flex flex-col w-full md:w-fit md:px-32 items-center justify-center">

            <div>
                <h1 id="nomeMarca" class="text-2xl mb-16">
                    <Icon name="lucide:door-open" size="1.8rem" class="text-blue-500"></Icon>
                    atende<span class="text-blue-gradient">aí</span>
                </h1>

                <header class="mb-12">
                    <h3 class="text-lg font-semibold mb-3">Get started for free</h3>
                    <p class="text-base">
                        Already registered? <span class="text-blue-gradient">Sign</span> in to your account.
                    </p>
                </header>

                <form class="flex flex-col gap-8">
                    <div class="flex flex-col md:flex-row gap-5">
                        <div>
                            <label for="firstName" class="mb-3 block text-sm text-gray-800">First Name</label>
                            <input type="text" name="firstName" class="shadow-sm bg-gray-50 border w-full rounded-md p-2 focus:border-blue-500 focus:outline-none">
                        </div>
                        <div>
                            <label for="lastName" class="mb-3 block text-sm text-gray-800">Last Name</label>
                            <input type="text" name="lastName" class="shadow-sm bg-gray-50 border w-full rounded-md p-2 focus:border-blue-500 focus:outline-none">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="mb-3 block text-sm text-gray-800">Email adress</label>
                        <input type="email" name="email"
                            class="shadow-sm bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none">
                    </div>

                    <div>
                        <label for="name" class="mb-3 block text-sm text-gray-800">Password</label>
                        <input type="password" name="password"
                            class="shadow-sm bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none">
                    </div>

                    <div>
                        <label for="name" class="mb-3 block text-sm text-gray-800">How did you hear about us?</label>
                        <select class="shadow-sm bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none appearance-none">
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