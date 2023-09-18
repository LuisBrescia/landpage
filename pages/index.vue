<template>
  <!-- * Header -->
  <section class="py-6 md:py-12 px-4 ">
    <main class="container mx-auto py-12 text-gray-900">

      <h3 class="text-5xl md:text-7xl font-bold md:font-semibold mb-12 max-w-2xl mx-auto text-center">
        Tenha <span class="text-blue-gradient">controle</span>
        total de sua portaria!
      </h3>

      <p class="text-lg leading-7 mb-12 max-w-3xl mx-auto md:text-center">
        Com nosso aplicativo da AtendeAí integrado ao seu sistema de portaria, você poderá
        controlar acessos de sua portaria, de onde estiver e de forma totalmente autônoma.
      </p>

      <div class="flex justify-center gap-5">
        <NuxtLink to="/register">
          <BtnDark>Teste Grátis</BtnDark>
        </NuxtLink>
        <BtnLight>
          <Icon name="ic:round-play-arrow" size="1.2em" class="text-sky-500 me-1"></Icon>
          Vídeo explicativo
        </BtnLight>
      </div>

    </main>
  </section>

  <!-- * Objetivo -->
  <section class="bg-blue-gradient py-12 px-4">
    <main class="container mx-auto text-center max-w-2xl">

      <Icon name="fluent:target-arrow-20-regular" class="mb-3 text-white rounded-md border-2 shadow" size="4em"></Icon>

      <h3 class="font-semibold text-2xl text-white mb-12">
        Nossa missão é desenvolver e fornecer
        <span class="font-black">soluções tecnológicas</span>
        que garantam a segurança das pessoas e
        <span class="font-black">simplifiquem suas vidas.</span>
      </h3>
      <BtnDark>Saiba mais</BtnDark>
    </main>
  </section>

  <section class="bg-white py-12 px-4">
    <main class="container mx-auto">
      <header class="text-4xl font-extrabold text-center mb-12">
        Conheça nossas <span class="text-blue-gradient">soluções</span>
      </header>

      <div class="mb-12 flex justify-center gap-10 flex-col md:flex-row items-center">

        <div class="max-w-lg mb-4">
          <img src="~/assets/img/solution1.jpg" class="h-72 w-full rounded-lg mb-4 object-cover" />
          <h3 class="font-semibold text-2xl mb-3">Portaria Autônoma</h3>
          <p class="text-lg font-light">Oferecemos aos nossos clientes autonomia no controle e acesso do seu condomínio
          </p>
        </div>

        <div class="max-w-lg mb-4">
          <img src="~/assets/img/solution2.jpg" class="h-72 w-full rounded-lg mb-4 object-cover" />
          <h3 class="font-semibold text-2xl mb-3">App já disponível</h3>
          <p class="text-lg font-light">Oferecemos aos nossos clientes autonomia no controle e acesso do seu condomínio
          </p>
        </div>

      </div>
    </main>
  </section>

  <section class="bg-gray-950 py-12 px-4">
    <main class="container text-center text-gray-300 mx-auto">

      <header class="mx-auto text-center mb-12 max-w-lg">
        <h3 class="text-4xl font-extrabold mb-2 text-white">Conheça nosso <span class="text-blue-gradient">blog</span>
        </h3>
        <span class="text-lg">Acompanhe por aqui tudo sobre eventos, notícias e novidades do mercado de portaria
          virtual.</span>
      </header>

      <div class="grid md:grid-cols-3 gap-10 mb-12">

        <div class="text-start">
          <img src="~/assets/img/blog1.jpg" class="h-72 w-full rounded-md mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">Qual é o melhor tipo de portaria para meu condomínio?</h3>
          <p>
            A escolha do serviço de portaria é sempre um ponto de atenção para os condomínios. Escolhas erradas podem
            gerar consequências…
          </p>
        </div>


        <div class="text-start">
          <img src="~/assets/img/blog2.jpg" class="h-72 w-full rounded-md mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">Portaria autônoma: Economia inteligente e eficiente</h3>
          <p>
            A substituição dos porteiros pelo serviço de portaria remota tem sido prática comum nos condomínios do Brasil.
          </p>
        </div>


        <div class="text-start">
          <img src="~/assets/img/blog3.jpg" class="h-72 w-full rounded-md mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">5 dicas para melhorar a segurança do seu condomínio</h3>
          <p>
            A segurança do condomínio e seus moradores é uma preocupação constante de síndicos e gestores. Afinal, em
            muitos casos, eles…
          </p>
        </div>

      </div>

    </main>
  </section>

  <section class="bg-blue-gradient py-12 px-4">
    <main class="container text-center text-white mx-auto">

      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        <div class="text-center md:text-start max-w-lg mb-10 mx-auto">

          <header class="font-bold text-4xl mb-5 text-gray-900">
            <span class="text-white">Ainda não tem o sistema instalado?</span>
            Não se preocupe!
          </header>

          <p class="font-semibold text-xl mb-12">
            Contamos com a solução ideal para você, com equipamentos de primeira que garantem o acesso seja via tag,
            reconhecimento facial, e nosso app.
          </p>

          <BtnDark>Fale já com nossa equipe</BtnDark>
        </div>

        <img class="lojaMobile mx-auto" src="~/assets/img/ainda-nao-tem-sistema-instalado.png" />

      </div>

    </main>
  </section>

  <section class="bg-white py-12 px-4">
    <PerguntasFrequentes />
  </section>

  <!-- * Contato -->
  <section class="bg-white py-12 px-4">
    <main class="container mx-auto text-gray-900">

      <header class="text-center mb-4 max-w-lg mx-auto">
        <Icon name="ph:paper-plane-tilt-fill" class="mb-2 rounded-md text-4xl"></Icon>
        <h3 class="text-4xl font-extrabold mb-2">Entre em <span class="text-blue-gradient">contato</span></h3>
        <span class="text-lg mb-3">Nossa equipe entrará em contato no prazo de 6 horas.</span>
      </header>

      <form class="p-5 max-w-2xl mx-auto flex flex-col gap-8">

        <div>
          <label class="font-medium block text-sm mb-3">Nome</label>
          <input type="text" class="bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none shadow-sm" />
        </div>

        <div>
          <label class="font-medium block text-sm mb-3">E-mail</label>
          <input type="email" class="bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none shadow-sm" />
        </div>

        <div>
          <label class="font-medium block text-sm mb-3">Telefone</label>
          <input type="tel" class="bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none shadow-sm" />
        </div>

        <div>
          <label class="font-medium block text-sm mb-3">Mensagem</label>
          <textarea class="max-h-32 bg-gray-50 border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none shadow-sm"></textarea>
        </div>

        <div class="text-center">
          <BtnPrimary class="py-3 w-full">Enviar mensagem</BtnPrimary>
        </div>
      </form>

    </main>
  </section>

  <!-- * Baixar Aplicativo -->
  <section class="bg-blue-gradient py-12 px-4">
    <main class="container text-center text-white mx-auto">

      <header class="text-3xl font-bold mb-5">
        Baixe agora o nosso aplicativo disponível!
      </header>

      <p class="mb-5">
        Tenha acesso a todos os recursos exclusivos e únicos que<br>
        desenvolvemos para a sua portaria.
      </p>

      <div class="flex justify-center gap-4">
        <img class="lojaMobile" src="~/assets/img/google-play.png" alt="Google Play" />
        <img class="lojaMobile" src="~/assets/img/app-store.png" alt="Google Play" />
      </div>

    </main>
  </section>

</template>