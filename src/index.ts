/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const readline = require ('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});


interface Aluno {
  nome: string;
  idade: number;
  nota: number;
}

const alunos: Aluno[] = [];

const cadastrarAlunos = (quantidade: number, contador: number = 0): void => {
  if (contador < quantidade) {
    rl.question(`Digite o nome do aluno ${contador + 1}: `, (nome: string) => {
      rl.question(`Digite a idade do aluno ${contador + 1}: `, (idade: string) => {
      rl.question(`Digite a nota do aluno ${contador + 1}: `, (nota: string) => {
        const notaNumber = Number(nota);
        const idadeNumber = Number(idade);
        if (isNaN(notaNumber + idadeNumber)) {
          console.log('Número inválido, tente novamente!');
          cadastrarAlunos(quantidade, contador);
        } else {
          alunos.push({ nome, idade:idadeNumber, nota: notaNumber });
          cadastrarAlunos(quantidade, contador + 1);  
        }
			});
		});
		});
  } else {
    console.log('Alunos cadastrados:');
    alunos.forEach((aluno) => {
      console.log(`- Nome:${aluno.nome}\n Idade: ${aluno.idade}\n Nota: ${aluno.nota}`);
    });
   
    rl.close();
  }
};

rl.question('Quantos alunos deseja inserir? ', (quantidade: string) => {
  const quantidadeNumber = Number(quantidade);
  if (isNaN(quantidadeNumber)) {
    console.log('Quantidade inválida, tente novamente!');
    rl.close();
  } else {
    console.log(`A quantidade digitada foi: ${quantidadeNumber}`);
    cadastrarAlunos(quantidadeNumber);
  }
}); 

});
