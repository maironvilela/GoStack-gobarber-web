import React from 'react';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';
import Logo from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background>
      <h1>Background</h1>
    </Background>

    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <Input name="name" placeholder="Nome" icon={FiUser} />
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button>Cadastrar</Button>
      </form>

      <a href="localhost:3000">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
