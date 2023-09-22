<template>
  <!-- * Header -->
  <section class="py-6 md:py-12 px-4">
    <main class="container mx-auto py-12">

      <h3 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-12 max-w-3xl mx-auto text-center text-gray-900"
        style="letter-spacing: -0.075rem;">
        Tenha <span class="text-blue-gradient">controle</span> total de sua portaria!
      </h3>

      <p class="text-base sm:text-lg leading-7 mb-12 max-w-2xl mx-auto text-center font-extralight text-gray-800">
        Com nosso aplicativo da AtendeAí integrado ao seu sistema de portaria, você poderá
        controlar acessos de sua portaria, de onde estiver e de forma totalmente autônoma.
      </p>

      <div class="flex max-w-md mx-auto gap-5 flex-wrap sm:flex-nowrap items-center">
        <NuxtLink to="/register" class="mx-auto w-full sm:w-1/2">
          <BtnDark class="w-full">
            Teste Grátis
          </BtnDark>
        </NuxtLink>
        <BtnLight class="w-full mx-auto sm:w-1/2">
          <Icon name="ic:round-play-arrow" size="1.4rem" class="text-blue-400"></Icon>
          Vídeo explicativo
        </BtnLight>
      </div>

    </main>
  </section>

  <!-- * Colaboradores -->
  <section class="py-12 mb-12">

    <!-- * Colaboradores -->
    <div class="hidden md:flex justify-center gap-20 items-center" style="transform: scale(0.525);">
        <img src="/img/the-new-york-times.png"/>
        <img src="/img/st-jude.png"/>
        <img src="/img/twitch.png"/>
        <img src="/img/bankrate.png"/>
        <img src="/img/warner-bros.png"/>
        <img src="/img/disney.png"/>
        <img src="/img/wwe.png"/>
        <img src="/img/about-you.png"/>
    </div>
  </section>

  <section class="pb-12 pt-16">
    <main class="container mx-auto">

      <!-- <header class="text-center mb-5">
        <h3 class="text-5xl font-bold tracking-tight mb-5 text-gray-900">
          Rápido de instalar, fácil de usar!
        </h3>
        <p class="mx-auto font-extralight text-lg text-gray-800 max-w-2xl">
          Com o aplicativo da atendeaí integrado ao seu sistema de portaria,
          você poderá controlar os acessos de sua portaria, de onde estiver e de forma totalmente autônoma.
        </p>
      </header> -->

      <div class="flex flex-col lg:flex-row">

        <div class="flex flex-1">
          <CardHowTo class="flex-1" filename="passos-1" numero="1">
            <template v-slot:numero>1</template>
            <template v-slot:conteudo>
              Um visitante chega ao seu condomínio e disca para seu apartamento.
            </template>
          </CardHowTo>

          <CardHowTo class="flex-1" filename="passos-2" numero="2">
            <template v-slot:numero>2</template>
            <template v-slot:conteudo>
              Seu Smartphone toca junto com o interfone.
            </template>
          </CardHowTo>
        </div>

        <div class="flex flex-1">
          <CardHowTo class="flex-1" filename="passos-3" numero="3">
            <template v-slot:conteudo>
              Você identifica e atende o visitante via app atendeaí.
            </template>
          </CardHowTo>

          <CardHowTo class="flex-1" filename="passos-4" numero="4">
            <template v-slot:numero>4</template>
            <template v-slot:conteudo>
              Abra a porta de onde estiver, com apenas um clique.
            </template>
          </CardHowTo>
        </div>

      </div>
    </main>

  </section>

  <!-- * Objetivo -->
  <section class="bg-blue-gradient py-12 my-5 px-4">
    <main class="container mx-auto text-center max-w-3xl">

      <Icon name="fluent:target-arrow-20-regular" class="text-white rounded-sm border-2 border-white shadow" size="4em">
      </Icon>

      <h3 class="text-xl md:text-3xl text-white mt-8 mb-12 font-medium tracking-tight">
        Nossa missão é desenvolver e fornecer <span class="underline">soluções tecnológicas</span>
        que garantam a segurança das pessoas e <span class="underline">simplifiquem suas vidas.</span>
      </h3>

      <BtnDark>Saiba mais</BtnDark>
    </main>
  </section>

  <!-- * Solução -->
  <section class="py-12 px-4">
    <main class="container mx-auto">
      <h3 class="text-4xl font-bold text-center mb-12 tracking-tighter">
        Conheça nossas <span class="text-blue-gradient">soluções</span>
      </h3>

      <div class="mb-12 flex justify-center gap-10 flex-col md:flex-row items-center">

        <div class="max-w-lg mb-4 md:mb-0">
          <img src="~/assets/img/solution1.jpg" class="h-72 w-full rounded-sm mb-4 object-cover" />
          <h3 class="font-semibold text-2xl mb-3">Portaria Autônoma</h3>
          <p class="text-lg font-light">Oferecemos aos nossos clientes autonomia no controle e acesso do seu condomínio
          </p>
        </div>

        <div class="max-w-lg">
          <img src="~/assets/img/solution2.jpg" class="h-72 w-full rounded-sm mb-4 object-cover" />
          <h3 class="font-semibold text-2xl mb-3">App já disponível</h3>
          <p class="text-lg font-light">Oferecemos aos nossos clientes autonomia no controle e acesso do seu condomínio
          </p>
        </div>

      </div>
    </main>
  </section>

  <!-- * Depoimentos -->
  <section class="bg-gray-950 py-12 px-4">
    <main class="container text-center text-gray-300 mx-auto">

      <header class="mx-auto text-center mb-12 max-w-lg">
        <h3 class="text-4xl font-bold mb-5 text-white tracking-tighter">Conheça nosso <span
            class="text-blue-gradient">blog</span>
        </h3>
        <span class="text-lg font-light">
          Acompanhe por aqui tudo sobre eventos, notícias e novidades do mercado de portaria virtual.
        </span>
      </header>

      <div class="grid md:grid-cols-3 gap-10 mb-12">

        <!-- > Transformar em componentes -->
        <div class="text-start">
          <img src="~/assets/img/blog1.jpg" class="h-72 w-full rounded-sm mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">Qual é o melhor tipo de portaria para meu condomínio?</h3>
          <p>
            A escolha do serviço de portaria é sempre um ponto de atenção para os condomínios. Escolhas erradas podem
            gerar consequências…
          </p>
        </div>

        <div class="text-start">
          <img src="~/assets/img/blog2.jpg" class="h-72 w-full rounded-sm mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">Portaria autônoma: Economia inteligente e eficiente</h3>
          <p>
            A substituição dos porteiros pelo serviço de portaria remota tem sido prática comum nos condomínios do Brasil.
          </p>
        </div>


        <div class="text-start">
          <img src="~/assets/img/blog3.jpg" class="h-72 w-full rounded-sm mb-4 object-cover" />
          <h3 class="text-white text-2xl mb-4 font-bold">5 dicas para melhorar a segurança do seu condomínio</h3>
          <p>
            A segurança do condomínio e seus moradores é uma preocupação constante de síndicos e gestores. Afinal, em
            muitos casos, eles…
          </p>
        </div>

      </div>

    </main>
  </section>

  <!-- * Fale já com nossa equipe -->
  <section class="bg-blue-gradient py-12 px-4">
    <main class="container text-center text-white mx-auto">

      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        <div class="text-center md:text-start max-w-xl mb-10 mx-auto">

          <h3 class="font-bold text-3xl md:text-4xl mb-5 text-gray-900">
            <span class="text-white">
              Ainda não tem o sistema instalado?
            </span>
            Não se preocupe!
          </h3>

          <p class="text-lg md:text-xl mb-12">
            Contamos com a solução ideal para você, com equipamentos de primeira que garantem o acesso seja via tag,
            reconhecimento facial, e nosso app.
          </p>

          <BtnDark class="border-0">Fale já com nossa equipe</BtnDark>
        </div>

        <img class="lojaMobile mx-auto" src="~/assets/img/ainda-nao-tem-sistema-instalado.png" />

      </div>

    </main>
  </section>

  <!-- * Perguntas Frequentes -->
  <section class="pb-6 pt-12 px-4">
    <main class="container mx-auto">

      <header class="text-center mb-12 max-w-lg mx-auto">
        <Icon name="material-symbols:help-center-rounded" class="mb-2 rounded-sm text-5xl"></Icon>
        <h3 class="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-gray-900 whitespace-nowrap"><span
            class="text-blue-gradient">Perguntas</span> frequentes</h3>
        <span class="text-base md:text-lg mb-3 font-light text-gray-800">Se não encontrar o que procura aqui, fale
          conosco.</span>
      </header>

      <div class="mx-auto max-w-6xl flex flex-col">
        <!-- * Pergunta 1 -->
        <AccordionItem>
          <template v-slot:accordionHeader>
            Posso enviar convites via WhatsApp para entrada no condomínio?
          </template>
          <template v-slot:accordionBody>
            Sim! Nosso sistema proporciona a opção de enviar convites via WhatsApp, assim seu convidado
            entrará rapidamente, evitando filas e com toda segurança que só a Atendeaí pode proporcionar!
          </template>
        </AccordionItem>

        <!-- * Pergunta 2 -->
        <AccordionItem>
          <template v-slot:accordionHeader>
            Consigo ver quem tocou o interfone mesmo antes de atender?
          </template>
          <template v-slot:accordionBody>
            Quando alguém chama no interfone, de imediato o seu app abre e exibe a imagem da portaria,
            assim você poderá visualizar e decidir se irá atender ou não a chamada.
          </template>
        </AccordionItem>

        <!-- * Pergunta 3 -->
        <AccordionItem>
          <template v-slot:accordionHeader>
            Receberei chamadas do interfone e portaria mesmo sem internet?
          </template>
          <template v-slot:accordionBody>
            Sim, nosso sistema identifica quando não há nenhum equipamento online realizando uma chamada
            telefônica convencional. Assim você não irá perderá nenhuma chamada!
          </template>
        </AccordionItem>

        <!-- * Pergunta 4 -->
        <AccordionItem>
          <template v-slot:accordionHeader>
            Posso fazer ligações entre moradores do condomínio?
          </template>
          <template v-slot:accordionBody>
            Claro! Basta abrir o catálogo de apartamentos e escolher aquele que deseja chamar, as ligações
            podem ser feitas utilizando tanto a rede de internet quanto a rede de telefonia convencional.
          </template>
        </AccordionItem>

      </div>

    </main>
  </section>

  <!-- * Contato -->
  <section class="py-12 px-4" id="#contato">
    <main class="container mx-auto text-gray-900">

      <header class="text-center mb-4 max-w-lg mx-auto">
        <Icon name="ph:paper-plane-tilt-fill" class="mb-2 rounded-sm text-4xl"></Icon>
        <h3 class="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-gray-900 whitespace-nowrap">Entre em <span
            class="text-blue-gradient">contato</span></h3>
        <span class="text-base md:text-lg mb-3 font-light text-gray-800">Sua mensagem será respondida assim que
          possível.</span>
      </header>

      <form class="p-5 max-w-2xl mx-auto flex flex-col gap-8">

        <div>
          <label class="font-semibold block text-sm mb-3">Nome</label>
          <input type="text"
            class="bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400 shadow-sm" />
        </div>

        <div>
          <label class="font-semibold block text-sm mb-3">E-mail</label>
          <input type="email"
            class="bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400 shadow-sm" />
        </div>

        <div>
          <label class="font-semibold block text-sm mb-3">Telefone</label>
          <input type="tel"
            class="bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400 shadow-sm" />
        </div>

        <div>
          <label class="font-semibold block text-sm mb-3">Mensagem</label>
          <textarea
            class="max-h-32  bg-gray-50 border rounded-sm p-2 w-full focus:border-blue-400 focus:outline-blue-400 shadow-sm"></textarea>
        </div>

        <div class="text-center">
          <BtnPrimary class="w-full" @click="preventDefault">Enviar mensagem</BtnPrimary>
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

      <p class="mb-5 font-light">
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

<script setup>

function preventDefault(event) {
  event.preventDefault();
}

</script>