import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import ErrorText from './components/ErrorText'
import Button from './components/Button'
import Form from './components/Form'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().min(8, 'Senha deve ter no mínimo 8 caracteres').required('Senha é obrigatória'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais').required('Confirmação de senha é obrigatória')
})

function App() {

  const createUser = (values, { resetForm }) => {
    console.log('Formulário submetido: ', values)

    const user = values

    axios.post('http://localhost:3000/users', user)
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        resetForm()
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário: ', error)
      })
  }

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>
          Cadastro
        </Heading>
        <Formik 
          initialValues={initialValues} 
          onSubmit={{ createUser }}
          validationSchema={validationSchema}
        >
        <Form>
          <Fieldset>
            <Label>
              Nome
            </Label>
            <Input 
              name="name"
              id="name"
            />
            <ErrorMessage name="name" component={ErrorText}/>
          </Fieldset>
          <Fieldset>
            <Label>
              E-mail
            </Label>
            <Input 
              name="email"
              type="email"
              id="email"
            />
            <ErrorMessage email="email" component={ErrorText}/>
          </Fieldset>
          <Fieldset>
            <Label>
              Senha
            </Label>
            <Input 
              name="password"
              type="password"
              id="password"
            />
            <ErrorMessage password="password" component={ErrorText}/>
          </Fieldset>
          <Fieldset>
            <Label>
              Confirme sua senha
            </Label>
            <Input 
              name="confirmPassword"
              type="password"
              id="confirmPassword"
            />
            <ErrorMessage confirmPassword="confirmPassword" component={ErrorText}/>
          </Fieldset>
          <Button type='submit'>
            Enviar
          </Button>
        </Form>
        </Formik>
      </Container>
    </>
  )
}

export default App
