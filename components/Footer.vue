<template>
        <main class="container max-w-7xl mx-auto">

            <div class="grid md:grid-cols-3 gap-5">
                <div class="text-gray-300">
                    <img src="~/assets/img/logo.png" alt="Logo" class="logoAtendeAi"/>
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
                    <div class="flex gap-2 mt-12 justify-end socialMedia">
                        <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm"><Icon name="bi-facebook"></Icon></button>
                        <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm"><Icon name="bi-instagram"></Icon></button>
                        <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm"><Icon name="bi-linkedin"></Icon></button>
                    </div>
                </div>
            </div>

            <div id="customHr" class="bg-gradient-to-r from-gray-950 via-gray-600 to-gray-950 my-3 from-45% to-95%"></div>

            <ul class="flex justify-between">
                <li class="text-dark-gradient">
                    Atende Aí &copy; 2023 
                    &#x2022; Todos os direitos reservados 
                    &#x2022; CNPJ - 45.332.165/0001-07 
                    &#x2022; Razão social -Atendeai Desenvolvimento em Sistemas LTDA 
                </li>
                <li class="font-bold text-gray-300" id="six">
                    SIX
                </li>
            </ul>

        </main>
</template>

<script setup>

</script>

<style lang="css" scoped>

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
    color: #02f783;
}

#customHr {
    height: 1px;
    background-size: 200%;
    animation: background-pan 3s linear infinite;
}

@keyframes background-pan {
    from {
        background-position: 0% center;
    }
    to {
        background-position: -200% center;
    }
}

</style>