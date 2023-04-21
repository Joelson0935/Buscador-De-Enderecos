function endereco() {
    const cep = document.getElementById("texto").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(resp => {
            document.querySelector('#cep').setAttribute('value', resp.cep)
            document.querySelector('#cidade').setAttribute('value', resp.localidade)
            document.querySelector('#uf').setAttribute('value', resp.uf)
            document.querySelector('#bairro').setAttribute('value', resp.bairro)
            document.querySelector('#logradouro').setAttribute('value', resp.logradouro)
            document.querySelector('#complemento').setAttribute('value', resp.complemento)
            document.querySelector('#ddd').setAttribute('value', resp.ddd)

            console.log(resp);
        }).catch(erro => {

            if (erro) {
                document.querySelector('#err').innerHTML = 'cep não encontrado!'
                setInterval(() => {
                    document.querySelector('#err').innerHTML = ''
                }, 3000);
            }
        })
    document.getElementById("texto").value = ""
}

const busca = document.getElementById('busca');
busca.addEventListener('change', endereco)