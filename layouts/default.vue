<template>
  <div class="bg-blue-gradient text-white py-2 text-center font-light mb-4 hidden lg:block" style="font-size: 0.925rem;">
    Este site não possui vínculo com a empresa
    <NuxtLink to="https://atendeai.com.br" target="_blank" class="underline cursor-pointer">
      Atendeaí
    </NuxtLink>.
  </div>

  <!-- * Navbar -->
  <nav class="flex justify-center px-3 lg:py-2 sticky top-0 z-40 bg-white"
    :class="{ 'shadow': isScrolled && !menuAberto }">

    <div class="w-full max-w-screen-xl flex justify-between items-center">

      <div class="flex-1 flex items-center gap-2">
        <!-- <Icon name="lucide:door-open" size="2.5em" class="text-blue-400"></Icon> -->
        <header class="text-gray-900 font-semibold text-2xl md:text-3xl py-2 rounded-lg bg-white tracking-tighter">
          Atende<span class="text-blue-gradient">aí</span>
        </header>
      </div>

      <div class="hidden lg:flex gap-3 font-light">
        <a href="#comoFunciona" class="px-3 py-2 rounded-lg hover:bg-gray-100">Como funciona</a>
        <a href="#beneficios" class="px-3 py-2 rounded-lg hover:bg-gray-100">Benefícios</a>
        <a href="#sejaUmParceiro" class="px-3 py-2 rounded-lg hover:bg-gray-100">Seja um parceiro</a>
        <a href="#contato" class="px-3 py-2 rounded-lg hover:bg-gray-100">Contato</a>
      </div>

      <div class="hidden lg:inline flex-1 text-end">
        <NuxtLink to="/register">
          <BtnPrimary>
            Área do parceiro
          </BtnPrimary>
        </NuxtLink>
      </div>

      <div class="inline lg:hidden">
        <button @click="menuAberto = !menuAberto">
          <Icon :name="menuAberto ? 'majesticons:close' : 'majesticons:menu'" size="2.5em" id="botaoMenu" />
        </button>
      </div>
    </div>

  </nav>

  <div id="blend" class="block lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-30" v-show="menuAberto"
    @click="menuAberto = false"></div>

  <div id="mobileMenuWrapper" :class="{ 'active': menuAberto }" class="fixed w-full z-50">
    <div class="shadow bg-white">
      <div class="max-w-screen-xl mx-auto flex lg:hidden font-light flex-col pb-3 px-3">
        <a href="#" class="p-3 rounded-lg hover:bg-gray-100">Como funciona</a>
        <a href="#" class="p-3 rounded-lg hover:bg-gray-100">Benefícios</a>
        <a href="#" class="p-3 rounded-lg hover:bg-gray-100">Contato</a>
        <a href="#" class="p-3 rounded-lg hover:bg-gray-100">Seja um parceiro</a>
        <NuxtLink to="/register" class="mt-3">
          <BtnPrimary class="text-sm py-3 rounded-lg w-full">
            Área do parceiro
          </BtnPrimary>
        </NuxtLink>
      </div>
    </div>
  </div>

  <slot />

  <!-- * Footer -->
  <section class="bg-gray-950 pt-16 pb-4 px-4">
    <main class="container mx-auto">
      <div class="grid md:grid-cols-3 gap-5">

        <!-- <img src="~/assets/img/logo.png" alt="Logo" class="logoAtendeAi mb-5" /> -->
        <div>
          <header class="text-white font-semibold mb-5 text-2xl">
            Atende<span class="text-blue-gradient">aí</span>
          </header>
          <span class="font-light text-gray-300">
            Soluções tecnológicas para a sua<br>
            segurança e dia a dia.
          </span>
        </div>

        <div>
          <header class="text-xl font-semibold mb-5 text-blue-gradient">Nosso endereço</header>
          <span class="font-light text-gray-300">
            Avenida Altamiro Avelino Soares, n˚ 625<br>
            loja 05, Bairro Castelo – Belo Horizonte/MG<br>
            <strong class="font-medium">CEP: 31330-000</strong>
          </span>
        </div>

        <div class="text-gray-300 font-light">
          <header class="text-xl font-semibold mb-5 text-blue-gradient">Contatos</header>
          <div class="flex items-center mb-2">
            <Icon name="bi-whatsapp"></Icon>&nbsp; (31) 9 7115-3669
          </div>
          <div class="flex items-center mb-2">
            <Icon name="bi-envelope"></Icon>&nbsp; comercial@atendeai.com
          </div>
          <div class="flex gap-2 mt-12 justify-end socialMedia">
            <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm">
              <Icon name="bi-facebook"></Icon>
            </button>
            <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm">
              <Icon name="bi-instagram"></Icon>
            </button>
            <button class="hover:text-sky-400 hover:border-sky-400 py-1 px-2 border rounded-sm">
              <Icon name="bi-linkedin"></Icon>
            </button>
          </div>
        </div>
      </div>

      <HorizontalRule />

      <ul class="flex flex-col lg:flex-row justify-between py-3 md:pt-0">
        <li class="text-sm text-gray-600 text-center">
          Atende Aí &copy; 2023
          &#x2022; Todos os direitos reservados
          &#x2022; CNPJ - 45.332.165/0001-07
          &#x2022; Razão social -Atendeai Desenvolvimento em Sistemas LTDA
        </li>
        <li class="font-bold text-gray-300 text-center mt-3 lg:mt-0" id="six">
          SIX
        </li>
      </ul>
    </main>
  </section>

  <!-- <button id="chatBot"
    class="fixed bottom-5 right-5 bg-white shadow-lg border rounded-full p-3 font-medium border-gray-200 hover:border-gray-300 text-gray-900 hover:text-gray-800">
    <Icon name="majesticons:chat-2-text-line" size="2rem" />
  </button> -->
</template>

<style scoped>
#mobileMenuWrapper {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: height 0.5s ease;
}

#mobileMenuWrapper.active {
  height: 18rem;
}

#blend {
  transition: all 0.5s ease;
}
</style>

<script setup>

const menuAberto = ref(false);
const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

</script>