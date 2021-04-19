// isso é um objeto
var pessoa = {
    nome: {
        primeiro: 'Gabriel',
        ultimo: 'Rio'
    },
    idade: 23,
    sexo: 'masculino',
    interesses: ['jogos', 'musica'],
    bio: function() {
        alert(this.nome.primeiro + ' ' + this.nome.ultimo + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
        alert('Oi! Eu sou ' + this.nome.primeiro + '.');
    }
}; 

pessoa['olhos'] = 'castanho';
pessoa.despedida = function() {
    alert('Adeus a todos!');
}
