<template>
    <main class="container mx-auto text-gray-900">

        <header class="text-center mb-12 max-w-lg mx-auto">
            <Icon name="material-symbols:help-center-rounded" class="mb-2 rounded-md text-5xl"></Icon>
            <h3 class="text-4xl font-extrabold mb-2"><span class="text-blue-gradient">Perguntas</span> frequentes</h3>
            <span class="text-lg mb-3">Se não encontrar o que procura aqui, fale conosco.</span>
        </header>

        <div class="mx-auto text-justify max-w-6xl">
            <!-- Pergunta 1 -->
            <div class="mb-4">
                <header class="shadow-sm bg-blue-gradient text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
                    @click="toggleAccordion(1)">
                    <span class="pe-5">E se estiver sem internet, irei receber a chamada do interfone ou portaria?</span>
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" class="accordion-icon"
                    :class="{'rotate-180': activeAccordion === 1}" 
                    :data-expanded="activeAccordion === 1"/>
                </header>
                <div v-if="activeAccordion === 1" class="font-light p-4 transition-max-h ease-out duration-300"
                    v-cloak>
                    <p>
                        Sim, o nosso sistema identifica que não há nenhum equipamento online e faz uma chamada
                        telefônica convencional.
                        Assim você não irá perder nenhuma chamada!
                    </p>
                </div>
            </div>

            <!-- Pergunta 2 -->
            <div class="mb-4">
                <header class="shadow-sm bg-blue-gradient text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
                    @click="toggleAccordion(2)">
                    <span class="pe-5">
                        Posso fazer ligações entre moradores do condomínio?
                    </span>
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" class="accordion-icon"
                    :class="{'rotate-180': activeAccordion === 2}" 
                    :data-expanded="activeAccordion === 2"/>
                </header>
                <div v-if="activeAccordion === 2" class="font-light p-4 transition-max-h ease-out duration-300"
                    v-cloak>
                    <p>
                        Claro! Basta abrir o catálogo no aplicativo e escolher o apartamento no qual deseja chamar.
                    </p>
                </div>
            </div>

            <!-- Pergunta 3 -->
            <div class="mb-4">
                <header class="shadow-sm bg-blue-gradient text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
                    @click="toggleAccordion(3)">
                    <span class="pe-5">
                    Consigo ver a imagem de quem tocou o interfone mesmo antes de atender ?
                    </span>
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" class="accordion-icon"
                    :class="{'rotate-180': activeAccordion === 3}" 
                    :data-expanded="activeAccordion === 3"/>
                </header>
                <div v-if="activeAccordion === 3" class="font-light p-4 transition-max-h ease-out duration-300"
                    v-cloak>
                    <p>
                        Quando alguém chama no interfone, de imediato o seu app abre e exibe a imagem da portaria, assim
                        você poderá visualizar e decide se irá atender ou não a chamada.
                    </p>
                </div>
            </div>


            <!-- Pergunta 4 -->
            <div>
                <header class="shadow-sm bg-blue-gradient text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
                    @click="toggleAccordion(4)">
                    <span class="pe-5">
                        Em caso de festa em meu apartamento, posso enviar convites via WhatsApp para entrada no condomínio?
                    </span>
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" class="accordion-icon"
                    :class="{'rotate-180': activeAccordion === 4}" 
                    :data-expanded="activeAccordion === 4"/>
                </header>
                <div v-if="activeAccordion === 4" class="font-light p-4 transition-max-h ease-out duration-300"
                    v-cloak>
                    <p>
                        Sim! O nosso sistema proporciona a opção de enviar convites via WhatsApp, assim seu convidado
                        entrará rapidamente, evitando filas e com toda segurança que só o sistema Atendeaí pode
                        proporcionar!
                    </p>
                </div>
            </div>
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
/* CSS personalizado para as classes de transição */
.transition-max-h-enter-active,
.transition-max-h-leave-active {
    transition: max-height 0.3s ease-out;
}

.transition-max-h-enter,
.transition-max-h-leave-to {
    max-height: 0;
}

.accordion-icon {
    transition: transform 0.3s ease-out;
}
</style>
