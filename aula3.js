
    const saudacao = function() {
        console.log("Olá, mundo!");
        };
        saudacao();
        function soma(a, b) {
            return a + b;
            }
            const resultado = soma(3, 5);
            console.log(resultado);
            const dobrar = function(numero) {
                return numero * 2;
                };
                console.log(dobrar(5));
                const quadrado = (numero) => {
                    return numero * numero;
                    };
                    console.log(quadrado(4));
                    const pessoa = {
                        nome: "Alice",
                        idade: 30,
                        cidade: "Cuiabrasa"
                        };
                        console.log(pessoa.nome);
                        console.log(pessoa["idade"]);
                        const calculadora = {
                            somar: function(a, b) {
                            return a + b;
                            },
                            subtrair: function(a, b) {
                            return a - b;
                            }};
                            console.log(calculadora.somar(5, 3));
                            console.log(calculadora.subtrair(10, 4));
                            const empresa = {
                                nome: "Minha Empresa",
                                endereco: {
                                rua: "Rua da Empresa",
                                cidade: "Cidade da Empresa"
                                }
                                };
                                console.log(empresa.endereco.rua);

                                const reality = {
                                    nome: "Série",
                                    info: {
                                    nome: "Vis a Vis",
                                    participantes: " Vis a Vis (estilizado como VisAVis) é uma série de televisão criminal espanhola, originalmente produzida pelo estúdio espanhol Globomedia, e exibida entre 2015 e 2019 pelo canal Antena 3. Ambientada sobretudo numa prisão, a série foca numa jovem que tem de se adaptar à sua nova vida de presidiária. "
                                    }
                                    };
                                    console.log(reality.info); 