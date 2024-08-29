import './App.css'
import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope  } from 'react-icons/fa';
import { AiOutlineFileAdd, AiOutlineEdit, AiOutlineSearch, AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

function App() {
  const [documentType, setDocumentType] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDocumentType = (e) => {
    const value = e.target.value

    if (value.length === 11) {
      setDocumentType("CPF");
      // console.log("CPF")
    } else if (value.length === 14) {
      setDocumentType("CNPJ");
      // console.log("CNPJ")
    } else {
      setDocumentType('');
    }
  }



  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 container-fluid">
      <div className="border border-dark rounded-3 px-5 pb-4 form-container mx-auto" >
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="form-header p-3 d-flex flex-wrap justify-content-between align-items-start border-3 border-bottom border-white mb-3 m-xs-0 fs-md-6">
            <div className="d-flex gap-3 ">
              <Button name='Btn_Incluir' className="d-flex flex-column align-items-center bg-transparent border-0 button-size text-dark">
                <AiOutlineFileAdd className='fs-1' />
                Incluir
              </Button>
              <Button name='Btn_Alterar' className="d-flex flex-column align-items-center bg-transparent border-0 button-size text-dark">
                <AiOutlineEdit className='fs-1' />
                Alterar
              </Button>
              <Button name='Btn_Procurar' className="d-flex flex-column align-items-center bg-transparent border-0 button-size text-dark">
                <AiOutlineSearch className='fs-1' />
                Procurar
              </Button>
            </div>
            <Button name='Btn_Excluir' className="d-flex flex-column align-items-center bg-transparent border-0 button-size text-dark btn-delete">
              <AiOutlineDelete className='fs-1' />
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
                <Form.Label>Nome do cliente / Razão Social</Form.Label>
                <Form.Control className="w-100 mb-2" required type="text" name='nome' placeholder="Nome" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="document">
                <Form.Label>CPF / CNPJ</Form.Label>
                {/* DIGITE O CPF OU CNPJ SEM PONTUAÇÃO */}
                <Form.Control required type="text" name={documentType} placeholder="CPF / CPNJ" onChange={handleDocumentType} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dataNascimento">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control required type="date" name='data_nascimento' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="rg">
                <Form.Label>RG</Form.Label>
                <Form.Control required type="number" name='rg' placeholder='RG' />
              </Form.Group>
            </Col>
          </Row>

          <h5>Endereço</h5>
          <Row className="mb-3">
            <Col className='mb-2'>
              <Form.Group controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control required type="text" name='CEP' placeholder="CEP" />
              </Form.Group>
            </Col>
            <Col >
              <Form.Group controlId="endereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control required type="text" name='endereco' placeholder="Endereço" />
              </Form.Group>
            </Col>
            <Col className='mb-2' md={1}>
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
            <Col className='mb-2' lg={3} xs={6}>
              <Form.Group controlId="bairro">
                <Form.Label>Bairro</Form.Label>
                <Form.Control required type="text" name='bairro' placeholder="Bairro" />
              </Form.Group>
            </Col>
            <Col lg={3} xs={6}>
              <Form.Group controlId="cidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Control required type="text" name='cidade' placeholder="Cidade" />
              </Form.Group>
            </Col>
            <Col lg={3} xs={6}>
              <Form.Group controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control required type="text" name='estado' placeholder="Estado" />
              </Form.Group>
            </Col>
            <Col lg={3} xs={6}>
              <Form.Group controlId="pais">
                <Form.Label>País</Form.Label>
                <Form.Control required type="text" name='pais' placeholder="País" />
              </Form.Group>
            </Col>
          </Row>

          <h5>Contatos</h5>
          <Row className="mb-3 d-flex flex-wrap">
            <Col lg={3} xs={6}>
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
            <Col className='mb-2' lg={3} xs={6}>
              <Form.Group controlId="outroTelefone">
                <Form.Label>Outro Telefone</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaPhone />
                  </InputGroup.Text>
                  <Form.Control required type="text" name='outro_telefone' placeholder="Outro Telefone" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col lg={3} xs={6}>
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
            <Col lg={3} xs={6}>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control required type="text" name='email' placeholder="E-mail" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="observacoes" className="mb-3">
            <Form.Label><h5>Observações</h5></Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Observações" />
          </Form.Group>

          <Form.Group controlId="salvar" className="pt-4 d-flex justify-content-center">
            <Button type='submit' className='fs-5 px-5'>Salvar</Button>
          </Form.Group>
        </form>
      </div>
    </Container>
  );
}

export default App;
