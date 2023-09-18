<template>
  <navbar />

  <section class="py-12 px-4">
    <Home />
  </section>

  <section class="bg-blue-gradient py-12 px-4">
    <Objetivo />
  </section>

  <section class="bg-white py-12 px-4">
    <Solutions />
  </section>

  <section class="bg-gray-950 py-12 px-4">
    <NossoBlog />
  </section>

  <section class="bg-blue-gradient py-12 px-4">
    <SistemaInstalado />
  </section>

  <section class="bg-white py-12 px-4">
    <PerguntasFrequentes />
  </section>

  <section class="bg-white py-12 px-4">
    <Formulario />
  </section>

  <section class="bg-blue-gradient py-12 px-4">
    <PreFooter />
  </section>

  <section class="bg-gray-950 pt-16 pb-4 px-4">
    <Footer />
  </section>

  <div class="fixed bottom-5 container flex justify-end right-5">
    <button id="chatBot" class="bg-white shadow-lg border rounded-full p-3">
      <Icon name="fluent:chat-20-filled" size="3rem" />
    </button>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

#nomeMarca {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  #nomeMarca {
    font-size: 2.05rem;
  }

}
</style>

<script setup>

// left-2/4 right-2/4 -translate-x-2/4

</script>
