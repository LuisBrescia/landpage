<template>
        <main class="container max-w-7xl mx-auto">

            <div class="grid grid-cols-3 space-x-5">
                <div class="text-gray-300">
                    <img src="~/assets/img/logo.png" alt="Logo" />
                    <span>
                        Soluções tecnológicas para a sua<br>
                        segurança e dia a dia.
                    </span>
                </div>

                <div class="text-gray-300">
                    <header class="text-blue-gradient font-semibold">Nosso endereço</header>
                    Avenida Altamiro Avelino Soares, n˚ 625<br>
                    loja 05, Bairro Castelo – Belo Horizonte/MG<br>
                    <strong>CEP: 31330-000</strong>
                </div>

                <div class="text-gray-300">
                    <header class="text-blue-gradient font-semibold">Contatos</header>
                    <div class="flex items-center mb-2"><Icon name="bi-whatsapp"></Icon>&nbsp; (31) 9 7115-3669</div>
                    <div class="flex items-center mb-2"><Icon name="bi-envelope"></Icon>&nbsp; comercial@atendeai.com</div>
                    <div class="flex gap-2 mt-12 justify-end">
                        <button class="py-1 px-2 border rounded-sm"><Icon name="bi-facebook"></Icon></button>
                        <button class="py-1 px-2 border rounded-sm"><Icon name="bi-instagram"></Icon></button>
                        <button class="py-1 px-2 border rounded-sm"><Icon name="bi-linkedin"></Icon></button>
                    </div>
                </div>
            </div>

            <hr class="border-gray-600 my-3">

            <ul class="text-gray-600 flex justify-between">
                <li>
                    Atende Aí &copy; 2023 
                    &#x2022; Todos os direitos reservados 
                    &#x2022; CNPJ - 45.332.165/0001-07 
                    &#x2022; Razão social -Atendeai Desenvolvimento em Sistemas LTDA 
                </li>
                <li class="font-bold" id="six">
                    SIX
                </li>
            </ul>

        </main>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

header, img {
    margin-bottom: 1.2em;
}

#six {
    cursor: pointer;
    transition: all 0.5s ease;
    font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.1em;
}

#six:hover {
    transform: scale(1.1);
    color: rgb(0, 255, 132);
    letter-spacing: 0.15em;
}

</style>