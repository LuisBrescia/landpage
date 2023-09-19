<template>
    <main class="container mx-auto text-gray-900">

        <header class="text-center mb-12 max-w-lg mx-auto">
            <Icon name="material-symbols:help-center-rounded" class="mb-2 rounded-md text-5xl"></Icon>
            <h3 class="text-4xl font-extrabold mb-2"><span class="text-blue-gradient">Perguntas</span> frequentes</h3>
            <span class="text-lg mb-3">Se não encontrar o que procura aqui, fale conosco.</span>
        </header>

        <div class="mx-auto max-w-6xl flex flex-col">

            <!-- * Pergunta 1 -->
            <AccordionItem>

                <template v-slot:accordionHeader>
                    E se estiver sem internet, irei receber a chamada do interfone ou portaria?
                </template>
                <template v-slot:accordionBody>
                    Sim, o nosso sistema identifica que não há nenhum equipamento online e faz
                    uma chamada
                    telefônica convencional.
                    Assim você não irá perder nenhuma chamada!
                </template>
                
            </AccordionItem>

            <!-- * Pergunta 2 -->
            <AccordionItem>

                <template v-slot:accordionHeader>
                    Posso fazer ligações entre moradores do condomínio?
                </template>
                <template v-slot:accordionBody>
                    Claro! Basta abrir o catálogo no aplicativo e escolher o apartamento no qual deseja chamar.
                </template>

            </AccordionItem>

            <!-- * Pergunta 3 -->
            <AccordionItem>

                <template v-slot:accordionHeader>
                    Consigo ver a imagem de quem tocou o interfone mesmo antes de atender?
                </template>
                <template v-slot:accordionBody>
                    Quando alguém chama no interfone, de imediato o seu app abre e exibe a imagem da portaria, 
                    assim você poderá visualizar e decidir se irá atender ou não a chamada.
                </template>

            </AccordionItem>

            <!-- * Pergunta 4 -->
            <AccordionItem>

                <template v-slot:accordionHeader>
                    Em caso de festa em meu apartamento, posso enviar convites via WhatsApp
                    para entrada no condomínio?
                </template>
                <template v-slot:accordionBody>
                    Sim! O nosso sistema proporciona a opção de enviar convites via WhatsApp,
                    assim seu convidado entrará rapidamente, evitando filas e com toda segurança que só o sistema Atendeaí
                    pode proporcionar!
                </template>
            </AccordionItem>

        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            activeAccordion: null
        };
    },
    methods: {
        toggleAccordion(index) {
            if (this.activeAccordion === index) {
                this.activeAccordion = null;
            } else {
                this.activeAccordion = index;
            }
        }
    }
};
</script>

<style scoped>
.accordion-item {
    overflow: hidden;
    transition: all .5s ease;
    max-height: 0;
}

.accordion-ativo {
    max-height: 300px;
}

.accordion-icon {
    transition: transform 0.3s ease-out;
}
</style>
