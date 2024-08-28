
import './App.css'
import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineFileAdd, AiOutlineEdit, AiOutlineSearch, AiOutlineDelete } from 'react-icons/ai';



function App() {

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <div className="border border-dark rounded p-5 form-container">
        <Form>

          <div className="form-header p-3 d-flex justify-content-between align-items-start border-3 border-bottom border-white mb-3">
            <div className="d-flex gap-4">
              <Button name='Btn_Incluir' className="d-flex flex-column align-items-center button-size">
                <AiOutlineFileAdd className='fs-3' />
                Incluir
              </Button>
              <Button name='Btn_Alterar' className="d-flex flex-column align-items-center button-size">
                <AiOutlineEdit className='fs-3' />
                Alterar
              </Button>
              <Button name='Btn_Procurar' className="d-flex flex-column align-items-center button-size">
                <AiOutlineSearch className='fs-3' />
                Procurar
              </Button>
            </div>
            <Button name='Btn_Excluir' className="d-flex flex-column align-items-center button-size">
              <AiOutlineDelete className='fs-3' />
              Excluir
            </Button>
          </div>
          <h5>Código</h5>
          <Row className='mb-3'>
          <Col md={2}>
              <Form.Group controlId="codigo">
                <Form.Label>Código</Form.Label>
                <Form.Control type="number" name='codigo' placeholder="Código" required />
              </Form.Group>
            </Col>
          </Row>
          <h5>Informações Pessoais</h5>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="nome">
                <Form.Label>Nome do cliente/Razão Social</Form.Label>
                <Form.Control className="w-100" required type="text" name='nome' placeholder="Nome" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control required type="text" name='CPF' placeholder="CPF" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cnpj">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control required type="text" name='CNPJ' placeholder="CPNJ" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dataNascimento">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control required type="date" name='data_nascimento' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="RG">
                <Form.Label>RG</Form.Label>
                <Form.Control required type="number" name='rg' placeholder='RG'/>
              </Form.Group>
            </Col>
          </Row>

          <h5>Endereço</h5>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control required type="text" name='CEP' placeholder="CEP" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="endereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control required type="text" name='endereco' placeholder="Endereço" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="numero">
                <Form.Label>Número</Form.Label>
                <Form.Control required type="text" name='numero_da_casa' placeholder="Nº" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="complemento">
                <Form.Label>Complemento</Form.Label>
                <Form.Control type="text" name='complemento' placeholder="Complemento" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="bairro">
                <Form.Label>Bairro</Form.Label>
                <Form.Control required type="text" name='bairro' placeholder="Bairro" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Control required type="text" name='cidade' placeholder="Cidade" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control required type="text" name='estado' placeholder="Estado" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="pais">
                <Form.Label>País</Form.Label>
                <Form.Control required type="text" name='pais' placeholder="País" />
              </Form.Group>
            </Col>
          </Row>

          <h5>Contatos</h5>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="whatsapp">
                <Form.Label>WhatsApp</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaWhatsapp />
                  </InputGroup.Text>
                  <Form.Control required type="text" name="whatsapp" placeholder="WhatsApp" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="outroTelefone">
                <Form.Label>Outro Telefone</Form.Label>
                <Form.Control required type="text" name='outro_telefone' placeholder="Outro Telefone" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="instagram">
                <Form.Label>Instagram</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaInstagram />
                  </InputGroup.Text>
                  <Form.Control type="text" name='instagram' placeholder="Instagram" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="text" name='email' placeholder="E-mail" />
              </Form.Group>
            </Col>
          </Row>


          <Form.Group controlId="observacoes" className="mb-3">
            <Form.Label><h5>Observações</h5></Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Observações" />
          </Form.Group>



          <Form.Group controlId="salvar" className="pt-4 d-flex justify-content-center">
            <Button type='submit' className='fs-5 px-5'> Salvar </Button>
          </Form.Group>

        </Form>
      </div>
    </Container>
  );
}

export default App
