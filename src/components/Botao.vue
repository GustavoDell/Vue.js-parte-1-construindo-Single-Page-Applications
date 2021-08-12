<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo"> {{rotulo}} </button>
</template>

<script>
export default {

    props: {
        tipo: {
            required: true,
            type: String,
        },
        rotulo: {
            required: true,
            type: String,
        },
        confirmacao: Boolean,
        estilo: String,
    },
    methods: {
        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Confirma operação?')){
                    this.$emit('botaoAtivado', new Date());//emit() permite disparar um evento com um nome qualquer
                }
                return;
            }
            this.$emit('botaoAtivado', new Date());
        }
    },
    computed: {
        estiloDoBotao() {
            var corBtn = '';
            if(this.estilo == 'padrao' || !this.estilo){
                corBtn = 'botao-padrao';
            } else if(this.estilo == 'perigo') {
                corBtn = 'botao-perigo';
            }
            return corBtn;  
        }
    }
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>