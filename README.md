# Resumo do projeto

Your School é um MVP para controle e visualização de notas escolares.
Este projeto foi desenvolvido no final do terceiro módulo da Kenzie Academy (6 meses) e foi feito em equipe. Todo o projeto é responsivo para todos os tamanhos de tela e foi desenvolvido em Mobile First.

# 🔨 Funcionalidades do projeto

-   `Cadastro/Login/Autologin`: é possível criar conta e fazer login, o token fica salvo no localStorage fazendo o autologin e conta com 3 tipos de usuários
-   `Professores`: conseguem adicionar e remover alunos das turmas, conseguem acessar todos os alunos da turma para visualizar, adicionar, editar ou remover notas em várias matérias dos 3 trimestres. Conseguem ver se o aluno está ou não aprovado em cada matéria.
-   `Responsáveis`: conseguem visualizar a nota de todos os alunos pelos quais é responsável
-   `Alunos`: consegue visualizar somente sua própria nota

## ✔️ Técnicas e tecnologias utilizadas

-   `React-TS`
-   `ContextAPI`
-   `CRUD usando Json-Server e Json-Server-Auth como API fake`
-   `react-router-dom`
-   `react-hook-form yup e yupResolver`
-   `axios try catch`
-   `styled-components`
-   `toastify`
-   `Vite`
-   `Yarn`
-   `Vercel - hospedagem do front`
-   `Render: hospedagem da API fake`
-   `Padrão de código (ESLint)`
-   `Trello`
-   `Figma`

# 🛠️ Abrir e rodar o projeto

Basta acessar a página no vercel. Pedimos que tenha um pouco de paciência, pois a hospedagem gratuita da fake API demora um pouco para responder.

<p>Caso queira acessar a página de professor, esse é o login:</p>
<p style="margin-left:10px">Usuário de professor (admin): login: professor@mail.com</p>
<p style="margin-left:10px">Senha: 123456 </p>

<p>Deploy: https://your-school.vercel.app/</p>
<p>Fake API: https://github.com/Kenzie-Schools-grupo05/json-server</p>
<p>Repositório original: https://github.com/Kenzie-Schools-grupo05/Your-School</p>

# 🛠️ Como funciona o projeto

## 1 - Ao acessar a página, você verá a página de login

 <img src="./src/readme/Home.png" alt="home page screenshot">

## 2 - É possível fazer cadastro, caso seja um aluno/responsável novato

 <img src="./src/readme/SignUp.png" alt="signUp page screenshot">

## 3 - Ao fazer login sendo aluno, você terá acesso a sua Dashboard com as notas

 <img src="./src/readme/StudentDash.png" alt="student dashboard screenshot">

## 4 - Caso seja responsável e faça login, terá acesso a Dashboard em que é possível escolher o boletim de qual filho deseja visualizar

 <img src="./src/readme/ParentSelectSun.png" alt="screenshot">

## 5 - Ao selecionar um filho, seu boletim será exibido

 <img src="./src/readme/ParentSeeSunGrades.png" alt="screenshot">

## 6 - No acesso do professor, temos a Dashboard diferente, com diversas funcionalidades extras

 <img src="./src/readme/TeacherDash.png" alt="screenshot">

### 6.1 - Ver os alunos matriculados na turma selecionada

  <img src="./src/readme/TeacherEditOrDeleteStudent.png" alt="screenshot">

### 6.2 - Editar as notas e aprovação do aluno selecionado

  <img src="./src/readme/TeacherEditStudent.png" alt="screenshot">

### 6.3 - Adicionar alunos que ainda não estão matriculados em nenhuma turma

  <img src="./src/readme/TeacherAddStudentToClass.png" alt="screenshot">

### 6.4 - Deletar/Remover aluno da sua turma atual

  <img src="./src/readme/TeacherDeleteStudent.png" alt="screenshot">

# Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/AlexandreVianaDev">
        <img src="https://avatars.githubusercontent.com/u/114513242?v=4" width="100px;" alt="Foto de Alexandre Viana no GitHub"/><br>
        <sub>
          <b>Alexandre Viana</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/arthurbda">
        <img src="https://avatars.githubusercontent.com/u/114718524?v=4" width="100px;" alt="Foto de Arthur Barreto no GitHub"/><br>
        <sub>
          <b>Arthur Barreto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://github.com/isgabriel">
        <img src="https://avatars.githubusercontent.com/u/100328347?v=4" width="100px;" alt="Foto de Gabriel Montenegro no GitHub"/><br>
        <sub>
          <b>Gabriel Montenegro</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GustavoGCM">
        <img src="https://avatars.githubusercontent.com/u/114591655?v=4" width="100px;" alt="Foto de Gustavo Cruz no GitHub"/><br>
        <sub>
          <b>Gustavo Cruz</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SandraMatos9">
        <img src="https://avatars.githubusercontent.com/u/109739949?v=4" width="100px;" alt="Foto de Sandra Rodrigues no GitHub"/><br>
        <sub>
          <b>Sandra Rodrigues</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
<p>Obrigado por acessar o nosso repositório. Se gostou, siga os autores no github :)</p>
