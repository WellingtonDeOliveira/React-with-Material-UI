import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function gerarPDF(dados) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const Def = {
        content: [
            {
                text: 'RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME nº ' + dados.numero + ' /2020',
                fontSize: 15,
                alignment: 'center',
                bold: true,
                margin: [0, 25, 0, 0],  //l, t, r, b
                style: 'header'
            },
            {
                text: '(' + (dados.value === 'local' ? 'X' : ' ') + ') Vítima no local   (' + (dados.value === 'socorrido' ? 'X' : ' ') + ') Vítima socorrida ' + (dados.value === 'socorrido' ? '- Hospital: ' + dados.hospital : ' '),
                margin: [0, 20, 0, 20],  //l, t, r, b
                alignment: 'center'
            },
            {
                margin: [10, 0, 0, 0],  //l, t, r, b
                table: {
                    widths: [500, '*', '*', '*'],
                    body: [
                        [
                            {
                                margin: [160, 0, 0, 0],  //l, t, r, b
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'dados essenciais da ocorrência',
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Endereço: ' + dados.endereco
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Bairro: ' + dados.bairro
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'AIS: ' + dados.ais
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Cidade: ' + dados.cidade
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Data: ' + dados.data
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Dia da semana: ' + dados.week
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Hora provável do crime: ' + dados.hora
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Há câmeras de vigilância no local ou no entorno: ' + dados.week
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Sim (' + (dados.camera === 'sim' ? ' X ': '   ') + ')'
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Não (' + (dados.camera === 'nao' ? ' X ': '   ') + ')'
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                margin: [220, 0, 0, 0],  //l, t, r, b
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'Suspeitos',
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Há suspeitos: '
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Sim (' + (dados.suspeito === 'sim' ? ' X ': '   ') + ')'
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Não (' + (dados.suspeito === 'nao' ? ' X ': '   ') + ')'
                                            }
                                        ],
                                    ]
                                },
                            }
                        ],
                        [
                            ( dados.suspeito === 'sim' ?
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Nome(s)/Cognome(s): ' + dados.nomes
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Informações relevantes sobre o (s) suspeito (s): ' + dados.info
                                            }
                                        ],
                                    ]
                                },
                            }
                            : null
                            )
                        ],
                        [
                            {
                                margin: [200, 0, 0, 0],  //l, t, r, b
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'Dados da vítima',
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Nome: ' + dados.nome
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'D.N.: ' + dados.dn
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 20, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                rowSpan: 2,
                                                colSpan: 2,
                                                text: 'Filiação: ' + dados.filiacao
                                            },
                                            {},
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                rowSpan: 2,
                                                text: 'Sexo: '
                                            },
                                            {
                                                margin: [0, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                rowSpan: 1,
                                                text: '(' + (dados.sexo === 'masculino' ? ' X ': '   ') + ')' + 'Masculino'
                                            }
                                        ],
                                        [
                                            {},
                                            {},
                                            {},
                                            {
                                                margin: [0, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                rowSpan: 1,
                                                text: '(' + (dados.sexo === 'feminino' ? ' X ': '   ') + ')' + 'Feminino'
                                            }
                                        ]
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Endereço: ' + dados.endereco2
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Bairro: ' + dados.bairro2
                                            }
                                        ]
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, true, false],
                                                text: 'Cidade: ' + dados.cidade2
                                            },
                                            {
                                                margin: [20, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Referência: ' + dados.refe
                                            }
                                        ],
									]
								},
                            }
                        ],
                        [
                            {
                                table: {
                                    body: [
                                        [
                                            {
                                                margin: [150, 0, 10, 0],  //l, t, r, b
                                                border: [false, false, false, false],
                                                text: 'Escolaridade: ' + dados.escolaridade + ''
                                            }
                                        ],
									]
								},
                            }
                        ],

                    ]
                }
            }
        ],
        style:{
            table: {
                margin: [150, 0, 0, 0]
            }
        }
    }

    pdfMake.createPdf(Def).download();

}

export default gerarPDF;