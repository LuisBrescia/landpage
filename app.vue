<template>
  <navbar />

  <section class="container mx-auto flex flex-col gap-5 justify-end mb-20 pt-24">

    <h3 class="text-7xl font-semibold text-center mb-4">
      Tenha <span class="text-blue-gradient">controle</span> total<br>
      da sua portaria!
    </h3>
    <p class="text-center text-lg leading-7">
      Com nosso aplicativo da AtendeAí integrado ao seu sistema de portaria, você poderá<br>
      controlar acessos de sua portaria, de onde estiver e de forma totalmente autônoma.
    </p>
    <div class="flex justify-center my-7 gap-5">
      <button class="btn-escuro">Teste Grátis</button>
      <button class="btn-claro flex items-center">
        <Icon name="ic:round-play-arrow" size="1.2em" class="text-blue-600 me-1"></Icon>
        Vídeo explicativo
      </button>
    </div>

  </section>

  <!-- <section class="bg-white py-12 px-4">
    <articleinfo />
  </section> -->

  <section class="bg-blue-gradient py-12 px-4">
    <PreFooter />
  </section>

  <section class="bg-black pt-16 pb-4 px-4">
    <Footer />
  </section>

</template>

<style></style>
