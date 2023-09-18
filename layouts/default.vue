<script lang="ts" setup></script>

<template>
  <!-- * Navbar -->
  <nav class="flex justify-center p-3 sticky top-0 mt-5 z-50 bg-white" :class="{ 'shadow': isScrolled }">
    <div class="container flex justify-between items-center">

      <div class="flex-1 flex items-center gap-2 text-gray-950">
        <Icon name="lucide:door-open" size="2em" class="text-blue-500"></Icon>
        <header id="nomeMarca" class="font-semibold text-2xl text-gray-950 py-2 rounded-md bg-white">
          atende<span class="text-blue-gradient">aí</span>
        </header>
      </div>

      <div class="hidden lg:flex gap-5">
        <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Como funciona</a>
        <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Benefícios</a>
        <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Contato</a>
        <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Seja um parceiro</a>
      </div>

      <div class="hidden lg:inline flex-1 text-end">
        <PrimaryButton>
          Área do parceiro
        </PrimaryButton>
      </div>

      <div class="inline lg:hidden">
        <button @click="exibeMenu()">
          <Icon :name="alternaIcone" size="3em" id="botaoMenu" />
        </button>
      </div>

    </div>
  </nav>

  <slot />

  <!-- * Footer -->
  <section class="bg-gray-950 pt-16 pb-4 px-4">
    <main class="container mx-auto">
      <div class="grid md:grid-cols-3 gap-5">
        <div class="text-gray-300">
          <img src="~/assets/img/logo.png" alt="Logo" class="logoAtendeAi mb-5" />
          <span>
            Soluções tecnológicas para a sua<br>
            segurança e dia a dia.
          </span>
        </div>

        <div class="text-gray-300">
          <header class="mb-5 text-blue-gradient font-semibold">Nosso endereço</header>
          Avenida Altamiro Avelino Soares, n˚ 625<br>
          loja 05, Bairro Castelo – Belo Horizonte/MG<br>
          <strong>CEP: 31330-000</strong>
        </div>

        <div class="text-gray-300">
          <header class="mb-5 text-blue-gradient font-semibold">Contatos</header>
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

      <div id="customHr" class="bg-gradient-to-r from-gray-950 via-gray-600 to-gray-950 my-3 from-45% to-95%"></div>

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

  <button id="chatBot"
    class="fixed bottom-5 right-5 bg-white shadow-lg border rounded-full p-3 font-medium border-gray-200 hover:border-gray-300 text-gray-900 hover:text-gray-800">
    <Icon name="majesticons:chat-2-text-line" size="2rem" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      aberto: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    alternaIcone() {
      return this.aberto ? 'majesticons:close' : 'majesticons:menu';
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    exibeMenu() {
      console.log('clicou', this.aberto);
      this.aberto = !this.aberto; // Inverte o estado do menu
    }
  },
};
</script>