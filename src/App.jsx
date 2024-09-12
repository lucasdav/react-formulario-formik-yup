import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import ErrorText from './components/ErrorText'
import Button from './components/Button'
import Form from './components/Form'
import { Formik } from 'formik'

function App() {

  const createUser = (values) => {
    console.log('Formulário submetido: ', values)
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
        <Formik initialValues={initialValues} 
        onSubmit={{ createUser }}
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
            {/* <ErrorText>
              Nome é obrigatório
            </ErrorText> */}
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
